import alt from './alt';
import Iso from 'iso';
import {render} from 'react-dom';
import {getRoutes} from './routes/routes.jsx';

console.log('run client app');
Iso.bootstrap((state, _, container) => {
    alt.bootstrap(state);
    console.log('render + getRoutes true');
    render(getRoutes(true), container);
});
