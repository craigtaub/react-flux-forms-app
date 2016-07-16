var babelify = require('babelify');
var browserify = require('browserify');
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

gulp.task('browserify', function() {
    var options = {
        entries: [files.js.entryPoints.client],
        extensions: ['.js', '.jsx']
    };
    return browserify(options)
        .plugin('bundle-collapser/plugin')
        .transform({global: true}, envify({
            _: 'purge',
            NODE_ENV: 'development'
        }))
        .transform(babelify, {
            presets: ['es2015', 'react']
        })
        .bundle()
        .pipe(source('bundle.min.js'))
        .pipe(buffer())
        .pipe(gulp.dest(files.staticDest.js.app))
});
