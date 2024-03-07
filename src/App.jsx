import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';


function App() {
  return (
    <>
      <header>
        <div className="container">
          <div className='py-3 clearfix'>
            <h1 className='site-title'>Bosch</h1>
            <div className='site-nav'>
              <ul class="nav justify-content-end">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Linked In</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Instagram</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Github</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className='container'>
          <div className='cover'>
            <div className="cover-bg">
              <div class="row">
                <div class="col-lg-3 p-3 p-xl-4">
                <div class="avatar hover-effect  bg-white  skills-section">
                  <img src='Octocat.png' alt='image' width={200} height={200}/>
                  </div>
                </div>
                <div class="col-lg-9">col-sm-8</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>

  );
}

export default App;
