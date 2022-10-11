import React, { FC, useEffect, useState } from 'react';

import { Box, Grid, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { CharacterInfo } from 'components/characterInfo/CharacterInfo';
import { Paginator } from 'components/common/Paginator/Paginator';
import { UniverseModalWindow } from 'components/common/UniverseModal/UniverseModalWindow';
import { fetchCharacters } from 'store';
import { fetchCharacter } from 'store/reducers/character/character-reducer';
import { AppRootStateType, TypedDispatch } from 'store/store';
import { ReturnComponentType } from 'types';

export const Characters: FC = (): ReturnComponentType => {
  const characters = useSelector<AppRootStateType, any>(
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
  }, [currentPage]);

  const onPageChanged = (pageNumber: number): void => {
    dispatch(fetchCharacters(pageNumber));
  };
  const onNameClickHandle = (id: number): void => {
    setIsActive(true);
    dispatch(fetchCharacter(id));
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <Paginator
          currentPage={currentPage}
          portionSize={portionSize}
          onPageChanged={onPageChanged}
          pageSize={pageSize}
          totalUsersCount={totalUsersCount}
        />
      </div>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {characters.results?.map((ch: any) => {
          return (
            <Grid item key={ch.id}>
              <Box sx={{ display: 'flex', width: '100%' }}>
                <Box sx={{ p: 3, width: '100%' }}>
                  <Paper elevation={3}>
                    <div key={ch.id} style={{ display: 'flex', flexDirection: 'column' }}>
                      <span
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          cursor: 'pointer',
                        }}
                        onClick={() => onNameClickHandle(ch.id)}
                        role="button"
                        aria-hidden
                      >
                        <h2>{ch.name}</h2>
                      </span>
                      <img src={ch.image} alt={`Character's ava`} />
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
