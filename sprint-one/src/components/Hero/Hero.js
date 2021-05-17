import HeroDescription from "./HeroDescription";
import HeroComment from "./HeroComment";
import "./Hero.scss";


function Hero(props) {

    return(
        <section className="hero" >

            <HeroDescription heroDescription={props.mainVideo}/>
            <HeroComment heroComment={props.mainVideo.comments}/>

        </section>

    );
}

export default Hero;