// Import the necessary modules
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Configure Enzyme to use the adapter for React 17
configure({ adapter: new Adapter() });
