import React from 'react';
import './App.css';
import { Route , Link , Switch , withRouter } from 'react-router-dom';
import AddArticle from '../routers/Article/addArticle';
import DispalyArticle from '../components/display';
import Form from '../routers/Form/FormValidation';

import ReactstrapForm from '../routers/Form/ReactstrapForm';


function App() {

  let NavList = (
    <div>
      <Link to="/add-article">Add Article</Link>
      <Link to="/form">Form</Link>
    </div>
  );

  return (
    <div className="App">
      {/* <DispalyArticle /> 
      <AddArticle /> */}
      <Form/>
      <hr />
      <ReactstrapForm/>
    </div>
  );
}

export default withRouter(App);
