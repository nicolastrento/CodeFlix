import styled, { css, keyframes } from "styled-components";

// Animações para os botões
const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.4);
  }
  50% {
    box-shadow: 0 0 0 20px rgba(255, 0, 0, 0);
  }
`;

const glow = keyframes`
  0%, 100% {
    filter: brightness(1) saturate(1);
  }
  50% {
    filter: brightness(1.2) saturate(1.3);
  }
`;

const buttonStyles = css`
  position: relative;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  backdrop-filter: blur(10px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  outline: none;
  
  ${props => props.primary ? `
    background: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%);
    color: white;
    box-shadow: 
      0 8px 32px rgba(139, 92, 246, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.1);
      
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
        rgba(255, 255, 255, 0.3),
        transparent
      );
      transition: left 0.6s ease;
    }
    
    &:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 
        0 15px 45px rgba(139, 92, 246, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3),
        0 0 0 1px rgba(255, 255, 255, 0.2);
      background: linear-gradient(135deg, #9333ea 0%, #0891b2 100%);
        
      &::before {
        left: 100%;
      }
    }
    
    &:active {
      transform: translateY(-1px) scale(0.98);
    }
  ` : `
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      padding: 1px;
      background: linear-gradient(135deg, 
        rgba(255, 255, 255, 0.2) 0%, 
        rgba(255, 255, 255, 0.05) 50%, 
        rgba(255, 255, 255, 0.1) 100%
      );
      border-radius: inherit;
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: xor;
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
    }
    
    &:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.25);
      transform: translateY(-2px) scale(1.02);
      box-shadow: 
        0 12px 40px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }
    
    &:active {
      transform: translateY(0) scale(0.98);
    }
  `}

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 14px;
  }
`;

export const ButtonWhite = styled.button`
  ${buttonStyles}
`;

export const ButtonRed = styled.button`
  ${buttonStyles}
  
  background: linear-gradient(135deg, #dc2626 0%, #ef4444 50%, #f87171 100%);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 8px 32px rgba(220, 38, 38, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 0 0 1px rgba(255, 0, 0, 0.2);
  position: relative;
  
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
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.6s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(45deg, #ff0000, #ff4444, #ff6666, #ff0000);
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
    animation: ${pulse} 2s infinite;
  }

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 
      0 15px 50px rgba(220, 38, 38, 0.6),
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      0 0 30px rgba(255, 0, 0, 0.3);
    background: linear-gradient(135deg, #b91c1c 0%, #dc2626 50%, #ef4440 100%);
    animation: ${glow} 1.5s ease-in-out infinite;
    
    &::before {
      left: 100%;
    }
    
    &::after {
      opacity: 0.3;
    }
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
    animation: none;
  }
`;
