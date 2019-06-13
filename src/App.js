import React from 'react';
import Title from "./components/title/index.js";
import Jumbotron from "./components/jumbotron/index.js"
import VideoBox from "./components/video/index.js"
import Container from "./components/container/index.js"
import Buttons from "./components/buttons/index.js"
import Footer from "./components/footer/index.js";
import Links from "./components/links/index.js"
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStethoscope, faUserInjured, faVideo, faTooth, faGlasses, faPiggyBank, faUserTag } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import buttonsData from "./assets/buttons.json"



class App extends React.Component {
  state = {
    buttonsData,
  };
  render(  ) {
    return (
      <div className="App">
        <Title />
        <Jumbotron />
        <br />
        <div className="container">
          <VideoBox />
          <br />

          <Container>
          {this.state.buttonsData.map(button => (
              <Buttons
              plan = {this.state.plan}
              />
            ))}
          </Container>
          
          <br />
          <br />
          <Links />
          <br />
          <br />
          <br />
          <br />
          <Footer />
        </div>
      </div>
    );
  };
}

          {/* <div className="row">
            <div className="row text-center">
              <div className="container">
                <div className="row">
                  <div className="col-sm-4 text-center">
                    <button type="button" id="btn0" className="btn btn-primary">
                        <FontAwesomeIcon icon={faVideo} />
                      </button>
                  </div>
                  <div className="col-sm-8 text-left">
                    <p>The General video: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ratione sequi placeat
                      ad quod tempore culpa repellat aspernatur quas? Fugiat libero doloremque cumque nulla commodi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="row">
            <div className="row text-center">
              <div className="container">
                <div className="row">
                  <div className="col-sm-4 text-center">
                    <button type="button" id="btn1" className="btn btn-primary">
                        <FontAwesomeIcon icon={faStethoscope} />
                      </button>
                  </div>
                  <div className="col-sm-8 text-left">
                    <p>Medical Coverage: The medical plan includes Standard and Premium plan options. Both options provide
                      wellness benefits and incentives, a prescription program and benefit advocates.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="row">
            <div className="row text-center">
              <div className="container">
                <div className="row">
                  <div className="col-sm-4 text-center">
                    <button type="button" id="btn2" className="btn btn-primary">
                        <FontAwesomeIcon icon={faTooth} />
                      </button>
                  </div>
                  <div className="col-sm-8 text-left">
                    <p>Dental Coverage: The dental plan includes preventative, restorative, and orthodontia services Lorem
                      ipsum dolor sit amet consectetur, adipisicing elit. Dolor quas nemo nisi aliquid harum rem. Quibusdam!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="row">
            <div className="row text-center">
              <div className="container">
                <div className="row">
                  <div className="col-sm-4 text-center">
                    <button type="button" id="btn3" className="btn btn-primary">
                        <FontAwesomeIcon icon={faGlasses} />
                      </button>
                  </div>
                  <div className="col-sm-8 text-left">
                    <p>Vision: The vision plan provides coverage for an exam, prescription lenses, frames and contact lenses.
                      aaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaa aaaaaaa aaaaa aaaaaa aaaaaaaa aa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="row">
            <div className="row text-center">
              <div className="container">
                <div className="row">
                  <div className="col-sm-4 text-center">
                    <button type="button" id="btn4" className="btn btn-primary">
                        <FontAwesomeIcon icon={faPiggyBank} />
                      </button>
                  </div>
                  <div className="col-sm-8 text-left">
                    <p>FSA: Employees have the opportunity to set aside money on a pre-tax basis (through payroll deductions)
                      for eligible anticipated out-of-pocket health care and dependent care expenses.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="row">
            <div className="row text-center">
              <div className="container">
                <div className="row">
                  <div className="col-sm-4 text-center">
                  <button type="button" id="btn4" className="btn btn-primary">
                        <FontAwesomeIcon icon={faPiggyBank} />
                      </button>
                  </div>
                  <div className="col-sm-8 text-left">
                    <p>Life and AD&D insurance coverage is provided at two times the employee's basic annual earnings at no
                      charge to the employee. Employees are also eligible to purchase additional life insurance coverage for
                      themselves and their family.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="row">
            <div className="row text-center">
              <div className="container">
                <div className="row">
                  <div className="col-sm-4 text-center">
                  <button type="button" id="btn4" className="btn btn-primary">
                        <FontAwesomeIcon icon={faUserInjured} />
                      </button>
                  </div>
                  <div className="col-sm-8 text-left">
                    <p>Basic STD and LTD insurance are provided at no cost to the employee. Employees who are unable to work
                      due to illness or injury may receive a salary-based disability benefit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="row">
            <div className="row text-center">
              <div className="container">
                <div className="row">
                  <div className="col-sm-4 text-center">
                  <button type="button" id="btn4" className="btn btn-primary">
                        <FontAwesomeIcon icon={faPiggyBank} />
                      </button>
                  </div>
                  <div className="col-sm-8 text-left">
                    <p>Employees have the opportunity to participate in a 401(k) retirement plan. Employees are eligible to
                      participate in a 401(k) plan after completing 90 days of employment. A company match is available with a
                      minimum contribution.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="row">
            <div className="row text-center">
              <div className="container">
                <div className="row">
                  <div className="col-sm-4 text-center">
                    <button type="button" id="btn8" className="btn btn-primary">
                        <FontAwesomeIcon icon={faUserTag} />
                      </button>
                  </div>
                  <div className="col-sm-8 text-left">
                    Employee Assitance Program (EAP), Paid Time off along with specific holidays, employee discounts at
                    Stepping Stone School, Gold's Gym, and Dell Computers.
                  </div>
                </div>
              </div>
            </div>
          </div> */}
  
  








