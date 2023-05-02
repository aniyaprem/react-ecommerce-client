import Slider from "react-slick";
import logoOne from '../../assets/imgs/1.png'
import logoTwo from '../../assets/imgs/2.png'
import logoThird from '../../assets/imgs/3.png'
import logoFour from '../../assets/imgs/4.png'
import logoFifth from '../../assets/imgs/5.png'
import logoSix from '../../assets/imgs/6.png'
import logoSeven from '../../assets/imgs/7.png'
import logoEight from '../../assets/imgs/8.png'
import logoNine from '../../assets/imgs/9.png'

const ClientSlider = ()=>{
    const imgs = [logoOne, logoTwo, logoThird, logoFour, logoFifth, logoSix, logoSeven, logoEight, logoNine];
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    return(
        <Slider {...settings} className="border border-top-0 border-left-0 border-right-0">
            {
                imgs && imgs.map((value, index)=>{
                    return(
                        <div key={index} className="text-center border border-top-0 border-bottom-0 border-end-0">
                            <img src={value} alt="img" className="m-auto my-4" height="20" width="100"/>
                        </div>
                    )
                })
            }
        </Slider>
    )
}

export default ClientSlider