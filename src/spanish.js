// Make it DRY

import React from 'react';
import Title from "./components/spanishTitle/index.js";
import Jumbotron from "./components/spanishJumbotron/index.js";
import Container from "./components/container/index.js";
import VideoBox from "./components/video/index.js"
import Footer from "./components/footer/index.js";
import Links from "./components/links/index.js";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import buttonsData from "./assets/buttons.json";
import v0 from "./assets/images/MRF Anniversary Video Anthony Sample.mp4"
import v1 from "./assets/images/MRF Anniversary Video Anthony Sample 2.mp4"
import v2 from "./assets/images/MRF Anniversary Video Anthony Sample 3.mp4"
import v3 from "./assets/images/MRF Anniversary Video Anthony Sample.mp4"
import v4 from "./assets/images/MRF Anniversary Video Anthony Sample 2.mp4"
import v5 from "./assets/images/MRF Anniversary Video Anthony Sample 3.mp4"
import v6 from "./assets/images/MRF Anniversary Video Anthony Sample.mp4"
import v7 from "./assets/images/MRF Anniversary Video Anthony Sample 2.mp4"
import v8 from "./assets/images/MRF Anniversary Video Anthony Sample 3.mp4"
import v9 from "./assets/images/MRF Anniversary Video Anthony Sample.mp4"
import v10 from "./assets/images/MRF Anniversary Video Anthony Sample 2.mp4"
import v11 from "./assets/images/MRF Anniversary Video Anthony Sample 3.mp4"
import benefitsBooklet from "./assets/images/2019 Benefit Booklet- Texas Disposal Systems FINAL.pdf"
// import Buttons from "./components/buttons/index.js";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faUserInjured, faVideo, faTooth, faGlasses, faPiggyBank, faUserTag } from '@fortawesome/free-solid-svg-icons';



class App extends React.Component {
  state = {
    buttonsData,
    vX:v0,
    benefitsBooklet: benefitsBooklet
  };

  // changeVideo = () => {
  //   this.setState({vX: {buttonsData.vX}});
  // };

  // render() {
  //     return (
  //       <div className="App">
  //         <Title />
  //         <Jumbotron />
          
  //         <Container>
  //           <VideoBox video = {this.state.vX} />
  //         </Container>

  //         <br />
  //         <br />
  //         <br />
  //         <Container>
  //         {this.state.buttonsData.map(buttons => (
  //           <Buttons
  //             id={buttons.id}
  //             key={buttons.id}
  //             changeVideo={this.changeVideo}
  //             icon={buttons.icon}
  //             video={buttons.video}
  //             english={buttons.english}
  //             espanol={buttons.espanol}
  //           />
  //         ))}
  //         </Container>
  //         <br />
  //         <br />
  //         <Links />
  //         <br />
  //         <br />
  //         <br />
  //         <br />
  //         <Footer />
  //       </div>
  //     );
  //   };
  // }

  btn0 = () => {
    this.setState({vX: v0});
  };

  btn1 = () => {
    this.setState({vX: v1});
  };

  btn2 = () => {
    this.setState({vX: v2});
  };

  btn3 = () => {
    this.setState({vX: v3});
  };

  btn4 = () => {
    this.setState({vX: v4});
  };

  btn5 = () => {
    this.setState({vX: v5});
  };

  btn6 = () => {
    this.setState({vX: v6});
  };

  btn7 = () => {
    this.setState({vX: v7});
  };

  btn8 = () => {
    this.setState({vX: v8});
  };

  btn9 = () => {
    this.setState({vX: v9});
  };

  btn10 = () => {
    this.setState({vX: v10});
  };

  btn11 = () => {
    this.setState({vX: v11});
  };
  
