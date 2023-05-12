import React from "react";

const Editactivity = () => {
  return (
    <>
      <div className="row">
        {/* left container */}
        <div className="container-lg pt-5 col-2">{/* LEFT PLANE */}</div>
        <div className="col">
          {/* edit activity */}
          <h1 className="display-5 fw-bold lh-1 mb-3 text-warning">
            Edit <span className="text-white bg-warning">activity</span>
          </h1>
          {/* middle-form */}
          <form>
            <div className="input-img">
              <label className="pb-1" for="input-file-1">
                input your image
              </label>
              <input className="pb-3" type="file" id="input-img" />
            </div>
            <div className="form-group">
              <label className="control-label mb-3">Title</label>
              <input className="form-control mb-3 w-75" />
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
        {/* right-from */}
        <div className="col">
          <div className="form-group">
            <label className="control-label mb-3">Description</label>
            <input className="form-control w-75 p-5" />
          </div>
          <div className="form-group">
            <label className="control-label mb-3">Duration</label>
            <input className="form-control mb-3 w-75" />
          </div>
          <div className="form-group">
            <label className="control-label mb-3">Heart Rate (BPM)</label>
            <input className="form-control mb-3 w-75" />
          </div>
          <div className="form-group">
            <label className="control-label mb-3">Calories burned (K.CAL)</label>
            <input className="form-control mb-3 w-75" />
          </div>
          <div className="row justify-content-center">
            <button
              type="cancel"
              className="btn border border-dark btn-secondary col-sm-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn border border-dark btn-warning col-sm-2 "
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editactivity