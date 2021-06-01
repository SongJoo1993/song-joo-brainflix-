import "./HeroCommentList.scss";

function HeroCommentList (props) {
    
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

    if(!props.heroComment.id) {
        return <div>'Loading Comments...'</div>;
    }

    return(
        <ul className="hero__comment-list">
            {props.heroComment.comments.map((singleCommentObject) => {
                return(
                <li className="hero__comment-item" key={singleCommentObject.id}>
                    <div className="hero__comment-item-image"></div>
                    <article className="hero__comment-box">
                        <h4 className="hero__comment-name">{singleCommentObject.name}</h4>
                        <span className="hero__comment-date">{commentTimeCalculator(singleCommentObject.timestamp)}</span>
                        <p className="hero__comment-message">{singleCommentObject.comment}</p>
                    </article>
                </li>
                )})}
        </ul>
    )
}

export default HeroCommentList;