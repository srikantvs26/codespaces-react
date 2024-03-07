import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import profilePic from './assets/profilePic.jpg';

function App() {
  return (
    <>
      <main>
        <div className="container-lg">
          <div className="cover-page">
            <div className="cover-bg p-4 p-lg-5">
              <div className="row">
                <div className="col-lg-4 col-md-5">
                  <div className="avatar p-xxl-1">
                    <img
                      src={profilePic}
                      alt="profile picture"
                      height="200"
                      width="200"
                    />
                  </div>
                </div>
                <div className="col-lg-8 col-md-7 text-white text-md-start text-center">
                  <h1 className="mt-3">Srikant V S</h1>
                  <p>Senior Software Engineer</p>

                  <button type="button" class="btn btn-light mt-3 me-3">
                    Download CV
                  </button>
                  <button type="button" class="btn btn-info mt-3 text-white">
                    Hire Me
                  </button>
                </div>
              </div>
            </div>
            <h1 className="m-5">Rest of the page</h1>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
