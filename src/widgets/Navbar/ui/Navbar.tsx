import { classNames } from '@/shared/lib/classNames/classNames';
import * as css from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';

interface NavbarProps {
  clasNames?: string;
}

export const Navbar = ({ clasNames }: NavbarProps) => {
  return (
    <div className={classNames(css.navbar, {}, [clasNames])}>
      <div className={css.links}>
        <AppLink
          to={'/about'}
          className={css.mainLink}
          theme={AppLinkTheme.SECONDARY}
        >
          To About Page
        </AppLink>
        <AppLink
          to={'/'}
          className={css.mainLink}
          theme={AppLinkTheme.SECONDARY}
        >
          To Main Page
        </AppLink>
      </div>
    </div>
  );
};
