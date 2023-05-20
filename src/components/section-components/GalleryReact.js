import React, { useState } from "react";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Menu from "./menu";

const GalleryReact = () => {
    let publicUrl = process.env.PUBLIC_URL+'/';
  const [items, setItems] = useState(Menu);
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const filterItem = (categItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updateItems);
    setActive(true);
  };

  const images = items.map(item => item.image);
  return (
    <>
      
      <br />
      <div className="container">
        <ul className="nav nav-pills justify-content-center">
        <li className="nav-item" style={{marginBottom:"20px"}}>
            <a
              className="filter-button"
              href="javascrip:0;"
              onClick={() => setItems(Menu)}
            >
              All
            </a>
          </li>
          <li className="nav-item">
            <a
              className="filter-button"
              href="javascrip:0;"
              onClick={() => filterItem("front")}
            >
              Front Elevation
            </a>
          </li>
          <li className="nav-item">
            <a
              className="filter-button"
              href="javascrip:0;"
              onClick={() => filterItem("bedroom")}
            >
              Bedroom
            </a>
          </li>
          <li className="nav-item">
            <a
              className="filter-button"
              href="javascrip:0;"
              onClick={() => filterItem("lounge")}
            >
              Lounge
            </a>
          </li>
          <li className="nav-item">
            <a
              className="filter-button"
              href="javascrip:0;"
              onClick={() => filterItem("kitchen")}
            >
              Kitchen
            </a>
          </li>
          <li className="nav-item">
            <a
              className="filter-button"
              href="javascrip:0;"
              onClick={() => filterItem("bathroom")}
            >
              Bathroom
            </a>
          </li>
        </ul>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}

<div className="container-fluid mt-4">
        <div className="row">
          {items.map((elem, index) => {
            const { id, name, image } = elem;

            return (
              <div className="col-sm-4" id={id} key={id}>
                <div>
                  <img 
                    className="full-width-img" 
                    src={image} 
                    alt={name} 
                    onClick={() => {
                      setPhotoIndex(index);
                      setIsOpen(true);
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="container-fluid mt-4">
        <div className="row" >
          {items.map((elem) => {
            const { id, name, image } = elem;

            return (
              <div className="col-sm-4" id={id}>
                    <div >
    <img className="full-width-img" src={image} alt={name} />
</div>
                    
                 
                </div>
            );
          })}
        </div>
      </div> */}
    </>
  );
};

export default GalleryReact;