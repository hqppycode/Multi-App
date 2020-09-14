import { useState, useEffect } from "react";
// import styled from "styled-components";

const Pictures = () => {
  const [image, setImage] = useState("");
  useEffect(() => {
    const num = Math.floor(Math.random() * (19 - 1) + 1);
    const url = `/images/family/fam${num}.jpg`;
    setImage(url);
  }, []);

  return (
    <div className="container">
      <img className="image" src={image} />
      <style jsx>{`
        .image {
          border-radius: 5px;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
        }
        .container {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default Pictures;

// const HeaderImg = styled.img.attrs({
//   src: url,
// })`
//   width: 100%;
//   height: 100%;
//   border-radius: 5px;
// `;

// const otherImage = styled.div`
//   background-image: url("https://pixy.org/src/53/thumbs350/531258.jpg");
//   height: 100px;
//   width: 100px;
//   border: 1px solid red;

// `
