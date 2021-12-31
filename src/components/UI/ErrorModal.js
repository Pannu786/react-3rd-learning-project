import React from 'react';
import ReactDOM from 'react-dom';

import style from './ErrorModal.module.css';

import Card from '../UI/Card';
import Button from './Button';

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onCustomclick} />;
};

const ModalOvrelay = (props) => {
  return (
    <Card sexyLook={style.modal}>
      <header className={style.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={style.content}>
        <p>{props.msg}</p>
      </div>
      <footer className={style.actions}>
        <Button onClick={props.onCustomclick}>Alrigty</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCustomclick={props.onCustomclick} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOvrelay
          title={props.title}
          msg={props.msg}
          onCustomclick={props.onCustomclick}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
