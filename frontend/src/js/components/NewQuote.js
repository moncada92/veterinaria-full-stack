import React, {Fragment, useState} from 'react';
import { Link, withRouter } from 'react-router-dom';
import clientAxios from '../../config/axios';

const NewQuote = (props) => {

  // generate state as object
  const [quote, setQuote] = useState({
    name: '',
    owner: '',
    date: '',
    hour: '',
    phone: '',
    symptoms: ''
  })

  // read data from form
  const updateState = e => {
    setQuote({
      ...quote,
      [e.target.name]: e.target.value
    })
  }

  //send a request to API
  const createNewQuote = e => {
    e.preventDefault();

    //send request with axios
    clientAxios.post('/patients', quote)
      .then(res => {
        console.log(res);
        props.setRequestC(true);
        props.history.push('/');
      })
  }

  return ( 
    <Fragment>
      <h1 className="my-5">Create Quote</h1>
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-12 mb-5 d-flex justify-content-center">
            <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Back</Link>
          </div>
          <div className="col-md-8 mx-auto">
            <form 
            onSubmit={createNewQuote}
            className="bg-white p-5 bordered">
              <div className="form-group">
                  <label htmlFor="nombre">Name Pets</label>
                  <input 
                      type="text" 
                      className="form-control form-control-lg" 
                      id="nombre" 
                      name="name" 
                      placeholder="Name Pets"
                      onChange={updateState}                      
                  />
              </div>
  
              <div className="form-group">
                  <label htmlFor="propietario">Name Owner</label>
                  <input 
                      type="text" 
                      className="form-control form-control-lg" 
                      id="propietario" 
                      name="owner" 
                      placeholder="Name Owner"
                      onChange={updateState} 
                  />
              </div>
  
              <div className="form-group">
                  <label htmlFor="telefono">Phone</label>
                  <input 
                      type="tel" 
                      className="form-control form-control-lg" 
                      id="telefono" 
                      name="phone" 
                      placeholder="Phone"
                      onChange={updateState}  
                  />
              </div>
  
              <div className="form-group">
                  <label htmlFor="fecha">Date</label>
                  <input 
                      type="date" 
                      className="form-control form-control-lg" 
                      id="fecha" 
                      name="date"
                      onChange={updateState}  
                  />
              </div>
  
              <div className="form-group">
                  <label htmlFor="hora">Hour</label>
                  <input 
                      type="time" 
                      className="form-control form-control-lg" 
                      id="hora" 
                      name="hour"
                      onChange={updateState}   
                  />
              </div>
  
              <div className="form-group">
                  <label htmlFor="sintomas">Symptoms</label>
                  <textarea 
                      className="form-control" 
                      name="symptoms" 
                      rows="6"
                      onChange={updateState} 
                  ></textarea>
              </div>
  
              <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Create Quote"  />
            </form>
          </div>
        </div>
      </div>
    </Fragment>
   );
}

// witRaouter nos permite no perder los props que nos llega del componente padre con react-router-dom
export default withRouter(NewQuote);

// AWS, lambdas, DynamoDB, S3,