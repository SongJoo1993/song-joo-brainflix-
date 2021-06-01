import {Redirect} from 'react-router-dom';
import { Component } from "react";
import axios from 'axios';
import videoThumbnail from "../../assets/Images/Upload-video-preview.jpg";
import "./VideoUpload.scss";

class VideoUpload extends Component {

    state = {
        toMainPage: false
    }

    alertMessage = () =>  {
        alert("Successfully Uploaded!");
    }

    uploadingVideo = (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const description = event.target.description.value;

        if(!title || !description) {
            return alert("Please fill out both Title and Description of your video.")
        }

        axios
            .post(`http://localhost:9001/api/v1/videoList`, {
                title: title,
                description: description
            })
            .then(() => {
                this.setState({
                    toMainPage: true
                })
            })
            .catch((error) => {
                console.log(`error is : ${error}`);
            })
        this.alertMessage();
    }

    render() {
        if(this.state.toMainPage === true) {
            console.log("state change")
            return <Redirect to="/" />
        }

        return (
            <section className="upload-page">
                <h1 className="upload-page__title">Upload Video</h1>
                <div className="upload-page__main-box">    
                    <section className="upload-page__thumbnail">
                        <h2 className="upload-page__thumbnail-title">VIDEO THUMBNAIL</h2>
                        <img src={videoThumbnail} alt="Video Thumbnail" className="upload-page__thumbnail-image"/>
                    </section>
                    <form className="upload-page__upload-form" onSubmit={this.uploadingVideo} >
                        <fieldset className="upload-page__upload-box">
                            <label htmlFor="title" className="upload-page__upload-title">TITLE YOUR VIDEO</label>
                            <input type="text" id="title" name="title"className="upload-page__upload-title-box" placeholder="Add a title to your video"/>
                            <label htmlFor="description" className="upload-page__upload-description">ADD A VIDEO DESCRIPTION</label>
                            <textarea type="text" id="description" name="description" className="upload-page__upload-description-box" placeholder="Add a description of your video"></textarea>
                            <div className="upload-page__button-box">
                                <button type="submit" name="submit" className="upload-page__publish-button" value="Upload">PUBLISH</button>
                                <button type="button" name="cancel" className="upload-page__cancel-button">CANCEL</button>
                            </div>
                        </fieldset>
                    </form>
                </div>    
                <div className="upload-page__divider"></div>
            </section>             
        )
        }
}

export default VideoUpload;