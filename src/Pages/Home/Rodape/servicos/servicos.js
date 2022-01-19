import Footer from '../footer/Footer';
import CardService from './CardService1';
import TwoCardService from './CardService2';
import { Container } from './style';

const Service = () => {
    return (
        <>
            <Container>
                 <div className="container px-4 py-5" id="custom-cards">
                    <h2 className="pb-2 border-bottom">Nossos Serviços</h2>
                    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                        <div className="col">
                            <div className="card card-cover h-100 overflow-hidden text-white bg-wrapper rounded-5 shadow-lg">
                                <img src={require('../../../../Imagens/acuputura.jpg')}alt="Servicos"/>
                                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <a className="btn-service"href="/" target="_blank" rel="noreferrer">Ver mais</a>
                                        </li>
                                        <li className="d-flex align-items-center me-3">
                                            <p>Acuputura</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                        <div className="card card-cover h-100 overflow-hidden text-white bg-wrapper rounded-5 shadow-lg">
                            <img src={require('../../../../Imagens/Bariatrica.jpg')}alt="Servicos"/>
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <a className="btn-service"href="/" target="_blank" rel="noreferrer">Ver mais</a>
                                    </li>
                                    <li className="d-flex align-items-center me-2">
                                        <p>Avaliação Bariatrica</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </div>

                        <div class="col">
                            <div className="card card-cover h-100 overflow-hidden text-white bg-wrapper rounded-5 shadow-lg">
                                <img src={require('../../../../Imagens/neuro.jpg')}alt="Servicos"/>
                                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <a className="btn-service"href="/" target="_blank" rel="noreferrer">Ver mais</a>
                                        </li>
                                        <li className="d-flex align-items-center me-2">
                                            <p>Neuro Psicologica</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                <CardService/>
            <TwoCardService/>
        </div>
            </Container>
            <Footer/>
        </>
    )
}

export default Service;