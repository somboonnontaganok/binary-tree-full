import React from 'react'
import './EditPage.css'

function EditPage() {
  return (
    <div className="editpage">
    {/* edit page left side */}
      <div className="editpage-left">
        <div className="edit-activity">
          <h1>Edit Activity</h1>
        </div>
        <div className="dropzone">
          <p>Drag Files to Upload</p>
        </div>
        <div className="activity-title">
          <h5>Title</h5>
          <input className="input-title" type="text" />
        </div>
        <div className="workout-type">
          <h5>Workout Type</h5>
          <input className="input-workout-type" type="" />
        </div>
      </div>
    {/* edit page left side */}

    {/* edit page right side */}
      <div className="editpage-right">
        <div className="description">
          <h5>Description</h5>
          <input className="input-description" type="text" />
        </div>
        <div className="duration">
          <h5>Duration</h5>
          <input className="input-duration" type="number" />
        </div>
        <div className='BPM'>
          <h5>Heart Rate (BPM)</h5>
          <input className="input-BPM" type="number" />
        </div>
        <div className='Cal'>
          <h5>Calories Burned (K Cal.)</h5>
          <input className="input-Cal" type="number"></input>
        </div>
      </div>
      {/* edit page right side */}
    </div>
  )
}

export default EditPage