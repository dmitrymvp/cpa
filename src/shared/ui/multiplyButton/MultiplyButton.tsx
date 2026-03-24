import style from './multiplyButton.module.css';

interface MultiplyButtonProps {
  isActive: boolean;
  title: string;
  onClick: () => void;
}

const MultiplyButton = ({ isActive, title, onClick }: MultiplyButtonProps) => {
  return (
    <button
      className={`${style.button} ${isActive ? style.active : ''}`}
      onClick={onClick}
    >
      <span className={style.span}>{title}</span>
    </button>
  );
};

export default MultiplyButton;
