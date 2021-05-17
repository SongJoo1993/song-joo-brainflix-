import HeroCommentList from "./HeroCommentList";
import "./HeroComment.scss" 
import userImage from "../../../assets/Images/Mohan-muruge.jpg";

function HeroComment(props) {
    return(
        <section className="hero__comment">
            <h3 className="hero__comment-numbers"> {props.heroComment.length} Comments</h3>
            <div className="hero__comment-input-box">
                <img src={userImage} alt="User Icon" className="hero__comment-input-image" />
                <form className="hero__form">
                    <div className="hero__form-upper-box">
                        <label htmlFor="comment" className="hero__form-title">JOIN THE CONVERSATION</label>
                        <textarea type="text" name="comment" className="hero__form-text-box" placeholder="Write comment here" rows="4"></textarea>
                    </div>
                    <button type="submit" className="hero__form-button">COMMENT</button>
                </form>
            </div>
            <HeroCommentList heroComment={props.heroComment}/>
        </section>
    )
}

export default HeroComment; 