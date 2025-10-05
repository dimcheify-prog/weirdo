import { Loader } from '@/shared/ui/Loader/Loader';
import * as css from './PageLoader.module.scss';

export const PageLoader = () => {
  return (
    <div className={css.pageLoader}>
      <Loader />
    </div>
  );
};
