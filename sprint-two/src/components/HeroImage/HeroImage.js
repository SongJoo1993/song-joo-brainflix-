import './HeroImage.scss';

function HeroImage(props) {
    return(
        <div className="hero__image-box">
            <video className="hero__image-content" controls src={props.mainVideo.image} poster={props.mainVideo.image}></video>
        </div>
    )
}

export default HeroImage;