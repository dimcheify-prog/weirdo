import * as css from './ThemeSwitcher.module.scss';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import LightModeIcon from '@/shared/assets/icons/light-icon.svg';
import DarkMode from '@/shared/assets/icons/dark-icon.svg';
import { Button, ButtonVariant } from '../Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      variant={ButtonVariant.PRIMARY}
      className={classNames('', {}, [className, css.themeButton])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? (
        <LightModeIcon width={'auto'} height={'auto'} />
      ) : (
        <DarkMode width={'auto'} height={'auto'} />
      )}
    </Button>
  );
};
