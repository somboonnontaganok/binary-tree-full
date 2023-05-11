import React from "react";

export const Editactivity = () => {
  return (
    <>
      <div class="row">
        {/* left container */}
        <div class="container-lg pt-5 col-2">{/* LEFT PLANE */}</div>
        <div class="col">
          {/* edit activity */}
          <h1 class="display-5 fw-bold lh-1 mb-3 text-warning">
            Edit <span class="text-white bg-warning">activity</span>
          </h1>
          {/* middle-form */}
          <form>
            <div class="input-img">
              <label class="pb-1" for="input-file-1">
                input your image
              </label>
              <input class="pb-3" type="file" id="input-img" />
            </div>
            <div class="form-group">
              <label class="control-label mb-3">Title</label>
              <input class="form-control mb-3 w-75" />
            </div>
          </form>
          <div class="form-group col-sm-4">
            <label class="control-label mb-3">Workout Types</label>
            <select name="prepend" class="select form-control w-100">
              <option value="text">HIIT</option>
              <option value="text">Pilates</option>
              <option value="text">Strength Training</option>
              <option value="text">Weight Training</option>
              <option value="text">Yoga</option>
            </select>
          </div>
        </div>
        {/* right-from */}
        <div class="col">
          <div class="form-group">
            <label class="control-label mb-3">Description</label>
            <input class="form-control w-75 p-5" />
          </div>
          <div class="form-group">
            <label class="control-label mb-3">Duration</label>
            <input class="form-control mb-3 w-75" />
          </div>
          <div class="form-group">
            <label class="control-label mb-3">Heart Rate (BPM)</label>
            <input class="form-control mb-3 w-75" />
          </div>
          <div class="form-group">
            <label class="control-label mb-3">Calories burned (K.CAL)</label>
            <input class="form-control mb-3 w-75" />
          </div>
          <div class="row justify-content-center">
            <button
              type="cancel"
              class="btn border border-dark btn-secondary col-sm-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="btn border border-dark btn-warning col-sm-2 "
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
