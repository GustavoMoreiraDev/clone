import { Env } from "./styles";
const Header = () => {
    return (
        <>   
            <Env className="navbar navbar-expand-md navbar-dark fixed-top"> 
                <div className="container-fluid">          
                    <a href="/" className="navbar-brand d-flex align-items-center logo">
                        <img src={require('../../Imagens/logo.png')} alt="Logo" />  
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">                
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">                 
                        <li className="nav-item">
                            <a className="nav-link active" href="/" aria-current="page" >Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/sobre" aria-current="page">Sobre</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle active" href="/especialidades" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Especialidades
                            </a>
                                <ul className="dropdown-menu bg-wrapper" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item text-wrapper" href="/especialidades">Acumputura</a></li>
                                    <li><a className="dropdown-item text-wrapper" href="/bariatrica">Avaliação Bariatrica</a></li>
                                    <li><a className="dropdown-item text-wrapper" href="/neuro">Avaliação Neuro-psicologica</a></li>
                                    <li><a className="dropdown-item text-wrapper" href="/bandagem">Bandagem Funcional</a></li>
                                    <li><a className="dropdown-item text-wrapper" href="/fisioterapia">Fisioterapia</a></li>
                                    <li><a className="dropdown-item text-wrapper" href="/fonoaudiologia">Fonoaudiologia</a></li>
                                    <li><a className="dropdown-item text-wrapper" href="/vocacional">Orientação Vocacional</a></li>
                                    <li><a className="dropdown-item text-wrapper" href="/psicologia">Psicologia</a></li>
                                    <li><a className="dropdown-item text-wrapper" href="/psicopedagogia">Psicopedagogia</a></li>
                                    <li><a className="dropdown-item text-wrapper" href="/rpg">RPG</a></li>
                                    <li><a className="dropdown-item text-wrapper" href="/studio">Studio Pilates</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </Env>
        </>
    )
}

export default Header;