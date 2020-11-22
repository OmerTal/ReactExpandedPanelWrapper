import React, { useState } from 'react';
import { MdClose, MdFullscreen } from 'react-icons/md';
import Modal, { setAppElement } from 'react-modal';
var ExpandedPanel = function (_a) {
    var children = _a.children;
    var _b = useState(false), isModalOpen = _b[0], setIsModalOpen = _b[1];
    var modalContent = children;
    var openModal = function () {
        setIsModalOpen(true);
    };
    var closeModal = function () {
        setIsModalOpen(false);
    };
    var ModalStyle = {
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
    var topLeft = {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    setAppElement('#root');
    return (React.createElement(React.Fragment, null,
        modalContent,
        React.createElement(MdFullscreen, { style: topLeft, color: 'rgb(0, 0, 0)', size: '2rem', onClick: function () { return openModal(); } }),
        React.createElement(Modal, { isOpen: isModalOpen, onRequestClose: closeModal, style: ModalStyle },
            modalContent,
            React.createElement(MdClose, { style: topLeft, color: 'rgb(0, 0, 0)', size: '2rem', onClick: function () { return closeModal(); } }))));
};
export default ExpandedPanel;
//# sourceMappingURL=index.js.map