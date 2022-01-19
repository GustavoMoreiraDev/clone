import { Container } from './style';

const Main = () => {
    return (
        <>
            <Container>
                <div className='Main-wrapper'>
                    <div className='wrapper'>
                        <h1>Alfaclin</h1>
                        <p>Atua de Maneira Multidisciplinar e Interdisciplinar englobando as seguites especialidades</p>
                        <div className='btn'>
                            <a href='#fisioterapia'>Saiba mais</a>
                        </div>
                    </div>
                </div>
                <div className='img-wrapper'>
                    <img src={require('../../../Imagens/background.png')}alt="Alfaclin"/>
                </div>          
            </Container>
        </>
    )
}

export default Main;