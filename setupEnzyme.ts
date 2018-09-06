import { configure } from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';

// @ts-ignore: old code
configure({ adapter: new EnzymeAdapter() });
