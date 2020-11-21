import React from 'react';
import { MdClose, MdFullscreen } from 'react-icons/md';
import './index.css';
import Modal from 'react-modal';

interface IProps {
    children: React.ReactNode;
}

const ExpandedPanel: React.FC<IProps> = ({ children }: IProps) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const modalContent: React.ReactNode = children;

    const openModal = (): void => {
        setIsModalOpen(true);
    };

    const closeModal = (): void => {
        setIsModalOpen(false);
    };

    const ModalStyle: Modal.Styles = {
        content: {
            overflow: 'hidden',
            top: '7%',
            left: '25%',
            right: '25%',
            bottom: '7%',
            padding: '2%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        overlay: {
            backgroundColor: 'rgba(43, 43, 43, 0.75)',
        },
    };

    Modal.setAppElement('#root');

    return (
        <>
            {modalContent}
            <MdFullscreen
                className='topLeft'
                color='rgb(0, 0, 0)'
                size='2rem'
                onClick={() => openModal()}
            />
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={ModalStyle}
            >
                {modalContent}
                <MdClose
                    className='topLeft'
                    color='rgb(0, 0, 0)'
                    size='2rem'
                    onClick={() => closeModal()}
                />
            </Modal>
        </>
    );
};

export default ExpandedPanel;