const express = require("express");
const router = express.Router();
const fs = require("fs");
const uuid = require("uuid");

const videoDataPath = "./data/videos.json";
const commentsArray = [
    {"name":"Micheal Lyons","comment":"They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.","id":"1ab6d9f6-da38-456e-9b09-ab0acd9ce818","likes":0,"timestamp":1545162149000},
    {"name":"Gary Wong","comment":"Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!","id":"cc6f173d-9e9d-4501-918d-bc11f15a8e14","likes":0,"timestamp":1544595784046},
    {"name":"Theodore Duncan","comment":"How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!","id":"993f950f-df99-48e7-bd1e-d95003cc98f1","likes":0,"timestamp":1542262984046}
];


// Function to read video data
function readVideoItems () {
    return JSON.parse(fs.readFileSync(videoDataPath));
}

// Function to add a new video data
function addVideoItem (data) {
    fs.writeFileSync("./data/videos.json", JSON.stringify(data));
}

// Router for GET and POST / videos
router
    .route("/")
    .get((_req,res) => {
        return res.json(readVideoItems());
    })
    .post((req,res) => {
        const {title, description} = req.body;
        console.log(req.body);
        
        if(!title) {
            return res.status(400).json({
                message: "Title is required!"
            })
        }

        if(!description) {
            return res.status(400).json({
                message: "Description is required!"
            })
        }

        const videoData = readVideoItems();
        const newVideoItem = {
            id: uuid.v4(),
            title: title,
            channel: "Random Video",
            image: "http://localhost:9001/images/Upload-video-preview.jpg",
            description: description,
            views: "1,001,023",
            likes: "110,985",
            duration: "4:01",
            video: "https://project-2-api.herokuapp.com/stream",
            timestamp: 1545162149000,
            comments: commentsArray
        }

        videoData.push(newVideoItem);
        addVideoItem(videoData);
        res.json(videoData);
    })


// Router for GET/video/:id 
router.get("/:id", (req,res) => {
    const { id } = req.params;
    const videoData = readVideoItems(); 
    
    const singleVideoData = videoData.find((singleVideo) => {
        if(singleVideo.id === id) {
            return singleVideo;
        } else {
            return false; 
        }        
    });

    if(!singleVideoData) {
        return res.status(404).json({message: `Can't find video file by Id: ${id}`})
    } else {
        return res.json(singleVideoData);
    }
})

module.exports = router;