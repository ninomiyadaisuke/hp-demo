import { FC } from 'react';
import NewsList from '../organisms/news/NewsList';

import styles from '../../styles/templates/news_template.module.scss';

const NewsTemplate: FC = () => {
  return (
    <article>
      <div className={styles.news}>
        <NewsList />
      </div>
    </article>
  );
};

export default NewsTemplate;
