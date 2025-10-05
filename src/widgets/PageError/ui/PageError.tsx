import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import * as css from './PageError.module.scss';

export const PageError = () => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={css.pageError}>
      <p>{t('Глобальная ошибка')}</p>
      <Button variant={ButtonVariant.PRIMARY} onClick={reloadPage}>
        {t('Кнопка перезагрузки')}
      </Button>
    </div>
  );
};
