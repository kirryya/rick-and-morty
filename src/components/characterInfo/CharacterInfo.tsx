import React, { FC } from 'react';

import { useSelector } from 'react-redux';

import { AppRootStateType } from 'store/store';
import { ReturnComponentType } from 'types';

export const CharacterInfo: FC = (): ReturnComponentType => {
  const character = useSelector<AppRootStateType, any>(
    state => state.character.character,
  );

  return (
    <div>
      <div>Gender: {character.gender}</div>
      <div>Species: {character.species}</div>
      <div>Status: {character.status}</div>
    </div>
  );
};
