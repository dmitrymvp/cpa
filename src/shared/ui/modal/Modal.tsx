import type { ReactElement } from 'react';
import styles from './modal.module.css';
import Logo from '@assets/img/logo.svg?react';

interface ModalProps {
  onClose: () => void;
  children: ReactElement;
}

const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.modal}>
        <button className={styles.closeModalButton} onClick={onClose}>
          <svg width="18" height="16" viewBox="0 0 18 16">
            <path d="M17.448 0.55214L11.256 7.87214L17.448 15.1921V15.7441H13.224L8.736 10.3201L4.224 15.7441H-3.8147e-06V15.1921L6.192 7.87214L-3.8147e-06 0.55214V0.00014019H4.224L8.736 5.42414L13.248 0.00014019H17.448V0.55214Z" />
          </svg>
        </button>
        <div className={styles.container}>
          <div className={styles.logoWrapper}>
            <Logo className={styles.logo} />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
