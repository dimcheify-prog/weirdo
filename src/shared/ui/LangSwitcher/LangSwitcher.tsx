import i18n from '@/shared/config/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariant } from '../Button/Button';

export const LangSwitcher = ({}) => {
  const { t } = useTranslation();

  const toggleLanguage = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button variant={ButtonVariant.PRIMARY} onClick={toggleLanguage}>
      {t('Язык')}
    </Button>
  );
};
