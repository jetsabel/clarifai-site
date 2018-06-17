import React from 'react'
import Dropzone from 'react-dropzone'

class Basic extends React.Component {
  constructor() {
    super();
    this.state = { files: [] };
  }

  onDrop(files) {
    this.setState({
      files
    });
    app.models.predict(Clarifai.GENERAL_MODEL, { base64: files[0] }).then(
      function (response) {
        console.log('responsse',response)
        // do something with response
      },
      function (err) {
        alert('error',response,files[0])
        // there was an error
      }
    );
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop.bind(this)}>
            <p>
              Try dropping some files here, or click to select files to upload.
            </p>
          </Dropzone>
        </div>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {this.state.files.map(f => (
              <li key={f.name}>
                {f.name} - {f.size} bytes
              </li>
            ))}
          </ul>
        </aside>
      </section>
    );
  }
}

<Basic />;
export default Basic