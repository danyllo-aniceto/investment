import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  padding: 50px 16px;
  background-color:#93a8b75c
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #93a8b7;
  padding: 15px;
`;

export const TitleLogo = styled.img`
  width: 180px;
`;

export const Logo = styled.img`
  width: 100px;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background-color: #051b2c;
  color: #fff;
  font-size: 0.9rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  align-self: flex-end;
`;

export const Link = styled.a`
    color: #fff;
    font-size: 1.2rem;
    transition: color 0.3s;

    :hover{
      color: #0077b5;
    }
`;

export const Contact = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
`;