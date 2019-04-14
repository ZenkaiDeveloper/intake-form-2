import React, { Component } from 'react';
import logo from './logo.svg';


class Report extends Component {


  render() {
    return (
      <div className="report">


        <h1>Intake Form</h1>
        <p>Name: Vicente</p>
        <p>DOB: September, 25 1992</p>
        <p>Gmail: vicente2872@gmail.com</p>
        <p>Phone: 1347-522-9876</p>
        <p>Address: 226 S Main St Anna IL, 29208</p>
        <hr />

        <h1>Vaccines</h1>
        <div className="vaccine">
          <label>Hepatitis B</label>
          <input checked="true" type="checkbox" />
          <label>Influenza</label>
          <input checked="true" type="checkbox" />


          <label>Measles</label>
          <input checked="true" type="checkbox" />
          <label>Tetanus</label>
          <input checked="true" type="checkbox" />
        </div>

        <div className="vaccine">
          <label>Polio</label>
          <input checked="" type="checkbox" />
          <label>Baricella</label>
          <input checked="true" type="checkbox" />


          <label>HPV</label>
          <input checked="true" type="checkbox" />
          <label>Rotavirus</label>
          <input checked="true" type="checkbox" />
        </div>

        <hr/>
        <h1>Past Surgeries</h1>
        <h3>-Breast Biopsy</h3>
        <p>A test used to diagnose breast cancer. The surgery removes a small amount of tissues or cells. Used to remove abnormal breast tissues.</p>

        <h3>-Carotid endarterectomy</h3>
        <p> Carotid endarterectomy is a surgery to remove blockage from carotid arteries. These arteries are in the neck. They supply blood to the brain. Left untreated, a blocked carotid artery can cause a stroke.</p>

        <h3>-Hysterectomy</h3>
        <p> A hysterectomy is surgery to remove a woman's uterus. This may be done through an incision in the abdomen, through small incisions and a laparoscope, or vaginally. The ovaries may be removed at the same time.</p>

        <h3>-Partial colectomy</h3>
        <p>A partial colectomy is removing part of the large intestine (colon). This may be done to treat cancer of the colon or inflammatory conditions such as ulcerative colitis or diverticulitis</p>

        <hr/>
        <h1>Medications Being Used</h1>
        <div>

        <div className="vaccine">
          <div>
          <label>Vicodin</label>
          <input checked="" type="checkbox" />
          </div>

          <div>
          <label>Baricella</label>
          <input checked="true" type="checkbox" />
          </div>



          <div>
          <label>Simvastatin</label>
          <input checked="true" type="checkbox" />
          </div>

          <div>
          <label>Levothyoxine</label>
          <input checked="true" type="checkbox" />
          </div>

          <div>
          <label>Lipitor</label>
          <input checked="true" type="checkbox" />
          </div>
        </div>

        </div>
      </div>
    );
  }
}

export default Report;
