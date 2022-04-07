import React, {PureComponent} from 'react';
import Modal from "../Modal";

import { Provider } from './context';

export default function createModalProvider(ContentMap = {}) {
    return class ModalProvider extends PureComponent {
        constructor(props) {
            super(props);

            this.state = { showModal: false };
            this.handleClose = this.handleClose.bind(this);
            this.handleOpen = this.handleOpen.bind(this);
        }
        handleClose() {
            this.setState({ showModal: false })
        }
        handleOpen(contentId, modalProps) {
            this.contentId = contentId;
            this.modalProps = modalProps;
            this.setState({ showModal: true });
        }
        render() {
            const { children } = this.props;
            const { showModal } = this.state;
            const ModalContent = ContentMap[this.contentId];

            return (
                <Provider value={{
                    openModal: this.handleOpen,
                    closeModal: this.handleClose
                }}>
                    {children}
                    {showModal && ModalContent && (
                        <Modal>
                            <ModalContent {...this.modalProps} />
                        </Modal>
                    )}
                </Provider>
            );
        }
    }
};
