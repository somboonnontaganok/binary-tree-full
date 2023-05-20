import React from "react";
import Layout from "./Layout";

const Editactivity = () => {
  return (
    <>
    <Layout/>
   

    <div class="row g-5 mx-3">
      <div class="col-md-5 col-lg-4 order-md-last">
      <form class="needs-validation" novalidate="">
            <div class="row g-3">

              <div class="col-12">
                <label for="description" class="form-label">Description</label>
                <input className="form-control w-75 p-5" />
              </div>

              <div class="col-12">
                <label for="duration" class="form-label">Duration</label>
                <input type="text" class="form-control" id="duration"  required=""/>
            
              </div>

              <div class="col-12">
                <label for="heartrate" class="form-label">Distance</label>
                <input type="text" class="form-control" id="heartrate" />
              </div>

              <div class="col-md-5">
                
              <label for="remark" class="form-label">Remark</label>
              <input type="text" class="form-control" id="remark" />
               <p></p>
              </div>              
            </div>
    
          </form>
      </div>
      <div class="col-md-7 col-lg-8">
      <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary text-warning">Edit Activity</span>
        </h4>
        <form>
          <div>
            <h5>Input your Image</h5>
            <input className="pb-3" type="file" id="input-img" />
          </div>  
          <div class="col-12">
                <label for="title" class="form-label">Title</label>
                <input type="text" class="form-control" id="title" />
              </div>
        </form>
        <div className="form-group col-sm-4">
                <label className="control-label mb-3">Workout Types</label>
                <select name="prepend" className="select form-control w-100">
                  <option value="text">HIIT</option>
                  <option value="text">Pilates</option>
                  <option value="text">Strength Training</option>
                  <option value="text">Weight Training</option>
                  <option value="text">Yoga</option>
                </select>
          </div>
          
      </div>
    </div>
  
    </>
  );
};

export default Editactivity;
