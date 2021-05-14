import { Component } from "react";
// import HeroItems from "../data/videos.json";

class Hero extends Component {
    state = {
        heroItems: [
            {
                "id": "1af0jruup5gu",
                "title": "BMX Rampage: 2018 Highlights",
                "channel": "Red Cow",
                "image": "https://i.imgur.com/l2Xfgpl.jpg"
            },
            {
                "id": "1ainjruutd1j",
                "title": "Become A Travel Pro In One Easy Lesson",
                "channel": "Todd Welch",
                "image": "https://i.imgur.com/5qyCZrD.jpg"
            }
        ]
    };

    heroImage = () => {
        console.log()
    }

    render() {
        return(
            <section className="hero" >
                {/* <img className="hero__image" alt="Video" src={this.state.heroItems[0].image}></img>
                <div className="hero__video-box">
                    <h1 className="hero__video-title">{this.state.heroItems[0].title}</h1>
                    <section className="hero__video-secondary-box">
                        <h2 className="hero__video-publisher"></h2>
                        <span className="hero__video-date"></span>
                        <div className="hero__video-views"></div>
                        <div className="hero__video-likes"></div>
                    </section>
                </div> */}
            </section>

        )
    }
}

export default Hero;