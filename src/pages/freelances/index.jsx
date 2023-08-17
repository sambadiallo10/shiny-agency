import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/card'
import styled from 'styled-components'
import colors from '../../utils/style/color'

const CardsContainer = styled.div`
    display: grid;
    gap: 1px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
`

const PageTittle = styled.h1`
    font-size: 30px;
    color: black;
    text-align: center;
    padding-bottom: 30px;

`

const PageSubtittle = styled.h2`
    font-size: 20px;
    color: ${colors.secondary};
    font-weight: 300;
    text-align: center;
    padding-bottom: 30px;
`
 
const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
]

function Freelances(){

    return(
        <div>
            <PageTittle>Trouvez votre prestataire</PageTittle>
            <PageSubtittle>Chez Shiny nous réunissons les meilleurs profils pour vous</PageSubtittle>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        picture={profile.picture}
                        title={profile.name}
                    />
                ))}
            </CardsContainer>
        </div>
    )
}

export default Freelances