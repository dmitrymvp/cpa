import Header from '@widgets/header/Header';
import styles from './hero.module.css';
import SocialBar from './ui/socialBar/SocialBar';
import MainButton from '@shared/ui/mainButton/MainButton';
import Container from '@shared/ui/container/Container';
import type { Lang } from '@shared/types/language';
import { heroSectionText } from '@shared/model/i18n';

interface HeroProps {
  lang: Lang;
}

const Hero = ({ lang }: HeroProps) => {
  return (
    <main className={styles.hero}>
      <Container>
        <div className={styles.flexContainer}>
          <Header />
          <section className={styles.section}>
            <h1 className={styles.title}>
              {`${heroSectionText.title} `}
              <span>{heroSectionText.animatedText[0]}</span> {/* ИСПРАВИТЬ ПРИ АНИМАЦИИ */}
            </h1>
            <p className={styles.subtitle}>{heroSectionText[lang].subtitle}</p>
            <MainButton text={heroSectionText[lang].button} onClick={() => console.log('click')} />
          </section>
          <SocialBar />
        </div>
      </Container>
    </main>
  );
};

export default Hero;
