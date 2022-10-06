import React, { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchCharacter } from 'store';
import { AppRootStateType, TypedDispatch } from 'store/store';
import { ReturnComponentType } from 'types';

export const Characters: FC = (): ReturnComponentType => {
  const characters = useSelector<AppRootStateType, any>(
    state => state.character.characters,
  );
  const dispatch = useDispatch<TypedDispatch>();

  useEffect(() => {
    dispatch(fetchCharacter());
  }, [dispatch]);

  return (
    <div>
      {characters.results?.map((ch: any) => (
        <div key={ch.id}>
          <span>Name: {ch.name}</span>
          <span>Species: {ch.species}</span>
          <span>Gender: {ch.gender}</span>
          <img src={ch.image} alt={`Character's ava`} />
        </div>
      ))}
    </div>
  );
};