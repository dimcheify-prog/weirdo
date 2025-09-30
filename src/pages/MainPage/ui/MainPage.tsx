import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');
  return (
    <div>
      {t('Главная страница')} <p>{t('Новая запись')}</p>
    </div>
  );
};

export default MainPage;
