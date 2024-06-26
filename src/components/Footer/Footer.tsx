import { FC } from 'react';
import './Footer.scss';
import { CustomLink } from '../../ui/CustomLink/CustomLink';
import { Logo } from '@/ui/Logo';

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="container footer__wrap">
        <Logo classNames='footer__logo' />
        <nav className="footer__nav">
          <ul className="footer__list">
            <li className="footer__item">
              <CustomLink
                to={"/frontend"}
                classNames="footer__link"
              >
                Про нас
              </CustomLink>
            </li>
            <li className="footer__item">
              <CustomLink
                classNames="footer__link"
                to={"frontend/fundraisers-page"}
              >
                Усі збори
              </CustomLink>
            </li>
            <li className="footer__item">
              <CustomLink
                classNames="footer__link"
                to={"frontend/ТОП-волонтерів"}
              >
                ТОП волонтерів
              </CustomLink>
            </li>
          </ul>
        </nav>

        <div className="footer__social-links">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#Instagram" className="custom-link footer__link">
                Instagram
              </a>
            </li>
            <li className="footer__item">
              <a href="#Facebook" className="custom-link footer__link">
                Facebook
              </a>
            </li>
            <li className="footer__item">
              <a href="mailto:support@volunteersbridge@gmail.com" className="custom-link footer__link">
                support@volunteersbridge@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__company-name">
          Volunteers © Bridge 2024 🇺🇦
        </div>
      </div>
    </footer>
  );
};
