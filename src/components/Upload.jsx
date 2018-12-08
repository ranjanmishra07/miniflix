import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedVideos: [{
        public_id: '',
        version: '',
        format: '',
        width: '',
        height: '',        
        type: '',
        created_at: '',
      }],
    }
  }
  uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: 'dgxpjwy2f',
        upload_preset: 'zsmfehg7',
        tags: ['miniflix'],
        sources: ['local', 'url', 'google_photos', 'facebook', 'image_search']
      },
      // function(error, result) {
      //     console.log("This is the result of the last upload", result);
      //     this.setState({uploadedVideos:result});
      // }
      (error, result) => {
        console.log('result is ', result);
        this.setState({ uploadedVideos: [{
          public_id: result[0].public_id,
          version: result[0].version,
          format: result[0].version,
          type: result[0].type,
          width:1536,
          height:864,
          created_at: result[0].created_at
        }] });
        // this.props.onChange(result);
      }
    );
  }

  render() {
    console.log(this.state.uploadedVideos);
    return (
      <div>
        <Nav />
        <h3 className="text-center">Upload Your video</h3>
        <hr />

        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <button onClick={this.uploadWidget} className="btn btn-lg btn-info"> Upload Video</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;