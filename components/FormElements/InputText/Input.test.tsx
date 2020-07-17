import React from "react";
import { shallow, mount } from 'enzyme';
import {InputText} from "./InputText";


describe(">>> InputText component", () => {
    let wrapper: any;

    const changeHandler = jest.fn()

    const initProps = {
        value: 'test',
        plaseholder: 'test input',
        name: 'test',
        change: changeHandler
    }

    beforeEach(() => {
        wrapper = shallow(<InputText  {...initProps}/>)
    })

    it("+++ should render btn component", () => {
        expect(wrapper.find('[type="text"]')).toHaveLength(1)
    })

    it("+++ should changeHandler component ", () => {
        //console.log(wrapper.props().value)
        wrapper.simulate('change', {target: {name: 'test', value: 1}})
        expect(changeHandler).toBeCalled();
    })
})