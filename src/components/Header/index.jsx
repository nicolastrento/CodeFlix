import logoCodeFlix from '../../assets/logo-codeFlix.png'
import { Container, Li, Menu } from './styles'
import  { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Header() {
  const [changeBackground, setChangeBackground] = useState(false)
  const { pathname } = useLocation()

  window.onscroll = () => {
    if( !changeBackground && window.scrollY > 60){
      setChangeBackground(true)
    }
    if(changeBackground && window.scrollY <= 60){
      setChangeBackground(false)
    }
  }

  return (
    <Container $changeBackground={changeBackground}>
      <img src={logoCodeFlix} alt='logo-codeFlix' />
      <Menu>
        <Li $isActive={pathname === '/'}>
          <Link to={'/'}>Home</Link>
        </Li>

        <Li $isActive={pathname.includes('/filmes')}>
          <Link to={'/filmes'}>Filmes</Link>
        </Li>

        <Li $isActive={pathname.includes('/series')}>
          <Link to={'/series'}>Séries</Link>
        </Li>
      </Menu>
    </Container>
  );
}

export default Header;