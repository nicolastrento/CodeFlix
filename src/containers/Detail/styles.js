// Details/styles.js
import styled, { keyframes } from "styled-components";

const scale = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`

const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Background = styled.div`
  background-image: url(${props => props.$image});
  height: 50vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background-image: linear-gradient(to top, #0f0f0f, transparent);
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 1500px;
  margin: -100px auto 0;
  padding: 0 20px;
  gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: -50px;
  }
`

export const Cover = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
  z-index: 99;
  animation: ${scale} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  img {
    width: 420px;
    border-radius: 20px;
    box-shadow: 
      0 20px 60px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 
        0 25px 80px rgba(0, 0, 0, 0.5),
        0 0 0 1px rgba(255, 255, 255, 0.2);
    }

    @media (max-width: 768px) {
      width: 300px;
    }
  }
`

export const Info = styled.div`
  flex: 1;
  max-width: 600px;
  z-index: 99;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px 0;
  animation: ${slideInUp} 0.6s ease;

  h2 {
    font-size: clamp(28px, 5vw, 48px);
    font-weight: 800;
    color: #fff;
    line-height: 1.2;
    margin-bottom: 10px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
    animation: ${fadeIn} 0.8s ease;
  }

  p {
    font-weight: 400;
    color: rgba(255, 255, 255, 0.9);
    margin-top: 20px;
    margin-bottom: 40px;
    line-height: 1.6;
    font-size: 16px;
    animation: ${fadeIn} 1s ease;
    
    @media (max-width: 768px) {
      font-size: 14px;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 768px) {
    padding: 10px;
    text-align: center;
  }
`

export const ContainerMovies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%; 

  div {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    height: 100%;
    margin: 30px 10px;
  }

  h4 {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  iframe {
    border: none;
    border-radius: 6px;
  }
`