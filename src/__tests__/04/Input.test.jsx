import React from 'react';
import { shallow } from 'enzyme';

import Input from "../../03/Input";

describe('<Input>', () => {
    it('renders without crashing', () => {
        expect(() => {
            shallow(<Input name="test_name" />);
        }).not.toThrow();
    });

    it('has one element', () => {
        const wrapper = shallow(<Input name="test_name" />);
        expect(wrapper.length).toEqual(1);
        expect(wrapper).toHaveLength(1);
    });

    describe('contains <Input>', () => {
        it('renders one input', () => {
            const wrapper = shallow(<Input name="text_name" />);
            expect(wrapper.find('input')).toHaveLength(1);
            expect(wrapper.find('label')).toHaveLength(1);
        });

        // find(): 엘리먼트 출력
        // prop(), props(): 프로퍼티에 전달된 값 출력
        it('assigns the prop value and type', () => {
            const expectedValue = '123';
            const wrapper = shallow(<Input name="test_name" value={expectedValue} />);
            expect(wrapper.find('input').prop('value')).toBe(expectedValue);
            const { type, value } = wrapper.find('input').props();
            expect(value).toBe(expectedValue);
            expect(type).toBe('text');
        });

        // setProps(): 프로퍼티 값 변경
        it('renders errorMessage', () => {
            const wrapper = shallow(<Input name="test_name" />);
            expect(wrapper.find('.error')).toHaveLength(0);
            const expectedErrorMessage = '옳지 못한 값이 입력되었습니다.';
            wrapper.setProps({ errorMessage: expectedErrorMessage });
            expect(wrapper.find('span').prop('className')).toBe('error');
            expect(wrapper.find('.error')).toHaveLength(1);
            expect(wrapper.html()).toContain(expectedErrorMessage);
        });

        // simulate(): 가상 이벤트 작동
        it(' calls back onChange on input change', () => {
            const changeStub = jest.fn();
            const wrapper = shallow(<input name="test_name" onChange={changeStub} />);
            expect(changeStub).not.toHaveBeenCalled();
            const expectedTargetValue = 'updated input';
            wrapper.find('input').simulate('change', { target: { value: expectedTargetValue } });
            expect(changeStub).toHaveBeenCalledTimes(1);
            expect(changeStub).toHaveBeenCalledWith('test_name', expectedTargetValue);
        })
    })
})

// import React from 'react';
// import ReactDOM from "react-dom";
//
// import Input from "../../03/Input";
//
// // ReactDom(): 자식 컴포넌트가 연결된 모든 컴포넌트를 출력함
// describe('<Input>', () => {
//     it('renders without crashing', () => {
//         const div = document.createElement('div');
//         ReactDOM.render(<Input name="name" />, div);
//         ReactDOM.unmountComponentAtNode(div);
//         expect(React.isValidElement(<Input name="test_name" />)).toBeTruthy();
//     })
// })