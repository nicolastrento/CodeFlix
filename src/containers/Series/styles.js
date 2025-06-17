import styled, { css, keyframes } from "styled-components";

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

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const progressAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
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

export const BackgroundFilmes = styled.div`
  background: linear-gradient(
    135deg, 
    rgba(0, 0, 0, 0.8) 0%, 
    rgba(17, 24, 39, 0.85) 25%,
    rgba(31, 41, 55, 0.8) 50%,
    rgba(17, 24, 39, 0.85) 75%,
    rgba(0, 0, 0, 0.9) 100%
  ),
  ${({ $img }) => `url(${$img})`};
  height: 85vh;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  /* Transição suave do background */
  transition: background-image 0.8s ease-in-out;

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
    transition: opacity 0.3s ease;
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

  /* Pausar animações durante transição */
  ${props => props.$isTransitioning && css`
    &::after {
      animation-play-state: paused;
    }
  `}
`;

export const InfoFilmes = styled.div`
  z-index: 2;
  padding: 20px;
  width: 50%;
  
  /* Animação de transição entre filmes */
  ${props => props.$isTransitioning && css`
    animation: ${slideInLeft} 0.5s ease-out;
  `}

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
    font-size: clamp(16px, 2vw, 18px);
    font-weight: 400;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.6;
    margin-bottom: 32px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 1024px) {
    text-align: center;
    max-width: 100%;
    width: 100%;
  }
`;

export const PosterFilmes = styled.div`
  position: relative;
  
  /* Animação de transição entre filmes */
  ${props => props.$isTransitioning && css`
    animation: ${slideInRight} 0.5s ease-out;
  `}

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
    width: clamp(280px, 25vw, 360px);
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
`;

export const ContainerButtonsFilmes = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 12px;
  }
`;

export const MovieMetadata = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  margin-bottom: 20px;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
`;

export const MetaBadge = styled.span`
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &.year {
    background: rgba(59, 130, 246, 0.2);
    border: 1px solid rgba(59, 130, 246, 0.4);
    color: #60a5fa;
  }
  
  &.rating {
    background: rgba(251, 191, 36, 0.2);
    border: 1px solid rgba(251, 191, 36, 0.4);
    color: #fbbf24;
  }
  
  &.genre {
    background: rgba(16, 185, 129, 0.2);
    border: 1px solid rgba(16, 185, 129, 0.4);
    color: #10b981;
  }
`;

export const CarouselIndicators = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 3;
  
  @media (max-width: 768px) {
    bottom: 20px;
    gap: 8px;
  }
`;

export const IndicatorDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background: ${props => props.$active ? '#fff' : 'transparent'};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.8);
    transform: scale(1.2);
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  ${props => props.$active && css`
    animation: ${pulse} 2s ease-in-out infinite;
  `}
`;

export const CarouselProgress = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: rgba(0, 0, 0, 0.3);
  z-index: 3;
`;

export const ProgressBar = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #ff0555, #ff0000);
  animation: ${progressAnimation} ${props => props.$duration}ms linear;
  border-radius: 0 2px 2px 0;
`;

export const CarouselControls = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  z-index: 3;
  pointer-events: none;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const ControlButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  pointer-events: all;
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.6);
    background: rgba(0, 0, 0, 0.7);
    transform: scale(1.1);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &.prev {
    transform: rotate(0deg);
  }
  
  &.next {
    transform: rotate(0deg);
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
`;