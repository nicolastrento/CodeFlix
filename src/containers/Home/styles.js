import styled, { keyframes } from "styled-components";

// Animações
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const Background = styled.div`
  background: linear-gradient(135deg, 
    rgba(0, 0, 0, 0.8) 0%, 
    rgba(17, 24, 39, 0.85) 25%,
    rgba(31, 41, 55, 0.8) 50%,
    rgba(17, 24, 39, 0.85) 75%,
    rgba(0, 0, 0, 0.9) 100%
  ),
  ${props => `url(${props.img})`};
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;


  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      ellipse at center,
      rgba(139, 69, 19, 0.1) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 100%;
    height: 100%;
    background: conic-gradient(
      from 0deg at 50% 50%,
      transparent 0deg,
      rgba(147, 51, 234, 0.03) 60deg,
      transparent 120deg,
      rgba(59, 130, 246, 0.03) 180deg,
      transparent 240deg,
      rgba(16, 185, 129, 0.03) 300deg,
      transparent 360deg
    );
    animation: ${float} 20s ease-in-out infinite;
    z-index: 1;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: 1500px;
  gap: 200px;
  z-index: 2;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    padding: 40px 20px;
  }
`

export const Info = styled.div`
  z-index: 2;
  padding: 20px;
  width: 50%;
  animation: ${fadeInUp} 1s ease-out;

  h1 {
    font-size: clamp(38px, 5vw, 64px);
    font-weight: 800;
    background: linear-gradient(
      135deg,
      #ffffff 0%,
      #e2e8f0 25%,
      #cbd5e1 50%,
      #94a3b8 75%,
      #64748b 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.1;
    margin-bottom: 24px;
    letter-spacing: -0.02em;
    
    &::after {
      content: '';
      display: block;
      width: 80px;
      height: 2px;
      background: linear-gradient(90deg, #ff0555, #ff0000);
      margin-top: 16px;
      border-radius: 2px;
    }
  }

  p {
    font-size: clamp(16px, 2vw, 12px);
    font-weight: 400;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.6;
    margin-bottom: 32px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 1024px) {
    text-align: center;
    max-width: 100%;
  }
`

export const Poster = styled.div`
  position: relative;
  animation: ${scaleIn} 1s ease-out 0.3s both;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: linear-gradient(
      45deg,
      rgba(139, 69, 19, 0.3),
      rgba(59, 130, 246, 0.3),
      rgba(16, 185, 129, 0.3),
      rgba(147, 51, 234, 0.3)
    );
    border-radius: 40px;
    filter: blur(20px);
    z-index: -1;
    animation: ${float} 6s ease-in-out infinite;
  }

  img {
    width: clamp(280px, 25vw, 400px);
    height: auto;
    border-radius: 24px;
    box-shadow: 
      0 25px 50px -12px rgba(0, 0, 0, 0.8),
      0 0 0 1px rgba(255, 255, 255, 0.1);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    
    &:hover {
      transform: scale(1.05) rotateY(5deg);
      box-shadow: 
        0 35px 80px -12px rgba(0, 0, 0, 0.9),
        0 0 0 1px rgba(255, 255, 255, 0.2);
    }
  }

  @media (max-width: 1024px) {
    img {
      width: clamp(250px, 60vw, 350px);
    }
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 12px;
  }
`