"use strict";
exports.__esModule = true;
var react_1 = require("react");
var md_1 = require("react-icons/md");
var react_modal_1 = require("react-modal");
var ExpandedPanel = function (_a) {
    var children = _a.children;
    var _b = react_1["default"].useState(false), isModalOpen = _b[0], setIsModalOpen = _b[1];
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
            alignItems: 'center'
        },
        overlay: {
            backgroundColor: 'rgba(43, 43, 43, 0.75)'
        }
    };
    var topLeft = {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };
    react_modal_1["default"].setAppElement('#root');
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        modalContent,
        react_1["default"].createElement(md_1.MdFullscreen, { style: topLeft, color: 'rgb(0, 0, 0)', size: '2rem', onClick: function () { return openModal(); } }),
        react_1["default"].createElement(react_modal_1["default"], { isOpen: isModalOpen, onRequestClose: closeModal, style: ModalStyle },
            modalContent,
            react_1["default"].createElement(md_1.MdClose, { style: topLeft, color: 'rgb(0, 0, 0)', size: '2rem', onClick: function () { return closeModal(); } }))));
};
exports["default"] = ExpandedPanel;
