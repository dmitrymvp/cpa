import Container from '@shared/ui/container/Container';
import Logo from '@assets/img/logo.svg?react';
import styles from './errorPage.module.css';
import MainButton from '@shared/ui/mainButton/MainButton';
import type { Lang } from '@shared/types/language';
import { errorPageTextButton } from './model/constants';

interface ErrorPageProps {
  lang: Lang;
  code?: number;
}

const ErrorPage = ({ lang, code = 404 }: ErrorPageProps) => {
  return (
    <Container>
      <section className={styles.errorPage}>
        <div className={styles.logoWrapper}>
          <Logo className="logo" />
        </div>
        <div className={styles.infoWrapper}>
          <p className={styles.errorCode}>{code}</p>
          <MainButton text={errorPageTextButton[lang]} onClick={() => console.log('click')} />
        </div>
      </section>
    </Container>
  );
};

export default ErrorPage;
