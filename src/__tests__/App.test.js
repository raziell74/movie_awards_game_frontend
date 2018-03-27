import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

describe('test app', () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('Enzyme element detection', () => {
        const output = shallow(
            <App />
        );
        const title = output.find('h1.App-title');

        expect(shallowToJson(output)).toMatchSnapshot();
        expect(title.text()).toEqual('Welcome to React');
    });
});
