const CardService = () => {
    return (
        <>
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-white bg-wrapper rounded-5 shadow-lg">
                        <img src={require('../../../../Imagens/fisioterapia.jpg')}alt="Servicos"/>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <ul className="d-flex list-unstyled mt-auto">
                                <li className="me-auto">
                                    <a className="btn-service"href="/" target="_blank" rel="noreferrer">Ver mais</a>
                                </li>
                                <li className="d-flex align-items-center me-3">
                                    <p>Fisioterapia</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col">
                <div className="card card-cover h-100 overflow-hidden text-white bg-wrapper rounded-5 shadow-lg">
                    <img src={require('../../../../Imagens/fonoaudiologia.jpg')}alt="Servicos"/>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <ul className="d-flex list-unstyled mt-auto">
                            <li className="me-auto">
                                <a className="btn-service"href="/" target="_blank" rel="noreferrer">Ver mais</a>
                            </li>
                            <li className="d-flex align-items-center me-3">
                                <p>Fonoaudiologia</p>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>

                <div class="col">
                    <div className="card card-cover h-100 overflow-hidden text-white bg-wrapper rounded-5 shadow-lg">
                        <img src={require('../../../../Imagens/psicologia.jpg')}alt="Servicos"/>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <ul className="d-flex list-unstyled mt-auto">
                                <li className="me-auto">
                                    <a className="btn-service"href="/" target="_blank" rel="noreferrer">Ver mais</a>
                                </li>
                                <li className="d-flex align-items-center me-3">
                                    <p>Psicologia</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardService;