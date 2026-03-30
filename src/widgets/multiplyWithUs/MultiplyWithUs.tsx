import MultiplyButton from '@shared/ui/multiplyButton/MultiplyButton';
import MainButton from '@shared/ui/mainButton/MainButton';
import Container from '@shared/ui/container/Container';
import Footer from './ui/footer/Footer';
import Card from '@shared/ui/card/Card';
import { multiplyTextMainButton, multiplyWithUsSectionTitle } from './model/constants';
import { useEffect, useState } from 'react';
import { getApiData } from '@shared/api/getApiData';
import { capitalize } from '@shared/utils/capitalize';
import type { MultiplyWithUsData } from './model/types';
import type { Lang } from '@shared/types/language';
import styles from './multiplyWithUs.module.css';

interface MultiplyWithUsProps {
  lang: Lang;
}

const MultiplyWithUs = ({ lang }: MultiplyWithUsProps) => {
  const [data, setData] = useState<MultiplyWithUsData | null>(null);
  const [isActive, setIsActive] = useState<number>(0);

  useEffect(() => {
    getApiData<MultiplyWithUsData>(lang, 'multiply')
      .then((res) => {
        const dataWithID = res.map((item, index) => ({
          ...item,
          id: index,
        }));

        setData(dataWithID);
      })
      .catch(console.error);
  }, [lang]);

  return (
    <Container>
      <section className={styles.section}>
        <h2 className={styles.title}>{multiplyWithUsSectionTitle}</h2>
        <div className={styles.grid}>
          <div className={styles.leftColumn}>
            {data?.map((item) => {
              return (
                <MultiplyButton
                  key={item.id}
                  title={lang === 'en' ? capitalize(item.title, '_') : item.title}
                  isActive={isActive === item.id}
                  onClick={() => setIsActive(item.id)}
                />
              );
            })}
          </div>
          <div className={styles.rightColumn}>
            {data?.map((item) => {
              if (isActive === item.id)
                return (
                  <Card>
                    <div className={styles.wrapper}>
                      <p className={styles.steps}>{item.steps.step_1}</p>
                      <p className={styles.steps}>{item.steps.step_2}</p>
                      <MainButton
                        text={multiplyTextMainButton[item.id].text[lang]}
                        onClick={() => console.log('click')}
                      />
                    </div>
                  </Card>
                );
            })}
            <Footer lang={lang} />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default MultiplyWithUs;
