import style from './multiplyButton.module.css';

interface MultiplyButtonProps {
  onClick: () => void;
  title: string;
}

const MultiplyButton = ({ title, onClick }: MultiplyButtonProps) => {
  return (
    <button className={style.button} onClick={onClick}>
      <span className={style.span}>{title}</span>
    </button>
  );
};

export default MultiplyButton;
