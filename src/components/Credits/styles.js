import styled from "styled-components";

export const Title = styled.h4`
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
`

export const Container = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 0 0 20px 0;
  
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
  }

  p {
    width: 100px;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    margin-top: 12px;
    transition: color 0.3s ease;
  }

  img {
    height: 160px;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    border: 2px solid transparent;
    cursor: pointer;
    
    &:hover {
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
      border: 2px solid rgba(255, 255, 255, 0.6);
    }
  }
`