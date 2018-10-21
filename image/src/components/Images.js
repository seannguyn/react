import React from 'react'
import ImageInput from './ImageInput'
import uuid from 'uuid';

class Images extends React.Component {

  constructor() {
    super();
    this.state = {
      images: [],
      files: []
    }
  }

  uploadPic(file) {
    console.log("upload parent",file);
    this.setState({
      images: [...this.state.images,file],
      files: [...this.state.files, URL.createObjectURL(file)]
    })
  }

  submitPic() {
    console.log(this.state.images);
    // axios to backend
  }

  deletePic(fileURL, file) {
    console.log("here");
    const newImages = this.state.images.filter((img) => {
      return img!==file
    })

    const newURL = this.state.files.filter((url) => {
      return url!==fileURL
    })
    console.log(newImages,newURL);
    this.setState({images: newImages, files: newURL })
  }

  render () {

    var rendering = [];
    let i = 0;
    for (i = 0; i < this.state.images.length + 1; i++) {
      rendering.push(<ImageInput url={this.state.files[i]} file={this.state.images[i]} key={uuid.v4()} onChange={this.uploadPic.bind(this)} onClick={this.deletePic.bind(this)}/>)
    }

    return (
      <div>
        <h1>Images</h1>
        {rendering}

        <button onClick={this.submitPic.bind(this)}>Submit pic</button>

      </div>
    );

  }
}

export default Images;
