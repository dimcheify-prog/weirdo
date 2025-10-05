import { useTranslation } from 'react-i18next';
import * as css from './NotFoundPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <div className={classNames(css.notFoundPage, {}, [])}>
      {t('Страница не найдена')}
    </div>
  );
};
