import Carousel from 'react-bootstrap/Carousel';

function CarouselApp() {
  return (
    
      <div className='carouseldiv'>
      <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://tiendacampañafamiliar.com/wp-content/uploads/2020/11/interior-tienda-de-campana-octogonal-1.jpg"
          alt="Campings"
        />
        <Carousel.Caption>
          <h1>Campings</h1>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://www.alfonsofigares.com/wp-content/uploads/2019/01/rutas-en-moto-por-europa-800x400.jpg"
          alt="Rutas"
        />
        <Carousel.Caption>
          <h1>Rutas</h1>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://www.60dias.es/wp-content/uploads/Como-recuperar-el-IVA-de-los-restaurantes-800x400-1.jpg"
          alt="Restaurantes"
        />
        <Carousel.Caption>
          <h1>Restaurantes</h1>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://www.kosner.es/wp-content/uploads/2018/04/climatizacion-hoteles-800x400.jpg"
          alt="Hoteles"
        />
        <Carousel.Caption>
          <h1>Hoteles</h1>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      </div>

    
    
    
  );
}

export default CarouselApp;