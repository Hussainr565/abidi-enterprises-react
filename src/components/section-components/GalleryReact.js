import React, { useState } from "react";
import Menu from "./menu";

const GalleryReact = () => {
    let publicUrl = process.env.PUBLIC_URL+'/';
  const [items, setItems] = useState(Menu);
  const [active, setActive] = useState(false);
  const filterItem = (categItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updateItems);
    setActive(true);
  };

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

      <div className="container-fluid mt-4">
        <div className="row" >
          {items.map((elem) => {
            const { id, name, image } = elem;

            return (
              <div className="col-sm-4" id={id}>
                {/* <div class="card mb-3"> */}
                  {/* <div class="row no-gutters"> */}
                    <div >
    <img className="full-width-img" src={image} alt={name} />
</div>
                    
                  {/* </div> */}
                </div>
            //   </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GalleryReact;