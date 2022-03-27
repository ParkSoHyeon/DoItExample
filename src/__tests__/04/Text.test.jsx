import React from 'react';
import { shallow, mount } from 'enzyme';

import Text from "../../04/Text";

describe('<Text>', () => {
    it('renders without crashing', () => {
       expect(() => {
           shallow(<Text>테스트</Text>);
       }).not.toThrow();
    });

    // mount(): 하이어오더 컴포넌트 전체 출력
    // dive(): 하이어오더 컴포넌트 특정 하위 컴포넌트만을 선택해 출력
    it('contains <span>', () => {
        // expect(mount(<Text>테스트</Text>).find('span')).toHaveLength(1);
        expect(shallow(<Text>테스트</Text>).dive().find('span')).toHaveLength(1);
    });
})