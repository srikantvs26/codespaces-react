import './App.css';
import './scss/styles.scss';
import logo from './logo.svg';
import profilePic from './assets/profilePic.jpg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Header';
import { Footer } from './Footer';
import WorkXp from './components/WorkXp';
import Education from './components/Education';
import Contact from './components/Contact';
import Address from './components/Address';
import resume from './assets/right_resume.pdf'

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="shadow-lg p-3 bg-white rounded">
            <div className="cover-bg p-4 p-lg-5">
              <div className="row">
                <div className="col-lg-4 col-md-5">
                  <div
                    className="avatar p-2"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                  >
                    <img
                      src={profilePic}
                      alt="profile picture"
                      height="200"
                      width="200"
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
                <div className="col-lg-8 col-md-7 text-white text-md-start text-center">
                  <h1
                    className="mt-3"
                    data-aos="fade-left"
                    data-aos-delay="0"
                    data-aos-once="true"
                  >
                    Srikant V S
                  </h1>
                  <p
                    data-aos="fade-left"
                    data-aos-delay="100"
                    data-aos-once="true"
                  >
                    Senior Software Engineer
                  </p>
                  <div
                    data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-once="true"
                  >
                    <a type="button" className="btn btn-light mt-3 me-3" target='_blank' href="https://drive.google.com/file/d/14BCAgOEHGK_qf95yjo6V-E60g45FhceD/view?usp=sharing">
                      Download CV
                    </a>
                    <a
                      type="button"
                      className="btn btn-bd-primary mt-3 text-white"
                      href='#contact'
                    >
                      Hire Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-md-5 mt-lg-3">
              <div className="col-lg-6">
                <p className="text-dark fs-3 fw-normal">About Me</p>
                <p>
                  Hello! I’m Srikant V S. I am passionate about Software
                  Development with no boundaries in tech. I am skilled in
                  building highly scalable applications by leading team of
                  engineers and working with business stakeholders.I have built
                  and architected solutions using Java, Spring Boot, Docker and Microservices.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-9 offset-lg-3">
                    <div className="table-responsive">
                      <table className="table table-borderless">
                        <tbody>
                          <tr>
                            <th scope="row">Email</th>
                            <td>
                              <a
                                href="mailto:srikantvs26@gmail.com"
                                className="text-decoration-none"
                              >
                                srikantvs26@gmail.com
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Phone</th>
                            <td>
                              <a
                                href="tel:+919886652951"
                                className="text-decoration-none"
                              >
                                +91-9886652951
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Address</th>
                            <td>#1/12 Victoria Road, Bangalore</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-lg-12">
                <p className="text-dark fs-3 fw-normal">Professional Skills</p>
              </div>
              <div className="col-lg-6">
                <div className="mb-2">
                  <span>Java</span>
                  <div
                    className="progress my-2"
                    role="progressbar"
                    aria-label="Success example"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar bg-primary"
                      style={{ width: '90%' }}
                      data-aos="zoom-in-right"
                      data-aos-delay="100"
                      data-aos-once="true"
                    ></div>
                  </div>
                </div>

                <div className="mb-2">
                  <span>Spring Cloud</span>
                  <div
                    className="progress  my-2"
                    role="progressbar"
                    aria-label="Success example"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar bg-primary"
                      style={{ width: '75%' }}
                      data-aos="zoom-in-right"
                      data-aos-delay="200"
                      data-aos-once="true"
                    ></div>
                  </div>
                </div>

                <div>
                  <span>Microservices</span>
                  <div
                    className="progress  my-2"
                    role="progressbar"
                    aria-label="Success example"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar bg-primary"
                      style={{ width: '70%' }}
                      data-aos="zoom-in-right"
                      data-aos-delay="300"
                      data-aos-once="true"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-2">
                  <span>Docker</span>
                  <div
                    className="progress my-2"
                    role="progressbar"
                    aria-label="Success example"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar "
                      style={{ width: '90%' }}
                      data-aos="zoom-in-right"
                      data-aos-delay="100"
                      data-aos-once="true"
                    ></div>
                  </div>
                </div>

                <div className="mb-2">
                  <span>Kubernetes</span>
                  <div
                    className="progress  my-2"
                    role="progressbar"
                    aria-label="Success example"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar "
                      style={{ width: '90%' }}
                      data-aos="zoom-in-right"
                      data-aos-delay="200"
                      data-aos-once="true"
                    ></div>
                  </div>
                </div>

                <div>
                  <span>Multithreading</span>
                  <div
                    className="progress  my-2"
                    role="progressbar"
                    aria-label="Success example"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar"
                      style={{ width: '85%' }}
                      data-aos="zoom-in-right"
                      data-aos-delay="300"
                      data-aos-once="true"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-lg-12">
                <WorkXp />
              </div>
              <hr />
              <div className="col-lg-12">
                <Education />
              </div>
            </div>
            <hr />
            <div className="row mb-3">
              <div className="col-lg-7">
               <Contact/>
              </div>
              <div className="col-lg-5">
               <Address/>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
