import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media (min-width: 900px) {
    height: 100vh;
    flex-direction: row-reverse;
  }
`;

export const Card = styled.section`
  width: 300px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 4rem 1rem;

  @media (min-width: 900px) {
    width: 1000px;
    flex-direction: row-reverse;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;

  :before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #a95fd482;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  width: 100%;
  background-color: #1c1938;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;

  @media (min-width: 900px) {
    text-align: left;
  }
`;

export const Name = styled.h1`
  color: #a95fd4;
  font-size: 2.4rem;
`;

export const Description = styled.p`
  color: #ffffff;
  font-size: 1.4rem;
  text-align: justify;
`;

export const SocialMidia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0 3rem 0;

  img {
    padding-bottom: 2rem;
  }

  img:hover {
    opacity: 0.6;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    width: 50%;

    img {
      padding: 0;
    }
  }
`;
