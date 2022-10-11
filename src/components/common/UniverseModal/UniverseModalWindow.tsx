import React from 'react';

import style from './UniverseModal.module.css';

import { ReturnComponentType } from 'types';

type UniverseModalWindowPropsType = {
  isActive: boolean;
  setActive: (active: boolean) => void;
  children?: React.ReactNode;
};

export const UniverseModalWindow = ({
  isActive,
  setActive,
  children,
}: UniverseModalWindowPropsType): ReturnComponentType => {
  return (
    <div
      className={isActive ? `${style.modal} ${style.active}` : style.modal}
      onClick={() => setActive(false)}
      role="button"
      aria-hidden
    >
      <div
        className={
          isActive ? `${style.modal__content} ${style.active}` : style.modal__content
        }
        onClick={e => e.stopPropagation()}
        role="button"
        aria-hidden
      >
        {children}
      </div>
    </div>
  );
};
