import React from "react";
import ReactImageAnnotate from "react-image-annotate";

const AnnotatorWin = (props) => {
  if(props.imgSrc){
    return (
    <ReactImageAnnotate
      labelImages
      regionClsList={["Alpha", "Beta", "Charlie", "Delta"]}
      regionTagList={["tag1", "tag2", "tag3"]}
      imageClsList={["Thing1", "Thing2", "Thing3"]}
      images={[
        {
          src: props.imgSrc,
          name: props.imgName,
          regions: []
        }
      ]}
      enabledTools={["create-point", "select"]}
    />
    );
  }
  else {
    return (
    <ReactImageAnnotate
      labelImages
      regionClsList={["Alpha", "Beta", "Charlie", "Delta"]}
      regionTagList={["tag1", "tag2", "tag3"]}
      imageClsList={["Thing1", "Thing2", "Thing3"]}
      images={[
        {
          src: "./public/tempimg1.png",
          name: "Image 1",
          regions: []
        }
      ]}
    />
    );
  }
}

export default AnnotatorWin