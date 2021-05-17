import "./HeroDescription.scss" 
import viewIcon from "../../../assets/Icons/Icon-views.svg";
import likeIcon from "../../../assets/Icons/Icon-likes.svg";



function HeroDescription(props) {

    const commentTimeCalculator = (timestamp) => {
        let date = new Date(timestamp);
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let day = date.getDate();
        let finalTimeStamp = "";

        if(month < 10 && day < 10) {
            month = '0' + month;
            day = '0' + day;
        }
        
        finalTimeStamp = `${month}/${day}/${year}`;
        return finalTimeStamp;
    }

    return (
        <section className="hero__description">
            <h2 className="hero__description-title">{props.heroDescription.title}</h2>
            <section className="hero__description-box">
                <div className="hero__description-primary-box">
                    <h3 className="hero__description-publisher">By {props.heroDescription.channel}</h3>
                    <span className="hero__description-date">{commentTimeCalculator(props.heroDescription.timestamp)}</span>
                </div>
                <div className="hero__description-secondary-box">
                    <div className="hero__description-views">
                        <img src={viewIcon} alt="Views Icon" className="hero__description-views-icon"/>
                        {props.heroDescription.views}
                        </div>
                    <div className="hero__description-likes">
                        <img src={likeIcon} alt="Likes Icon" className="hero__description-likes-icon"/>
                        {props.heroDescription.likes}
                        </div>
                </div>
            </section>
            <div className="hero__description-paragraph">
                {props.heroDescription.description}
            </div>
        </section>
    )
}

export default HeroDescription;