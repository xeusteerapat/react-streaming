import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      <h1>PageOne</h1>
      <Link to='/page2'>Go to page 2</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      <h1>PageTwo</h1>
      <Link to='/'>Go Back</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path='/' component={PageOne} />
          <Route path='/page2' component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
