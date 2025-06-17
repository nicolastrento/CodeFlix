import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px; // <- altura header
  min-height: 100px;
  z-index: 9999;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;
  background-color: ${ props =>
     props.$changeBackground ? 'rgb(14,14,14)' : 'transparent' };
  transition: background-color 0.6s ease-in-out;

  img {
    width: 7%;
  }
`

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
  margin-left: 50px;
`

export const Li = styled.li`
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  position: relative;

  a {
    text-decoration: none;
    color: #fff;
  }

  &:hover {
    opacity: 0.8;
  }

  &::after {
    content: "";
    position: absolute;
    width: ${ props => props.$isActive ? '100%' : '0' };
    height: 2px;
    background-color: rgba(220, 38, 38, 0.6);
    left: 50%;
    bottom: -5px;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
  }

`