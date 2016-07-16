import Renderer from '../Renderer';

function renderer(request, response) {
    const instance = new Renderer(request, response);
    const seedData = (response.locals.seedData) ? response.locals.seedData : {};
    instance.render(seedData);
}

export default renderer;
