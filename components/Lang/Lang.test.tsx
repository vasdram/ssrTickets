import React from "react";
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import LangContainer from './Lang';
import {Provider} from "react-redux";

describe('>>>Lang component', () => {
    let wrapper: any;

    const initState = {active: 'ru'}
    const mockStore = configureStore();
    const init = {
        lang: 'ru',
    };
    let store;
    let clickMock = jest.fn(() => {})

    beforeEach(() => {
        store = mockStore(init);

        wrapper = shallow(<LangContainer/>);
    })

    // it('+++ should state active ru', () => {
    //    expect(wrapper.dive().state()).toEqual(initState);
    // });
    //
    // it('+++ should component rendered', () => {
    //     expect(wrapper.dive().find('span')).toHaveLength(2)
    // });
    //
    // it('+++ component clickHandler', () => {
    //     wrapper.dive().instance().clickHandler = jest.fn();
    //     wrapper.dive().find('[data-lang="en"]').simulate('click', { currentTarget: {getAttribute: () => 'en'} })
    //     expect(wrapper.dive().state().active).toEqual('en');
    // });

});