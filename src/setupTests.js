import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';

configure({ adapter: new Adapter() });

// 경고 메시지를 오류로 인식하더록 설정
afterEach(() => {
   console.error.mockClear();
});

beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation((e) => {
        throw new Error(e);
    })
})