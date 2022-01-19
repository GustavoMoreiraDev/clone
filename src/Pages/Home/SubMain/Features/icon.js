import { FaPeopleCarry } from 'react-icons/fa';
import { GiLifeBar } from 'react-icons/gi';
import Service from '../../Rodape/servicos/servicos';
import { Container } from './styles';
const Features = () => {
    return(
        <>
            <Container> 
                <div className="container px-4 py-5" id="featured-3">
                    <h2 className="pb-2 border-bottom">Principios da Alfaclin</h2>
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        
                        <div className="feature col">
                            <div className="feature-icon bg-wrapper bg-gradient">
                                <div className='icones'>
                                    <GiLifeBar/> 
                                </div>
                            </div>
                            <h2 className='text-wrapper'>Missão</h2>
                            <p className='text-wraper'>
                                Prestar atendimento personalizado, com qualidade, 
                                visando a reintegração do cliente no âmbito educacional, 
                                social e laboral.
                            </p>
                        </div>

                        <div className="feature col">
                            <div className="feature-icon bg-wrapper bg-gradient">
                                <div className='icones'>
                                    <FaPeopleCarry/> 
                                </div>
                            </div>
                            <h2 className='text-wraper'>Visão</h2>
                            <p className='text-wraper'>
                                Ser reconhecida pela qualidade na prestação de 
                                serviços nos diversos segmentos em que atende.
                            </p>
                        </div>

                        <div className="feature col">
                            <div className="feature-icon bg-wrapper bg-gradient">
                                <div className='icones'>
                                    <FaPeopleCarry/> 
                                </div>
                            </div>
                            <h2 className='text-wraper'>Em Construção.</h2>
                            <p className='text-wraper'>Ser reconhecida pela qualidade na prestação de 
                                serviços nos diversos segmentos em que atende.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
            <Service/>
        </>
    )
}

export default Features;