import { Contact, Container, Footer, Header, Link, Logo, Main, SocialIcons, TitleLogo } from './styles';
import { IBaseLayoutProps } from './types';
import logo from "./../../assets/logo.png"
import title from "./../../assets/title-logo.png"
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export function BaseLayout({ children }: IBaseLayoutProps) {
  return (
    <Container>
      <Header>
        <TitleLogo src={title}/>
        <Logo src={logo}/>
      </Header>
      <Main>{children}</Main>
      <Footer>
      <p>&copy; 2024 DAC Investimentos. Todos os direitos reservados.</p>
      <Contact>
      <p>danyllo.aniceto.carvalho@gmail.com</p>
      <SocialIcons>
        <Link href="https://instagram.com/danylloaniceto" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </Link>
        <Link href="https://www.linkedin.com/in/danyllo-aniceto-564610267/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </Link>
      </SocialIcons>
      </Contact>
      </Footer>
    </Container>
  );
}