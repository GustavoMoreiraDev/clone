import { Container } from './styles';

const Carousel = () => {
    return (
        <>
            <Container>
                <main>
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">     
                        <div className="carousel-indicators">
                            <button className="bg-carousel" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button className="bg-carousel" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button className="bg-carousel" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>      
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">                   
                                <img src={require('../../../../Imagens/Psicopedagogia.jpg')} loading="lazy" className="d-block w-100 img-carousel carousel-img" width="500" height="500" alt="Img-Carousel"/>                   
                            </div>
                            <div className="carousel-item">                  
                                <img src="https://images.pexels.com/photos/1231365/pexels-photo-1231365.jpeg" loading="lazy" className="d-block w-100 img-carousel carousel-img" width="500" height="500" alt="Img-Carousel"/>
                                <div className="carousel-caption d-none d-md-block"></div>
                            </div>
                            <div className="carousel-item">
                                <img src={require('../../../../Imagens/fisioterapia.jpg')} loading="lazy" className="d-block w-100 img-carousel carousel-img" width="500" height="500" alt="Img-Carousel"/>
                                <div className="carousel-caption d-none d-md-block"></div>
                            </div>
                        </div>  
                        <button className="carousel-control-prev bg-carousel" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next bg-carousel" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </main>
            </Container>
        </>
    )
}

export default Carousel;