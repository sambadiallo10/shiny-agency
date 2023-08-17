import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/color'
import logoShinyDark from '../../assets/dark-logo.png'

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

const NavLogo = styled.img`
        height: 70 px;

`

const Nav = styled.nav`
        padding: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;

`



function Header() {
    return(
        <Nav>
            <StyledLink to="/">
             <NavLogo src={logoShinyDark} alt="Logo Shiny"></NavLogo>
            </StyledLink>
            <div>
                <StyledLink to="/">Accueil </StyledLink>
                <StyledLink to="/survey/1" >Faire le test </StyledLink>
                <StyledLink to="/survey/1" $isFullLink>Questionnaire </StyledLink>
                <StyledLink to="/freelances">Freelances</StyledLink>

            </div>
            
        </Nav>
    )
}

export default Header