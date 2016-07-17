import alt from './alt';
import Iso from 'iso';
import {render} from 'react-dom';
import {getRoutes} from './routes/routes.jsx';

Iso.bootstrap((state, _, container) => {
    alt.bootstrap(state);
    render(getRoutes(true), container);
});
