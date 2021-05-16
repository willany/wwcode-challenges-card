import { GlobalStyle } from "./globalStyle";
import {
  Container,
  Card,
  Image,
  Content,
  Name,
  Description,
  SocialMidia,
  ImageContainer,
} from "./styles";

import profilePicture from "./assets/willany.jpg";
import linkedinIcon from "./assets/icons/linkedin.svg";
import githubIcon from "./assets/icons/github.svg";
import instagramIcon from "./assets/icons/instagram.svg";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Card>
          <ImageContainer>
            <Image
              src={profilePicture}
              alt="Mulher com um computador no colo"
            />
          </ImageContainer>
          <Content>
            <Name>Willany Silva</Name>
            <Description>
              Software engineer no iFood formada em Tecnologia em Sistemas para
              internet. Sempre trabalhei como full stack mas hoje estou focada
              em frontend, de vez em quando faço umas gracinhas com Ruby on
              Rails 💟
            </Description>
            <SocialMidia>
              <a
                href="https://www.linkedin.com/in/willany-silva-abb14726/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedinIcon} alt="Ícone do Linkedin" />
              </a>
              <a
                href="https://github.com/willany"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubIcon} alt="Ícone do Github" />
              </a>
              <a
                href="https://www.instagram.com/willanysilva/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagramIcon} alt="Ícone do Instagram" />
              </a>
            </SocialMidia>
          </Content>
        </Card>
      </Container>
    </>
  );
}

export default App;
