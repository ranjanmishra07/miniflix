import React, { Component } from 'react';
import { Link } from 'react-router';
import { CloudinaryContext, Transformation, Video } from 'cloudinary-react';
import axios from 'axios';
import Nav from './Nav';
import Upload from './Upload';

class Display extends Component {
  constructor(props){
    super(props);
    this.state={
      videos:[],
      // videos: [{
      //   public_id: '',
      //   version: '',
      //   format: '',
      //   width: '',
      //   height: '',        
      //   type: '',
      //   created_at: '',
      // }],
    }
  }

  getVideos() {
    axios.get('http://res.cloudinary.com/unicodeveloper/video/list/miniflix.json')
          .then(res => {
            console.log(res.data.resources);
            this.setState({ videos: res.data.resources});
    });
  }

  // getVideosOnUpload(result) {
  //   this.setState({ videos: [{
  //     public_id: result[0].public_id,
  //     version: result[0].version,
  //     format: result[0].version,
  //     type: result[0].type,
  //     width:1536,
  //     height:864,
  //     created_at: result[0].created_at
  //   }] });
  // }

  componentDidMount() {
    this.getVideos();
    // this.getVideosOnUpload();
  }

  render() {

    return (
      <div>
        {/* <Upload /> */} 
        <Nav />
        <h3 className="text-center"> Latest Videos on Miniflix </h3>
        <hr/>
        <div className="col-sm-12">
          <CloudinaryContext cloudName="unicodeveloper">
            { this.state.videos.map((data, index) => (
                <div className="col-sm-4" key={index}>
                  <div className="embed-responsive embed-responsive-4by3">
                    <Video publicId={data.public_id} width="300" height="300" controls></Video>
                  </div>
                  <div> Created at {data.created_at} </div>
                </div>
              ))
            }
          </CloudinaryContext>
        </div>
      </div>
    );
  }
}

export default Display;