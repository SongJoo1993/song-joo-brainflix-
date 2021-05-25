import {Link} from 'react-router-dom';
import videoThumbnail from "../../assets/Images/Upload-video-preview.jpg";
import "./VideoUpload.scss";

function VideoUpload() {

    const alertMessage = () =>  {
        alert("Uploaded!");
    }

    return (
        <section className="upload-page">
            <h1 className="upload-page__title">Upload Video</h1>
            <div className="upload-page__main-box">    
                <section className="upload-page__thumbnail">
                    <h2 className="upload-page__thumbnail-title">VIDEO THUMBNAIL</h2>
                    <img src={videoThumbnail} alt="Video Thumbnail" className="upload-page__thumbnail-image"/>
                </section>
                <form action="" className="upload-page__upload-form">
                    <fieldset className="upload-page__upload-box">
                        <label htmlFor="title" className="upload-page__upload-title">TITLE YOUR VIDEO</label>
                        <input type="text" id="title" name="title"className="upload-page__upload-title-box" placeholder="Add a title to your video"/>
                        <label htmlFor="description" className="upload-page__upload-description">ADD A VIDEO DESCRIPTION</label>
                        <textarea type="text" id="description" name="description" className="upload-page__upload-description-box" placeholder="Add a description of your video"></textarea>
                    </fieldset>
                </form>
            </div>    
            <div className="upload-page__button-box">
                <Link to ="/" className="upload-page__publish-button-link">
                    <button type="submit" name="submit" className="upload-page__publish-button" onClick={() => {alertMessage()}}>PUBLISH</button>
                </Link>
                <button type="button" name="cancel" className="upload-page__cancel-button">CANCEL</button>
            </div>
        </section>             
    )
    }

export default VideoUpload;