import Iso from 'iso';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {match as matchRoute, RouterContext} from 'react-router';
import alt from './alt';
import {getRoutes} from './routes/routes.jsx';

function Renderer(request, response) {

    const iso = new Iso();

    function renderResult(template, props, storeData, status) {
        try {
            alt.bootstrap(JSON.stringify(storeData || {}));
            const content = renderToString(<RouterContext {...props} />);
            const statusCode = status || 200;
            iso.add(content, alt.flush());
            console.log('response.render: ', storeData);
            return response
                .status(statusCode)
                .render(template, {
                    title: 'Craig page',
                    html: iso.render(content, storeData)
                });
        } catch (error) {
            console.log('render error 1');
            renderResult('base', {}, {}, 500);
        }
    }

    function renderPage(seedData) {
        const routes = getRoutes(false);
        matchRoute({routes, location: request.url}, (error, redirectLocation, renderProps) => {
            if (error) {
                console.log('render error 2');
                renderResult('base', {}, {}, 503);
            } else if (redirectLocation) {
                console.log('render redirect');
                response.redirect(302, redirectLocation.pathname + redirectLocation.search);
            } else if (renderProps) {
                console.log('render index now');
                renderResult('index', renderProps, seedData);
            } else {
                console.log('render error 3');
                renderResult('base', {}, {}, 404);
            }
        });
    }

    this.render = (seedData) => {
        renderPage(seedData);
    };
}

export default Renderer;
