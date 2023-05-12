import React from 'react';
import hiit from '../../public/assets/img/HIIT-card.jpg';
import wt from '../../public/assets/img/Weight training-card.jpg';
import st from '../../public/assets/img/Strangth training-card.jpg';
import pt from '../../public/assets/img/Pilates-card.jpg';
import yt from '../../public/assets/img/Yoga-card.jpg';

const Section3 = () => {
  return (
    <>
        <div className="3-section my-5">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <img src={hiit} className="d-block w-50" alt="..."/>
                <h5>Title</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam ullam, ducimus dolor fugit aliquam unde quasi molestiae vero placeat ut libero aut adipisci nihil velit maxime, tempore magni sed odit.</p>
            </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={wt} className="d-block w-50" alt="..."/>
                <h5>Title</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam ullam, ducimus dolor fugit aliquam unde quasi molestiae vero placeat ut libero aut adipisci nihil velit maxime, tempore magni sed odit.</p>
            </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={st} className="d-block w-50" alt="..."/>
                <h5>Title</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam ullam, ducimus dolor fugit aliquam unde quasi molestiae vero placeat ut libero aut adipisci nihil velit maxime, tempore magni sed odit.</p>
            </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={pt} className="d-block w-50" alt="..."/>
                <h5>Title</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam ullam, ducimus dolor fugit aliquam unde quasi molestiae vero placeat ut libero aut adipisci nihil velit maxime, tempore magni sed odit.</p>
            </div>
              <div className="carousel-item">
                <img src={yt} className="d-block w-50" alt="..."/>
                <h5>Title</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam ullam, ducimus dolor fugit aliquam unde quasi molestiae vero placeat ut libero aut adipisci nihil velit maxime, tempore magni sed odit.</p>
            </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
    </div>
    </>
  )
}

export default Section3