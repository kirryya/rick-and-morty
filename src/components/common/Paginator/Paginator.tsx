import React, { FC, useState } from 'react';

import { Stack } from '@mui/material';

import styles from './Paginator.module.css';

type PaginatorType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  portionSize: number;
};

export const Paginator: FC<PaginatorType> = ({
  currentPage,
  onPageChanged,
  pageSize,
  portionSize,
  totalUsersCount,
}: PaginatorType) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);

  const pages = [];

  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState<number>(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <Stack spacing={2}>
      <div className={styles.paginator}>
        {portionNumber > 1 && (
          <button
            type="button"
            className={styles.prev}
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}
          >
            prev
          </button>
        )}

        {pages
          .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map((p, index: number) => {
            return (
              <span
                /* eslint-disable-next-line react/no-array-index-key */
                key={index}
                className={currentPage === p ? styles.selectedPage : styles.page}
                role="button"
                aria-hidden
                onClick={() => {
                  onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          })}
        {portionCount > portionNumber && (
          <button
            type="button"
            className={styles.next}
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            next
          </button>
        )}
      </div>
    </Stack>
  );
};
