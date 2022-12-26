import React, { FC, useEffect, useState } from 'react';

import { Avatar, Box, Grid, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import style from './Characters.module.css';

import { CharacterInfo, Paginator, UniverseModalWindow } from 'components';
import { fetchCharacter, fetchCharacters } from 'store';
import { AppRootStateType, TypedDispatch } from 'store/store';
import { ReturnComponentType } from 'types';

export const Characters: FC = (): ReturnComponentType => {
  const { results } = useSelector<AppRootStateType, any>(
    state => state.character.characters,
  );

  const currentPage = useSelector<AppRootStateType, number>(
    state => state.character.currentPage,
  );

  // const totalUsersCount = useSelector<AppRootStateType, number>(
  //   state => state.character.characters?.info.count,
  // );

  const totalUsersCount = 826;
  const pageSize = 20;
  const portionSize = 10;
  const dispatch = useDispatch<TypedDispatch>();

  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchCharacters(currentPage));
  }, []);

  const onPageChanged = (pageNumber: number): void => {
    dispatch(fetchCharacters(pageNumber));
  };
  const onNameClickHandle = (id: number): void => {
    setIsActive(true);
    dispatch(fetchCharacter(id));
  };

  return (
    <div className={style.main}>
      <div className={style.paginator}>
        <Paginator
          currentPage={currentPage}
          portionSize={portionSize}
          onPageChanged={onPageChanged}
          pageSize={pageSize}
          totalUsersCount={totalUsersCount}
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
