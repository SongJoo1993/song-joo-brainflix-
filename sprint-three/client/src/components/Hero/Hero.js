import HeroDescription from "./HeroDescription";
import HeroComment from "./HeroComment";
import "./Hero.scss";

function Hero (props) {
    return(
        <section className="hero" >
            <HeroDescription heroDescription={props.singleVideo}/>
            <HeroComment heroComment={props.singleVideo} /> 
        </section>

    );
}

export default Hero;