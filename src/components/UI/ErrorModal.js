import style from './ErrorModal.module.css';

import Card from '../UI/Card';
import Button from './Button';

const ErrorModal = (props) => {
  return (
    <div>
      <div className={style.backdrop}/>
      <Card sexyLook={style.modal}>
        <header className={style.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={style.content}>
          <p>{props.msg}</p>
        </div>
        <footer className={style.actions}>
          <Button>Alrigty</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
