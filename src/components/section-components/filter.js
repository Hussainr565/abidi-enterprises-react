import React from 'react';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '*',
      images: [
        {src: "path-to-image1.jpg", alt: "Image 1", category: "kitchen"},
        {src: "path-to-image2.jpg", alt: "Image 2", category: "bathroom"},
        // Add other images as necessary...
      ]
    };
  }

  changeFilter = (filter) => {
    this.setState({filter: filter});
  };

  render() {
    const filteredImages = this.state.images.filter(image =>
      this.state.filter === '*' || image.category === this.state.filter
    );

    return (
      <div>
        <button onClick={() => this.changeFilter('*')}>All</button>
        <button onClick={() => this.changeFilter('kitchen')}>Kitchens</button>
        <button onClick={() => this.changeFilter('bathroom')}>Bathrooms</button>
        {/* Add other buttons as necessary... */}
        
        <div>
          {filteredImages.map((image, index) => 
            <img key={index} src={image.src} alt={image.alt} />
          )}
        </div>
      </div>
    );
  }
}

export default Gallery;
