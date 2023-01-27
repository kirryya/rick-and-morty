import React, { FC, useEffect, useState } from 'react';

import { Avatar, Box, Grid, Paper, Pagination } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import style from './Characters.module.css';

import { CharacterInfo, UniverseModalWindow } from 'components';
import { fetchCharacter, fetchCharacters, StateType, TypedDispatch } from 'store';
import { ReturnComponentType } from 'types';

export const Characters: FC = (): ReturnComponentType => {
  const { results } = useSelector<StateType, any>(state => state.character.characters);
  const { pages } = useSelector<StateType, any>(state => state.character.characters.info);

  const dispatch = useDispatch<TypedDispatch>();

  const [isActive, setIsActive] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = React.useState<number>(1);

  useEffect(() => {
    dispatch(fetchCharacters(pageNumber));
  }, [dispatch, pageNumber]);

  const onPagePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ): void => {
    setPageNumber(value);
  };

  const onNameClickHandle = (id: number): void => {
    setIsActive(true);
    dispatch(fetchCharacter(id));
  };

  return (
    <div className={style.main}>
      <div className={style.paginator}>
        <Pagination
          count={pages}
          page={pageNumber}
          color="primary"
          showFirstButton
          showLastButton
          onChange={onPagePaginationChange}
        />
      </div>

      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {results?.map(({ id, name, image }: any) => {
          return (
            <Grid item key={id}>
              <Box sx={{ display: 'flex', width: '100%' }}>
                <Box sx={{ p: 3, width: '100%' }}>
                  <Paper elevation={3}>
                    <div key={id} className={style.characters}>
                      <span
                        className={style.character}
                        onClick={() => onNameClickHandle(id)}
                        role="button"
                        aria-hidden
                      >
                        <h2 className={style.name}>{name}</h2>
                      </span>
                      <Avatar
                        variant="square"
                        alt={`Character's ava`}
                        src={image}
                        sx={{ width: 300, height: 300 }}
                      />
                    </div>
                  </Paper>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <UniverseModalWindow isActive={isActive} setActive={setIsActive}>
        <CharacterInfo />
      </UniverseModalWindow>
    </div>
  );
};
