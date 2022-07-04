import React, { FC } from 'react';
import { NewsItemsType } from '../../../lib/types';

import styles from '../../../styles/molecules/news_item.module.scss';
import Text from '../../atoms/Text';

const NewsItem: FC<NewsItemsType> = props => {
  const { timestamp, textNews } = props;

  return (
    <li className={styles.news}>
      <div className={styles.box}>
        <div className={styles['box__top']}>
          <Text text={timestamp} />
        </div>
        <Text text={textNews} />
      </div>
      <hr className={styles.hr} />
    </li>
  );
};

export default NewsItem;
