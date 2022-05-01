import register from 'preact-custom-element';

import SimonSays from './components/SimonSays';


register(SimonSays, 'simon-says', ['name', 'quotes']);