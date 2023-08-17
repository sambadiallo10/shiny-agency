import colors from "../../utils/style/color";
import styled from "styled-components";
import HomeIllustration from "../../assets/home-illustration.svg"
import { Link } from "react-router-dom";
import { StyledLink } from "../../utils/style/atoms"

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  
`
const HomeContainer = styled.div`
  display: flex;
  background: ${colors.backgroundLight};
  margin 30px;
  padding: 60px 90px;
  flex-direction: row;
  max-width: 1800px;

`

const HomeImg = styled.img`
  flex: 1;

`

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`

const StyledTittle = styled.h2`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
`




function Home() {
  return (
    <HomeWrapper>
        <HomeContainer>
          <LeftCol>
            <StyledTittle>
              Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents
            </StyledTittle>
            <StyledLink to="/survey/1" $isFullLink >Faire le test</StyledLink>

          </LeftCol>
          
          
          <HomeImg src={HomeIllustration} alt="Home illustration" ></HomeImg>

        </HomeContainer>
      
        
    </HomeWrapper>
  );
}

export default Home;
