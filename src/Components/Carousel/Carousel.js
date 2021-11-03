import React from 'react';
import layout1 from '../../images/layoutfinal.jpg'
import layout2 from '../../images/layout.jpg'

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={layout1} alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={layout2} alt="Second slide" />
    </div>
  </div>
</div>
        </div>
    );
}

export default Carousel;
