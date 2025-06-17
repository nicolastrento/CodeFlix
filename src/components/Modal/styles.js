import styled, {keyframes} from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 995;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const Container = styled.div`
  position: relative;
  width: 50%;
  height: 50%;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 12px;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 12px;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    padding: 1px;
    background: linear-gradient(45deg, rgba(229, 9, 20, 0.3), transparent, rgba(229, 9, 20, 0.3));
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: white;
  cursor: pointer;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  svg {
    width: 18px;
    height: 18px;
    transition: transform 0.2s ease;
  }

  &:hover {
    background: rgba(229, 9, 20, 0.9);
    border-color: rgba(229, 9, 20, 0.8);
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(229, 9, 20, 0.3);
    
    svg {
      transform: rotate(90deg);
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const LoadingSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border: 3px solid rgba(229, 9, 20, 0.3);
  border-top: 3px solid #e50914;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  z-index: 1000;
`;