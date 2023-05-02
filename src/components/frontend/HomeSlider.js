import { Carousel } from 'react-bootstrap';
import slideOne from '../../assets/imgs/slide-1.jpg'
import slideTwo from '../../assets/imgs/slide-2.jpg'

const HomeSlider = ()=>{
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slideOne}
                alt="First slide"
                />
                <Carousel.Caption>
                    <p className="m-0">Don't Miss</p>
                    <h3>Mystery Deals</h3>
                    <p className="m-0">Online Only</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slideTwo}
                alt="Second slide"
                />
                <Carousel.Caption>
                    <p className="m-0">Limited time only</p>
                    <h3>Treat your self</h3>
                    <p className="m-0">Up to 50% off</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default HomeSlider;