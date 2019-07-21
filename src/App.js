//import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Suspense, lazy } from 'react';

import Header from './components/Header';
const HomePage = lazy(() => import('./pages/Home'));

function App() {
  return (
    <Router>
      <Header/>  
      
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/news" component={Topics} />
        <Route path="/reviews" component={Topics} />
        <Route path="/gallery" component={Topics} />
        <Route path="/contact" component={Topics} />
           
      <footer className="footer">Here goes footer</footer>
    </Router>
  );
}

function Home() {
  return (   
      <Suspense fallback={<div>Loading...</div>}>
        <HomePage/>
      </Suspense>      
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
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
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
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