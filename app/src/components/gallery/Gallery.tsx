import * as React from "react";
import { ImageList, ImageListItem } from "@mui/material";
import first1 from "../../assets/1/1.jpg";
import second1 from "../../assets/1/2.jpg";
import third1 from "../../assets/1/3.jpg";
import four1 from "../../assets/1/4.jpg";
import five1 from "../../assets/1/5.jpg";
import six1 from "../../assets/1/6.jpg";

import first2 from "../../assets/2/1.jpg";
import second2 from "../../assets/2/2.jpg";
import third2 from "../../assets/2/3.jpg";
import four2 from "../../assets/2/4.jpg";
import five2 from "../../assets/2/5.jpg";
import six2 from "../../assets/2/6.jpg";

const itemData = [
  {
    img: first1,
    title: 'Sala',
    rows: 2,
    cols: 2,
  },
  {
    img: second1,
    title: 'Sala',
  },
  {
    img: third1,
    title: 'Sala',
  },
  {
    img: four1,
    title: 'Sala',
    cols: 2,
  },
  {
    img: five1,
    title: 'Sala',
    cols: 2,
  },
  {
    img: six1,
    title: 'Sala',
    rows: 2,
    cols: 2,
  },
  {
    img: first2,
    title: 'Sala',
  },
  {
    img: second2,
    title: 'Sala',
  },
  {
    img: third2,
    title: 'Sala',
    rows: 2,
    cols: 2,
  },
  {
    img: four2,
    title: 'Sala',
  },
  {
    img: five2,
    title: 'Sala',
  },
  {
    img: six2,
    title: 'Sala',
    cols: 2,
    rows: 4
  },
];

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Gallery: React.FC = () => {
  return (
    <>
      <h2>Galeria</h2>
      <ImageList
     
      variant="quilted"
      cols={4}
      rowHeight={250}
      style={{marginBottom: "120px", margin:"20px 30px 120px 30px "}}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img 
             {...srcset(item.img, 250, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </>
  );
};

export default Gallery;
