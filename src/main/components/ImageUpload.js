import React from 'react'
import Dropzone from 'react-dropzone'
import request from 'superagent'
import DefaultImage from '../../media/logo.png'

const CLOUDINARY_UPLOAD_PRESET = 'uyywblkk'
const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/image-api-game/image/upload"

class ImageUploader extends React.Component {
  constructor() {
    super()
    this.state = {
      uploadedFileCloudinaryUrl: '',
      dropzoneActive: false
    }
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('name','namehere')
                        .field('file',file);
    upload.end((err,response) => {
      if(err) {
        alert("Oh snap! An error occured with the upload ", err)
        console.log(err);
      }
      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        })
        this.props.reportImage(this.state.uploadedFileCloudinaryUrl)
      }
    })
  }


  onDragEnter() {
    this.setState({
      dropzoneActive: true
    });
  }

  onDragLeave() {
    this.setState({
      dropzoneActive: false
    });
  }


  onDrop(files) {
    console.log('onDrop()',files[0])
    this.setState({
      uploadedFile: files[0],
      dropzoneActive: false
    });
    if(files[0]){
      this.handleImageUpload(files[0])
    }
    if(files[0]===undefined) {
      // alert('Something went wrong, did you drop an image file?')
    // evt.stopPropagation();
    // evt.preventDefault();
    // this.props.reportImage(evt.dataTransfer.getData('URL'))
    }
  }

  render() {
    const overlayStyle = {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      padding: '2.5em 0',
      background: 'rgba(0,0,0,0.5)',
      textAlign: 'center',
      color: '#fff'
    };
    return(
      <React.Fragment >
        <Dropzone
          disableClick
          style={{ position: "relative" }}
          onDrop={this.onDrop.bind(this)}
          onDragEnter={this.onDragEnter.bind(this)}
          onDragLeave={this.onDragLeave.bind(this)}
        >
          {this.state.dropzoneActive && <div style={overlayStyle} />}
          <div className='tc' >


            <ul>
              {
                // files.map(f => <li>{f.name} - {f.size} bytes</li>)
          <img alt='displayed pic' src={this.state.uploadedFileCloudinaryUrl || DefaultImage} />
              }
            </ul>

          </div>
        </Dropzone>
      </React.Fragment>
    );
  }
}


export default ImageUploader





        // <div>
        // <Dropzone
        //   multiple={false}
        //   accept="image/*"
        //   onDrop={this.onDrop.bind(this)}
        // >
        // <p>Drop image here</p>
        // </Dropzone>
        //   {/* <img src={this.state.uploadedFileCloudinaryUrl} /> */}
        //   <img src={DefaultImage} />
        // </div>







