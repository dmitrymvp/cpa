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
import { v4 as uuidv4 } from 'uuid';

interface MultiplyWithUsProps {
  lang: Lang;
}

const MultiplyWithUs = ({ lang }: MultiplyWithUsProps) => {
  const [data, setData] = useState<MultiplyWithUsData | null>(null);
  const [isActive, setIsActive] = useState<string>('');

  useEffect(() => {
    getApiData<MultiplyWithUsData>(lang, 'multiply')
      .then((res) => {
        const dataWithID = res.map((item) => ({
          ...item,
          id: uuidv4(),
        }));

        setData(dataWithID);
        setIsActive(dataWithID[0].id);
      })
      .catch(console.error);
  }, [lang]);
  console.log(isActive);
  console.log(data);
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
                  title={
                    lang === 'en' ? item.title.split('_').map(capitalize).join(' ') : item.title
                  }
                  isActive={isActive === item.id}
                  onClick={() => setIsActive(item.id)}
                />
              );
            })}
          </div>
          <div className={styles.rightColumn}>
            {data?.map((item, index) => {
              if (isActive === item.id)
                return (
                  <Card key={item.id}>
                    <div className={styles.wrapper}>
                      <p className={styles.steps}>{item.steps.step_1}</p>
                      <p className={styles.steps}>{item.steps.step_2}</p>
                      <MainButton
                        key={item.id}
                        text={multiplyTextMainButton[index].text[lang]}
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
