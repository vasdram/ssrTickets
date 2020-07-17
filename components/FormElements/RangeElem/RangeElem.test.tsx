import React from "react";
import { shallow, mount } from 'enzyme';
import {RangeElem} from './RangeElem';



describe('>>> RangeElem component', ()=> {

    let wrapper: any
    const initState = {
        value: 2
    }
    const changeHandler = jest.fn()
    const props = {
        onChange: changeHandler,
        defaultValue: 2
    }

    beforeEach(() => {
        wrapper = shallow(<RangeElem  {...props} />)
    })

    it("+++ should render props", () => {
        console.log(wrapper.props())
        //expect(wrapper.props().defaultValue).toEqual(2)
    })
})