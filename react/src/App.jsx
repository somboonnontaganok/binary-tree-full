import React from 'react'
import Layout from '../src/components/Layout';
import girl from '../public/assets/img/GirlAndEllipse.png';
import headPhone from '../public/assets/img/headPhone.png';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';

const App = () => {

  return (
    <>
      <Layout />
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
                <div className="d-flex align-items-end justify-content-between">
                    <h1 className="display-5 fw-bold lh-1 mb-3">What’s <span className="text-warning">Nest</span>Fit</h1>
                    <img src={headPhone} />
                </div>
                
                <p className="lead">Welcome to NestFit - where fitness is fun! With our all-in-one features, state-of-the-art workouts, and a supportive community, achieving your fitness goals has never been more enjoyable. Let's unleash your potential together and start your fitness journey with NestFit today!</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" className="btn btn-warning btn-lg px-4 me-md-2">Join Our Squad!</button>
                    {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button> */}
                </div>
            </div>
        <div className="col-lg-6">
            <img src={girl} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />     
        </div>
    </div>
    <Section2/>
    <Section3/>
    <Section4/>
    </>
  )
}

export default App
