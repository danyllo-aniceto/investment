import {
  Contact,
  Container,
  Footer,
  Header,
  LinkSocialMedia,
  Logo,
  Main,
  SocialIcons,
  TitleLogo,
} from './styles';
import { IBaseLayoutProps } from './types';
import logo from './../../assets/logo.png';
import title from './../../assets/title-logo.png';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function BaseLayout({ children }: IBaseLayoutProps) {
  return (
    <Container>
      <Header>
        <Link to="/">
          <TitleLogo src={title} alt="Title Logo" />
        </Link>
        <Link to="/">
          <Logo src={logo} alt="Logo" />
        </Link>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <p>&copy; 2024 DAC Investimentos. Todos os direitos reservados.</p>
        <Contact>
          <p>danyllo.aniceto.carvalho@gmail.com</p>
          <SocialIcons>
            <LinkSocialMedia
              href="https://instagram.com/danylloaniceto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </LinkSocialMedia>
            <LinkSocialMedia
              href="https://www.linkedin.com/in/danyllo-aniceto-564610267/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </LinkSocialMedia>
          </SocialIcons>
        </Contact>
      </Footer>
    </Container>
  );
}
