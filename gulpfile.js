var babelify = require('babelify');
var browserify = require('browserify');
var watchify = require('watchify');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var envify = require('envify/custom');
var source = require('vinyl-source-stream');

var staticBase = './static-assets';
var files = {
    staticDest: {
        js: {
            app: staticBase + '/js'
        }
    },
    js: {
        entryPoints: {
            // client: './src/client/client.jsx',
            // server: './src/server/server.js'
            client: './src/server/client.jsx'
        }
    }
};

require('babel-register');

// taken from https://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function bundleJs(watch) {
    var options = {
        entries: [files.js.entryPoints.client],
        extensions: ['.js', '.jsx'],
        cache: {}, // required for watchify
        packageCache: {}, // required for watchify
        fullPaths: watch // required to be true only for watchify
    };
    var bundler = watch ? watchify(browserify(options)) : browserify(options);
    bundler
        .transform(babelify, {
           presets: ['es2015', 'react']
       })
       // think extra transform just deals with envify.
       .transform(envify({
           // replaces environment checks with strings..
           // e.g. process.env.NODE_ENV becomes 'development'..
           _: 'purge',
           NODE_ENV: 'development'
       }));

    function rebundleJs(done) {
        return bundler
            .plugin('bundle-collapser/plugin') //saves bytes in bundle. collapses paths.
            .bundle() // the actual thing that bundles
            .on('error', function(error) {
                // error
                console.log('error:' , error.message);
                // done();
            })
            .pipe(source('bundle.min.js'))
            .pipe(buffer()) // converts stream to buffer..otherwise file itself is emitted
            // basically allows us to control destination better
            .pipe(gulp.dest(files.staticDest.js.app))
            .on('end', function() {
               // ended
               console.log('rebundled');
            });
    }
    bundler.on('update', rebundleJs); // watchify emits 'update' when file changes..generate new bundle.
    // rebundling is faster after first one due to caching.
    // faster feedback cycle.

    return rebundleJs;
}

gulp.task('browserify', bundleJs(false));

gulp.task('watchify', bundleJs(true));
