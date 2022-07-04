import React, { FC } from 'react';
import { DOTS, usePagination } from '../../hooks/usePagination';

import styles from './../../styles/atoms/pagination.module.scss';

type Props = {
  onPageChange: (arg: number) => void;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
  className: string;
  test: string;
};

const Pagination: FC<Props> = props => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className, test } = props;

  const paginationRange =
    (usePagination({
      currentPage,
      totalCount,
      siblingCount,
      pageSize,
    }) as any[]) || undefined;

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className={[styles['pagination-container'], className].join(' ')}>
      {/* Left navigation arrow */}
      <li
        className={[styles['pagination-item'], currentPage === 1 && styles['disabled']].join(' ')}
        onClick={onPrevious}
        key={props.test + 'arrow left' + Math.floor(Math.random() * 100)}
      >
        <div className={[styles['arrow'], styles['left']].join(' ')} />
      </li>
      {paginationRange.map(pageNumber => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <li
              className={[styles['pagination-item'], styles['dots']].join(' ')}
              key={props.test + 'dots' + Math.floor(Math.random() * 100)}
            >
              &#8230;
            </li>
          );
        }

        // Render our Page Pills
        return (
          <li
            className={[styles['pagination-item'], pageNumber === currentPage ? styles['selected'] : ''].join(' ')}
            onClick={() => onPageChange(pageNumber)}
            key={props.test + pageNumber + Math.floor(Math.random() * 100)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={[styles['pagination-item'], currentPage === lastPage && styles['disabled']].join(' ')}
        onClick={onNext}
        key={props.test + 'arrow right' + Math.floor(Math.random() * 100)}
      >
        <div className={[styles['arrow'], styles['right']].join(' ')} />
      </li>
    </ul>
  );
};

export default Pagination;
