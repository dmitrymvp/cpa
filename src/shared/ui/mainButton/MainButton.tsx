import style from './mainButton.module.css';

interface MainButtonProps {
  text: string;
  onClick: () => void;
}

function MainButton({ text, onClick }: MainButtonProps) {
  return (
    <button className={style.mainButton} onClick={onClick}>
      {text}
    </button>
  );
}

export default MainButton;
