import Styled, { styled } from "styled-components"
import ErrorImg from "../../assets/404.svg"
import colors from "../../utils/style/color"
import { Wrapper } from "../../utils/style/wrapper"

const ErrorTittle = styled.h2`
    font-weight: 300;

`

const Illustration = styled.img`
    max-width: 800px;

`

function  Error() {
    return(
        
            <Wrapper>  
                <ErrorTittle>oups ...</ErrorTittle>

                <Illustration src={ErrorImg}></Illustration>
                <ErrorTittle>Il semblerait qu'il y ait un problème</ErrorTittle>
            </Wrapper>
            
        
    )
}

export default Error