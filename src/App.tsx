import React, { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import { ButtonAppBar } from 'components/appBar/AppBar';
import { Path } from 'enums';
import { Characters, Episodes, Home, Locations } from 'pages';
import { ReturnComponentType } from 'types';

export const App: FC = (): ReturnComponentType => {
  // const status = useSelector<AppRootStateType, RequestStatusType>(
  //   state => state.app.status,
  // );

  const ROUTES = [
    { path: Path.HOME, element: <Home /> },
    { path: Path.CHARACTERS, element: <Characters /> },
    { path: Path.LOCATIONS, element: <Locations /> },
    { path: Path.EPISODES, element: <Episodes /> },
  ];

  return (
    <div>
      <ButtonAppBar />
      {/* {status === 'loading' && <Preloader />} */}
      <Routes>
        {ROUTES.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </div>
  );
};
