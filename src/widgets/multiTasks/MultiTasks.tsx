import { useEffect, useState } from 'react';
import {
  highlightWordsMultiTasksSection,
  multiTasksSectionTitle,
} from '@widgets/multiTasks/model/constants';
import { getApiData } from '@shared/api/getApiData';
import { highlightWords } from '@shared/utils/highlightWords';
import Container from '@shared/ui/container/Container';
import Card from '@shared/ui/card/Card';
import styles from './multiTasks.module.css';
import snakeWithDiamond from '@assets/img/snake-with-diamond.png';
import type { TasksData } from './model/types';
import type { Lang } from '@shared/types/language';

const TILE_COLUMNS: [number, number][] = [
  [0, 2],
  [2, 5],
];

interface Props {
  lang: Lang;
}

const MultiTasks = ({ lang }: Props) => {
  const [data, setData] = useState<TasksData | null>(null);

  useEffect(() => {
    getApiData(lang, 'tasks').then(setData).catch(console.error);
  }, [lang]);

  const highlight = highlightWords(data?.description, highlightWordsMultiTasksSection[lang]);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{multiTasksSectionTitle}</h2>
          <div className={styles.grid}>
            <div className={styles.column}>
              <Card className={styles.cardwithSnake}>
                <p>{highlight}</p>
                <div className={styles.imageWrapper}>
                  <img src={snakeWithDiamond} alt="" className={styles.image} />
                </div>
              </Card>
            </div>
            {TILE_COLUMNS.map(([start, end], col) => (
              <div key={col} className={styles.column}>
                {data?.tiles?.slice(start, end).map((item, i) => (
                  <Card key={i}>
                    <h4 className={styles.cardTitle}>{item.title}</h4>
                    <p className={styles.cardDescription}>{item.text}</p>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MultiTasks;
