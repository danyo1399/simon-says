import { render } from 'preact';
import './pwa';
import { App } from './components/App';
import './style.css';
import './data'
import './workerClient'
render(<App />, document.getElementById('root'));
