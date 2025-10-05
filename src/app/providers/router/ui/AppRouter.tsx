import { routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { PageLoader } from '@/widgets/PageLoader';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className="page">{element}</div>
            </Suspense>
          }
          path={path}
        />
      ))}
    </Routes>
  );
};
