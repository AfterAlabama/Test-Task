import { App } from './App';
import {createRoot} from 'react-dom/client'

const DOMNode = document.getElementById('root');
const root = createRoot(DOMNode!);

root.render(<App/>)