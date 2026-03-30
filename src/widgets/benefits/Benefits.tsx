import type { Lang } from '@shared/types/language';
import type { BenefitsData } from './model/types';
import styles from './benefits.module.css';
import Container from '@shared/ui/container/Container';
import Card from '@shared/ui/card/Card';
import { useEffect, useRef, useState } from 'react';
import { getApiData } from '@shared/api/getApiData';
import { highlightWords } from '@shared/utils/highlightWords';
import {
  benefitsCreepingLine,
  benefitsSectionTitle,
  highlightWordsBenefitsSection,
} from './model/constatnts';
import snakeBenefits from '@assets/img/snake-with-tongue.png';
import Logo from '@assets/img/logo.svg?react';

interface Props {
  lang: Lang;
}

const Benefits = ({ lang }: Props) => {
  const [data, setData] = useState<BenefitsData | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const [repeat, setRepeat] = useState(2);

  useEffect(() => {
    getApiData(lang, 'benefits').then(setData).catch(console.error);
  }, [lang]);

  useEffect(() => {
    const calculate = () => {
      if (!itemRef.current) return;

      const itemWidth = itemRef.current.offsetWidth;
      const screenWidth = window.innerWidth;

      const count = Math.ceil((screenWidth * 2) / itemWidth);
      setRepeat(count);
    };

    calculate();
    window.addEventListener('resize', calculate);
    return () => window.removeEventListener('resize', calculate);
  }, []);

  const highlight = highlightWords(data?.title, highlightWordsBenefitsSection[lang]);

  return (
    <Container>
      <section className={styles.section}>
        <h2 className={styles.title}>{benefitsSectionTitle}</h2>
        <div className={styles.grid}>
          <div className={styles.leftColumn}>
            <h3 className={styles.subtitle}>{highlight}</h3>
            <p className={styles.description}>{data?.description}</p>
          </div>
          <div className={styles.rightColumn}>
            {data?.benefits?.map((item) => {
              return (
                <div>
                  <Card>
                    <p className={styles.textCard}>{item}</p>
                  </Card>
                </div>
              );
            })}
          </div>
          <div className={styles.imageWrapper}>
            <img src={snakeBenefits} alt="" className={styles.image} />
          </div>
        </div>
        <div className={styles.creepingLine} ref={trackRef}>
          <div className={styles.track}>
            {new Array(repeat).fill(null).map((_, i) => (
              <div className={styles.item} key={i} ref={i === 0 ? itemRef : null}>
                <p>{benefitsCreepingLine}</p>
                <Logo className={styles.logo} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Benefits;
