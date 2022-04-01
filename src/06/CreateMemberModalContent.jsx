import React, {PureComponent} from 'react';
import Button from "../04/Button";
import Text from "../04/Text";
import Input from "../03/Input";
import { Consumer } from "./ModalContext";

class CreateMemberModalContent extends PureComponent {
    render() {
        return (
            <Consumer>
                {({ closeModal }) => (
                    <div>
                        <div>
                            <div><Text>회원가입</Text></div>
                            <Input label="이메일" name="email" />
                            <Input label="이름" name="name" />
                            <Input label="비밀번호" name="password" />
                        </div>
                        <Button primary>가입하기</Button>
                        <Button onPress={closeModal}>닫기</Button>
                    </div>
                )}
            </Consumer>
        );
    }
}

export default CreateMemberModalContent;
