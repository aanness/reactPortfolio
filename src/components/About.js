import React, { Component } from 'react';
export default class About extends Component {
   render() {
      let resumeData = this.props.resumeData;
      return (
         <section id="about">
            <div className="row">


               <div className="main-col" style={{ textAlign: 'center '}}>

                  <h2>About Me</h2>
                  <p>
                     {
                        resumeData.aboutme
                     }
                  </p>
                  <button href="../images/Ashley_Anness_Resume_2020Plus.pdf">RESUME</button>


               </div>
            </div>
         </section>
      );
   }
}