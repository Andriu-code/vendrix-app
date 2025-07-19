
import bodega from "../../assets/img/banner.jpg";
import "./banner.sass"

const Banner = () => {
    return (
        <div className="container-banner">
            <img src={bodega} alt="bodega" />
            <div className="banner-text">
                <h5>Ejemplo</h5>
                <h1></h1>
                <p></p>

            </div>
        </div>
    )
}

export default Banner;