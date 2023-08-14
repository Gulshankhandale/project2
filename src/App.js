import logo from "./logo.png";
import image1 from "./image1.png";
import image2 from "./image2.png";
import tatalogo from "./tatalogo.png";
import flp from "./flp.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <nav className="navbar navbar-expand-lg bluebg">
        <a className="navbar-brand" href="">
          <img className="logoimg" src={flp} />
        </a>
       

        <div class="row">
            <div class="col-12 col-md-10 home13">
            <img className="logoimg2" src={flp} />
            
          </div>
          <div class="col-12 col-md-10 home13">
            <img className="logoimg2" src={flp} />
            
          </div>
          </div>
      
       
       
        
        
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav"></div>
      </nav> */}

<div class="container-fluid home14">
        <div class="container-fluid">
          <div class="row" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '1rem', paddingRight: '1rem'}}>
            <div class=" home13s">
            <img className="logoimg" src={flp} />
            </div>
            <div class=" home16s">
              <img class="home15" src={tatalogo} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid maincontainer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7">
              <div className="title animate__animated animate__fadeInLeft">
                Water Leakage Detection and Management System Using IOT
              </div>
              <div>
                <p className="paragraphtext title animate__animated animate__fadeInLeft">
                  An automated water quality management system for home,
                  workplaces, etc. in order to achieve the good water quality
                  needed by the citizens through loT.
                </p>
              </div>
              <div>
                <a href="https://admin.tsfwatermgt.com/login" target="_blank" rel="noreferrer">
                  <button
                    type="button"
                    className="dashboard title animate__animated animate__fadeInLeft"
                  >
                    Go to Dashboard
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row home3 animate__animated animate__fadeInUp">
          <div className="col-12 col-md-8 home6">
            <p >
              For human life and the health of the environment, water is
              important. We are creating an automated water quality management
              system for home, workplaces, etc. in order to achieve the good
              water quality needed by the citizens through loT. The automation
              of the system is demonstrated by Yogik Technologies Pvt Ltd. The
              device is powered by laptop/mobile phones. With this device will
              install in pipelines, we can collect and evaluate the residents
              'water usage habits and save a lot of water from waste.
            </p>
          </div>
          <div className="col-6 col-md-4">
            <img className="home4" src={image1} alt="" />
          </div>
        </div>
        <div className="row home5">
          <div className="col animate__animated animate__fadeInUp">
            Survey :
          </div>
        </div>
        <div className="row home3">
          <div className="col-12 col-md-12 home6 animate__animated animate__fadeInUp">
            <ul>
            
       
            <li> We analyzed numerous existing systems built by researchers in order to construct a model of good quality. During the study of parameters like temperature, pH and electrical conductivity, pressure different authors proposed differential model to test water quality and water leakage.</li>
            <li> We have to develop a smart water control device that can perform all these monitoring functions by looking at all these details.</li>
            <li>We are indicating that the Internet of Things applications has been rising tremendously in smart homes recently. The wide variety of various loT systems typically contributes to interoperability needs.</li>
            <li>We are indicating that the Internet of Things applications has been rising tremendously in smart homes recently. The wide variety of various loT systems typically contributes to interoperability needs.</li>
            </ul>
            {/* We analyzed numerous existing systems built by researchers in order
            to construct a model of good quality. During the study of parameters
            like temperature, pH and electrical conductivity, pressure different
            authors proposed differential model to test water quality and water
            leakage. We have to develop a smart water control device that can
            perform all these monitoring functions by looking at all these
            details. We are indicating that the Internet of Things applications
            has been rising tremendously in smart homes recently. The wide
            variety of various loT systems typically contributes to
            interoperability needs. Current IoT projects are implemented using
            physical platforms which lack decision-making intelligence. */}
          </div>
        </div>
        <div className="row home5">
          <div className="col animate__animated animate__fadeInUp">
            Motivation behind the Work :
          </div>
        </div>
        <div className="row home3">
          <div className="col-6 col-md-4">
            <img
              className="home4 animate__animated animate__fadeInUp"
              src={image2}
              alt=""
            />
          </div>
          <div className="col-12 col-md-8 animate__animated animate__fadeInUp home6s">
          <ul>
            
       
            <li> More than 10,000 people are killed every day around the world, according to reports. Every day.</li>
<li>More than 500 people in India die from water contamination problems.</li>
<li>Studies have shown that the amount of usable water declines to a minimum level after many years.</li>
<li>One explanation is the public and institutional unknowledge and the lack of a monitoring network of water quality, which causes significant global problems.</li>
            </ul>
            {/* <p>
              More than 10,000 people are killed every day around the world,
              according to reports. Every day, more than 500 people in India die
              from water contamination problems. Studies have shown that the
              amount of usable water declines to a minimum level after many
              years. One explanation is the public and institutional unknowledge
              and the lack of a monitoring network of water quality, which
              causes significant global problems.
            </p> */}
          </div>
        </div>
      </div>

      <div className="container-fluid home7 animate__animated animate__fadeInUp">
        <div className="container">
          <div className="row home8">Benefits:</div>
          <div className="row">
            <div className="col-12 col-md-1"></div>
            <div className="col-12 col-md-10 home9">
              <p>Benefits of using IOT based Water Leakage Detection System Real-time Sensor based IOT technology is exploited for
              real-time persistence.</p>
              <p>It is very beneficial for preventing the
              industries from water damage.</p>
              <p>Real-time alerts and notifications
              to the user concerning water leakage guarantee the complete safety
              of the area.</p>
              <p>Users can get alerts on the directly connected phone
              or other devices through the dashboard or app ubiquitously.</p>
              {/* Benefits of using lot based Water Leakage Detection System Real-time Sensor based IOT technology is exploited for
              real-time persistence and it is very beneficial for preventing the
              industries from water damage. Real-time alerts and notifications
              to the user concerning water leakage guarantee the complete safety
              of the area. Users can get alerts on the directly connected phone
              or other devices through the dashboard or app ubiquitously. */}
            </div>
          </div>
          <div className="row home10">
            <a href="https://admin.tsfwatermgt.com/login" target="_blank" rel="noreferrer">
              <button type="button" className="home11">
                Go to Dashboard
              </button>{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="container home12">
        <div className="row home5">
          <div className="col">Predictive maintenance :</div>
        </div>
        <div className="row home3">
          <div className="col-12 col-md-12 home6">
            The truthful outcomes through loT sensors are engendered by the
            advanced algorithms entrenched in the loT solutions. These solutions
            contribute to making industrious decisions by predicting the future
            possibility of water leakage in the factories. Predictive
            maintenance can lead to highly precautionary measures in the
            industries resulting in saving a huge amount of water loss and
            preventing the machines and goods from getting damaged. The
            inference of advanced technologies sideways with loT is turning the
            water leakage detection process entirely effortless. The benefits of
            using smart leakage detection system are huge and help industries to
            prevent themselves from considerable loss. Industries are showing
            inordinate interest in implementing smart water leakage detection
            solution by concentrating on the useful and easily handy features of
            the system. The solution is for numerous indust which shows the
            flexiblity and scalability le accessible for numerous industries
            which shows the flexibility and scalability level of the system
            evidently.
          </div>
        </div>
      </div>

      <div class="container-fluid home14">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-10 home13"  style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '1rem', paddingRight: '1rem'}}>
              © 2023 All Copyrights Reserved by TATA STEEL FOUNDATION
            </div>
            {/* <div class="col-12 col-md-2 home16">
              <img class="home15" src={tatalogo} alt="" />
            </div> */}
          </div>
        </div>
      </div>



    </div>
  );
}

export default App;
