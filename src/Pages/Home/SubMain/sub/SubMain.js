import { Container } from './style';
import { HiLocationMarker} from 'react-icons/hi';
import Features from '../Features/icon';

const Sobre = () => {
    return (
        <>
            <Container>
                <div className='wrapper'>
                    <div className="container col-xxl-8 px-4 py-5">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div className="col-10 col-sm-8 col-lg-6">
                                <img src={require('../../../../Imagens/logo.png')} className="d-block mx-lg-auto img-fluid bg-wrapper" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                            </div>
                            <div className="col-lg-6">
                                <h1 className="display-5 fw-bold lh-1 mb-3"> Alfaclin Clínica de Saúde</h1>
                                <div className='alinhamento'>
                                    <p className="lead "> Atualmente a <strong>Alfaclin</strong> possui sede própria na <strong> Rua Francisco Derosso, 2571, Bairro Xaxim.</strong><HiLocationMarker/></p>
                                        <p>Atendimento <strong>Seg a Sexta</strong> das <strong>8:00 as 20:00</strong></p>
                                    <a className='btn-sub' href="http://api.whatsapp.com/send?phone=5541997063200" target="_blank" rel="noreferrer">Fale Conosco</a>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>                         
                <Features/>    
            </Container>
        </>
    )
}

export default Sobre;