import React, { useState , CSSProperties } from 'react';
import { MdClose, MdFullscreen } from 'react-icons/md';
import Modal, { setAppElement } from 'react-modal';

interface IProps {
    children: React.ReactNode;
}

const ExpandedPanel: React.FC<IProps> = ({ children }: IProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const topLeft: CSSProperties = {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        cursor: 'pointer',
    }

    setAppElement('#root');

    return (
        <>
            {modalContent}
            <MdFullscreen
                style={topLeft}
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
                    style={topLeft}
                    color='rgb(0, 0, 0)'
                    size='2rem'
                    onClick={() => closeModal()}
                />
            </Modal>
        </>
    );
};

export default ExpandedPanel;