  render() {
    return (
      <div className="App">
        <Title />
        <Jumbotron />
        <Container>
          <VideoBox video = {this.state.vX} />
        </Container>
        <br />
        <br />
        <br />
        <div className="row">
          <div className="row text-center">
            <div className="container">
              <div className="row">
                <div className="col-sm-4 text-center">
                  <button type="button" id="btn0" className="btn btn-primary" onClick={this.btn0}>
                    <FontAwesomeIcon icon={faVideo} />
                  </button>
                </div>
                <div className="col-sm-8 text-left">
                  <p>The General video: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ratione sequi placeat ad quod tempore culpa repellat aspernatur quas? Fugiat libero doloremque cumque nulla commodi</p>
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
                  <button type="button" id="btn1" className="btn btn-primary" onClick={this.btn1}>
                    <FontAwesomeIcon icon={faStethoscope} />
                  </button>
                </div>
                <div className="col-sm-8 text-left">
                  <p>Medical Coverage: The medical plan includes Standard and Premium plan options. Both options provide wellness benefits and incentives, a prescription program and benefit advocates.</p>
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
                <button type="button" id="btn2" className="btn btn-primary" onClick={this.btn2}>
                    <FontAwesomeIcon icon={faTooth} />
                  </button>
                </div>
                <div className="col-sm-8 text-left">
                  <p>Dental Coverage: The dental plan includes preventative, restorative, and orthodontia services Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor quas nemo nisi aliquid harum rem. Quibusdam!</p>
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
                <button type="button" id="btn3" className="btn btn-primary" onClick={this.btn3}>
                    <FontAwesomeIcon icon={faGlasses} />
                  </button>
                </div>
                <div className="col-sm-8 text-left">
                  <p>Vision: The vision plan provides coverage for an exam, prescription lenses, frames and contact lenses. aaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaa aaaaaaa aaaaa aaaaaa aaaaaaaa aa</p>
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
                <button type="button" id="btn4" className="btn btn-primary" onClick={this.btn4}>
                    <FontAwesomeIcon icon={faPiggyBank} />
                  </button>
                </div>
                <div className="col-sm-8 text-left">
                  <p>FSA: Employees have the opportunity to set aside money on a pre-tax basis (through payroll deductions) for eligible anticipated out-of-pocket health care and dependent care expenses.</p>
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
                <button type="button" id="btn5" className="btn btn-primary" onClick={this.btn5}>
                    <FontAwesomeIcon icon={faPiggyBank} />
                  </button>
                </div>
                <div className="col-sm-8 text-left">
                  <p>Life and AD&D insurance coverage is provided at two times the employee's basic annual earnings at no charge to the employee. Employees are also eligible to purchase additional life insurance coverage for themselves and their family.</p>
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
                <button type="button" id="btn6" className="btn btn-primary" onClick={this.btn6}>
                    <FontAwesomeIcon icon={faUserInjured} />
                  </button>
                </div>
                <div className="col-sm-8 text-left">
                  <p>Basic STD and LTD insurance are provided at no cost to the employee. Employees who are unable to work due to illness or injury may receive a salary-based disability benefit.</p>
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
                <button type="button" id="btn7" className="btn btn-primary" onClick={this.btn7}>
                    <FontAwesomeIcon icon={faPiggyBank} />
                  </button>
                </div>
                <div className="col-sm-8 text-left">
                  <p>Employees have the opportunity to participate in a 401(k) retirement plan. Employees are eligible to participate in a 401(k) plan after completing 90 days of employment. A company match is available with a minimum contribution.</p>
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
                <button type="button" id="btn8" className="btn btn-primary" onClick={this.btn8}>
                    <FontAwesomeIcon icon={faUserTag} />
                  </button>
                </div>
                <div className="col-sm-8 text-left">
                    <p>Employee Assitance Program (EAP), Paid Time off along with specific holidays, employee discounts at Stepping Stone School, Gold's Gym, and Dell Computers.</p>
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
                <button type="button" id="btn9" className="btn btn-primary" onClick={this.btn9}>
                    <FontAwesomeIcon icon={faUserTag} />
                  </button>
                </div>
                <div className="col-sm-8 text-left">
                    <p>Resetting password Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, officia quas! Nemo obcaecati omnis ipsam porro dignissimos! A reiciendis accusantium dignissimos aliquam aspernatur fugiat sit, quidem</p>
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
                <button type="button" id="btn10" className="btn btn-primary" onClick={this.btn10}>
                    <FontAwesomeIcon icon={faUserTag} />
                  </button>
                </div>
                <div className="col-sm-8 text-left">
                    <p>Resetting password Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, officia quas! Nemo obcaecati omnis ipsam porro dignissimos! A reiciendis accusantium dignissimos aliquam aspernatur fugiat sit, quidem</p>
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
                  <button type="button" id="btn11" className="btn btn-primary" onClick={this.btn11}>
                    <FontAwesomeIcon icon={faUserTag} />
                  </button>
                </div>
                <div className="col-sm-8 text-left">
                  <p>Resetting password Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, officia quas! Nemo obcaecati omnis ipsam porro dignissimos! A reiciendis accusantium dignissimos aliquam aspernatur fugiat sit, quidem</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <br />
        <br />
        <Links 
        benefitsBooklet = {this.state.benefitsBooklet}/>
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  };
}

export default App;  