// function App() {
  // return (
  //   <div className="App">
  //     <Title />
  //     <Jumbotron />
  //     <br />
  //     <div className="container">
  //       <VideoBox />
  //       <br />
  //       <Buttons 
  //         plan = {this.state.plan}
  //       />
  //       <div className="row">
  //         <div className="row text-center">
  //           <div className="container">
  //             <div className="row">
  //               <div className="col-sm-4 text-center">
  //                 <button type="button" id="btn0" className="btn btn-primary">
  //                     <FontAwesomeIcon icon={faVideo} />
  //                   </button>
  //               </div>
  //               <div className="col-sm-8 text-left">
  //                 <p>The General video: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ratione sequi placeat
  //                   ad quod tempore culpa repellat aspernatur quas? Fugiat libero doloremque cumque nulla commodi</p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="row">
  //         <div className="row text-center">
  //           <div className="container">
  //             <div className="row">
  //               <div className="col-sm-4 text-center">
  //                 <button type="button" id="btn1" className="btn btn-primary">
  //                     <FontAwesomeIcon icon={faStethoscope} />
  //                   </button>
  //               </div>
  //               <div className="col-sm-8 text-left">
  //                 <p>Medical Coverage: The medical plan includes Standard and Premium plan options. Both options provide
  //                   wellness benefits and incentives, a prescription program and benefit advocates.</p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="row">
  //         <div className="row text-center">
  //           <div className="container">
  //             <div className="row">
  //               <div className="col-sm-4 text-center">
  //                 <button type="button" id="btn2" className="btn btn-primary">
  //                     <FontAwesomeIcon icon={faTooth} />
  //                   </button>
  //               </div>
  //               <div className="col-sm-8 text-left">
  //                 <p>Dental Coverage: The dental plan includes preventative, restorative, and orthodontia services Lorem
  //                   ipsum dolor sit amet consectetur, adipisicing elit. Dolor quas nemo nisi aliquid harum rem. Quibusdam!
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="row">
  //         <div className="row text-center">
  //           <div className="container">
  //             <div className="row">
  //               <div className="col-sm-4 text-center">
  //                 <button type="button" id="btn3" className="btn btn-primary">
  //                     <FontAwesomeIcon icon={faGlasses} />
  //                   </button>
  //               </div>
  //               <div className="col-sm-8 text-left">
  //                 <p>Vision: The vision plan provides coverage for an exam, prescription lenses, frames and contact lenses.
  //                   aaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaa aaaaaaa aaaaa aaaaaa aaaaaaaa aa</p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="row">
  //         <div className="row text-center">
  //           <div className="container">
  //             <div className="row">
  //               <div className="col-sm-4 text-center">
  //                 <button type="button" id="btn4" className="btn btn-primary">
  //                     <FontAwesomeIcon icon={faPiggyBank} />
  //                   </button>
  //               </div>
  //               <div className="col-sm-8 text-left">
  //                 <p>FSA: Employees have the opportunity to set aside money on a pre-tax basis (through payroll deductions)
  //                   for eligible anticipated out-of-pocket health care and dependent care expenses.</p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="row">
  //         <div className="row text-center">
  //           <div className="container">
  //             <div className="row">
  //               <div className="col-sm-4 text-center">
  //               <button type="button" id="btn4" className="btn btn-primary">
  //                     <FontAwesomeIcon icon={faPiggyBank} />
  //                   </button>
  //               </div>
  //               <div className="col-sm-8 text-left">
  //                 <p>Life and AD&D insurance coverage is provided at two times the employee's basic annual earnings at no
  //                   charge to the employee. Employees are also eligible to purchase additional life insurance coverage for
  //                   themselves and their family.</p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="row">
  //         <div className="row text-center">
  //           <div className="container">
  //             <div className="row">
  //               <div className="col-sm-4 text-center">
  //               <button type="button" id="btn4" className="btn btn-primary">
  //                     <FontAwesomeIcon icon={faUserInjured} />
  //                   </button>
  //               </div>
  //               <div className="col-sm-8 text-left">
  //                 <p>Basic STD and LTD insurance are provided at no cost to the employee. Employees who are unable to work
  //                   due to illness or injury may receive a salary-based disability benefit.</p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="row">
  //         <div className="row text-center">
  //           <div className="container">
  //             <div className="row">
  //               <div className="col-sm-4 text-center">
  //               <button type="button" id="btn4" className="btn btn-primary">
  //                     <FontAwesomeIcon icon={faPiggyBank} />
  //                   </button>
  //               </div>
  //               <div className="col-sm-8 text-left">
  //                 <p>Employees have the opportunity to participate in a 401(k) retirement plan. Employees are eligible to
  //                   participate in a 401(k) plan after completing 90 days of employment. A company match is available with a
  //                   minimum contribution.</p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="row">
  //         <div className="row text-center">
  //           <div className="container">
  //             <div className="row">
  //               <div className="col-sm-4 text-center">
  //                 <button type="button" id="btn8" className="btn btn-primary">
  //                     <FontAwesomeIcon icon={faUserTag} />
  //                   </button>
  //               </div>
  //               <div className="col-sm-8 text-left">
  //                 Employee Assitance Program (EAP), Paid Time off along with specific holidays, employee discounts at
  //                 Stepping Stone School, Gold's Gym, and Dell Computers.
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>


  //       <br />
  //       <br />
  //       <Links />
  //       <br />
  //       <br />
  //       <br />
  //       <br />
  //       <Footer />
  //     </div>
  //   </div>
  // );
// }

export default App;
