import { Container } from "./style";
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'

const Footer = () => {
    return (
        <>
            <Container>              
                <div className="wrapper">                    
                    <span className="dados">
                        <p>Rua Francisco Derosso nº 2571 - Curitiba</p>
                        <p>&copy; 2022 Alfaclin - Todos os Direitos Reservados</p>
                    </span>
                    
                    <span className="midias">
                        <a href="https://www.facebook.com/alfaclinclinica" target="_blank"  rel="noreferrer"><FaFacebook/></a>
                        <a href="https://www.instagram.com/alfaclin_/" target="_blank" rel="noreferrer"><FaInstagram/></a>
                        <a href="http://api.whatsapp.com/send?phone=5541997063200" target="_blank" rel="noreferrer"><FaWhatsapp/></a>
                        <a href="mailto:contato@alfaclin.com.br?subject=Hello%20again" target="_blank" rel="noreferrer"><HiOutlineMail/></a>
                    </span>
                </div>
            </Container>
        </>
    )
}

export default Footer;