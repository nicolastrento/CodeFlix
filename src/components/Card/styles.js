import styled, { keyframes } from "styled-components";

// Animações para os cards
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
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

const glow = keyframes`
  0%, 100% {
    box-shadow: 
      0 10px 30px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.1);
  }
  50% {
    box-shadow: 
      0 15px 40px rgba(0, 0, 0, 0.4),
      0 0 20px rgba(139, 92, 246, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.15);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 12px; /* Reduzido de 16px */
  border-radius: 16px; /* Reduzido de 24px */
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  overflow: hidden;
  animation: ${fadeInUp} 0.6s ease-out;
  width: 220px; /* LARGURA FIXA DO CARD */
  
  /* Efeito de brilho sutil no fundo */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.05),
      transparent
    );
    transition: left 0.8s ease;
  }
  
  /* Overlay gradiente no hover */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(139, 92, 246, 0.05) 0%,
      rgba(6, 182, 212, 0.05) 50%,
      rgba(16, 185, 129, 0.05) 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    border-radius: 24px;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.15);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.4), /* Sombra reduzida */
      0 0 20px rgba(139, 92, 246, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    
    &::before {
      left: 100%;
    }
    
    &::after {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-4px) scale(1.01); /* Efeito ativo reduzido */
  }

  /* Efeito de loading state */
  &.loading {
    animation: ${shimmer} 2s infinite;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.03) 25%,
      rgba(255, 255, 255, 0.08) 50%,
      rgba(255, 255, 255, 0.03) 75%
    );
    background-size: 200% 100%;
  }

  img {
    border-radius: 12px; /* Reduzido de 20px */
    width: 100%; /* 100% do container (220px) */
    height: 280px; /* ALTURA REDUZIDA (era 360px) */
    object-fit: cover;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 
      0 8px 25px rgba(0, 0, 0, 0.3), /* Sombra reduzida */
      0 0 0 1px rgba(255, 255, 255, 0.1);
    position: relative;
    z-index: 1;
    
    /* Efeito de brilho na imagem */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 40%;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.1) 0%,
        transparent 100%
      );
      border-radius: 20px 20px 0 0;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  }

  &:hover img {
    transform: scale(1.03) rotateY(1deg);
    box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.5), /* Sombra reduzida */
      0 0 20px rgba(139, 92, 246, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.15);
    
    &::before {
      opacity: 1;
    }
  }

  h3 {
    color: #ffffff;
    margin-top: 12px; /* Reduzido de 20px */
    font-size: 15px; /* Reduzido de 18px */
    font-weight: 600;
    text-align: center;
    line-height: 1.4;
    letter-spacing: -0.01em;
    transition: all 0.3s ease;
    position: relative;
    z-index: 2;
    background: linear-gradient(
      135deg,
      #ffffff 0%,
      #e2e8f0 50%,
      #cbd5e1 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    min-height: 40px; /* Altura mínima para uniformizar */
  }

  &:hover h3 {
    background: linear-gradient(
      135deg,
      #fff 0%,
      #fff5 50%,
      #fff 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    width: 180px; /* Largura mobile reduzida */
    padding: 10px;
    
    img {
      height: 240px;
    }
    
    h3 {
      font-size: 16px;
      margin-top: 16px;
    }
    
    &:hover {
      transform: translateY(-8px) scale(1.02);
    }
  }

  @media (max-width: 480px) {
    width: 160px; /* Ainda menor em telas muito pequenas */
    
    img {
      height: 220px;
    }
    
    h3 {
      font-size: 13px;
      min-height: 32px;
    }
  }
`;