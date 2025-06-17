import styled, {keyframes} from "styled-components";

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

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 12px;
  animation: ${slideInUp} 0.7s ease;
  
  span {
    padding: 10px 20px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 25px;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
      transition: left 0.5s ease;
    }
    
    &:hover {
      transform: translateY(-2px);
      border-color: rgba(255, 255, 255, 0.4);
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08));
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
      
      &::before {
        left: 100%;
      }
    }
    
    &:active {
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 15px;
    
    span {
      font-size: 12px;
      padding: 8px 16px;
    }
  }
`