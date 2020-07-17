import React from "react";
import { shallow, mount } from 'enzyme';
import {Btn} from './Btn';


describe('>>> Btn component', ()=> {
    let wrapper: any;
    const clickHandler = jest.fn()
    const initProps = {
        type: "btn",
        bg: 'yellow',
        click: clickHandler
    }
    beforeEach(() => {
        wrapper = shallow(<Btn  {...initProps}/>)
    })

    it("+++ should render btn component", () => {
        expect(wrapper.find('button')).toHaveLength(1)
    })

    it("+++ should render link component", () => {
        wrapper.setProps({type: 'link'})
        expect(wrapper.find('a')).toHaveLength(1)
    })

    it("+++ should clickHandler to be called", () => {
        wrapper.simulate('click')
        expect(clickHandler).toBeCalled();
    })
})