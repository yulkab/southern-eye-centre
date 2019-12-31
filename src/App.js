import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link, Switch} from "react-router-dom";
import ScrollToTop from 'ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatWeDo from './pages/WhatWeDo';
import Visit from './pages/Visit';
import DoctorsPage from './pages/DoctorsPage';
import Doctor from './pages/Doctor';
import EyeConditionsList from './pages/EyeConditionsList';
import EyeCondition from './pages/EyeCondition';
import AboutUs from './pages/AboutUs';
import Review from './pages/Review';
import EverythingAbout from './pages/EverythingAbout';

import jsonData from './data/eye-conditions.json';

const HomePage = lazy(() => import('./pages/Home'));

const dataEyeConditions = JSON.parse(JSON.stringify(jsonData));


class App extends React.Component {
  state = {
    isLoading: true,
    doctors: [],
    error: null
  };

  fetchDoctors() {
    fetch('./data/doctors.json')
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        doctors: data,
        isLoading: false,
      })
    })
    .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchDoctors();    
  }

  closeNavs(){
    this.refs.header.closeAllMenu();   
  }

  render() {   

    return (
      <Router>
        <ScrollToTop />
        <Header ref="header" doctors={this.state.doctors}/>  
        <main role="main" onClick={this.closeNavs.bind(this)}>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/home" component={HomePage} />

              <Route path="/what-we-do" render={match => <WhatWeDo {...match}/>}/>
              <Route path={["/consulting-and-treatment", "/day-surgery", "/laser"]} render={match => <WhatWeDo {...match}/>}/> 

              <Route path="/visit" render={match => <Visit {...match}/>}/>
              <Route path={["/what-to-bring", "/getting-here", "/faq"]} render={match => <Visit {...match}/>}/> 

              <Route path="/doctors" component={DoctorsPage} />
              <Route path="/doctor" component={Doctor} />
              <Route path="/eye-conditions" component={EyeConditionsList} />
          {
            dataEyeConditions.eye_conditions.map(
              ({path ,data}, key) => <Route key={key} path={path} render={match => <EyeCondition {...match} data={data} />}/>
            )
          }
              <Route path={["/introduction", "/procerures", "/resources", "/faq"]} render={match => <EyeCondition {...match}/>}/>   

              <Route path="/about" component={AboutUs} />

              {/* <Route path="/news" component={Topics} />
              <Route path="/reviews" component={Topics} />
              <Route path="/gallery" component={Topics} /> */}

              <Route path="/everything-about/:topic" render={match => <EverythingAbout {...match}/>}/>
              <Route path={["/news", "/reviews", "/gallery"]} render={match => <EverythingAbout {...match}/>}/> 
              
              <Route path="/review" component={Review} />

              <Route path="/contact" component={Topics} />
  
              <Redirect from="/" to="/home" /> 
            </Switch>
          </Suspense>
        </main>        
        <Footer/>            
      </Router>
    );
  }
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route exact path={match.path} render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;