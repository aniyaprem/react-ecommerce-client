import { Carousel } from 'react-bootstrap';
import slideOne from '../assets/imgs/slide-1.jpg'
import slideTwo from '../assets/imgs/slide-2.jpg'

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
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slideTwo}
                alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default HomeSlider;