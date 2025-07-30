
import Styles from './Login_Button.module.css';

type LoginButtonProps = {
    onClick: () => void;

};

function LoginButton({ onClick }: LoginButtonProps) {
  return (
    <div className={Styles.container}>  
        <button className={Styles.button} onClick={onClick}>ログイン</button>
    </div>
  );
}

export default LoginButton;

