import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const Patients = ({quote}) => {

  if(quote.length === 0) return null;
  
  return (
    <Fragment>
      <h1 className="my-5">Administrator Patients</h1>

      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-12 mb-5 d-flex justify-content-center">
            <Link to={'/new'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Create Quote</Link>
          </div>
          <div className="col-md-8 mx-auto">
            <div className="list-group">
              {quote.map(q => (
                <Link to={`/quote/${q._id}`} key={q._id} className="P-5 list-group-item list-group-item-action flex-column align-itmes-start">
                  <div className="d-flex w-100 justify-content-between mb-4">
                    <h3  className="mb-3">{q.name}</h3>
                    <small className="fecha-alta">
                      {q.date} - {q.hour}
                    </small>
                  </div>
                  <p className="mb-0">
                    {q.symptoms}
                  </p>
                  <div className="contacto py-3">
                    <p>Owner: {q.owner}</p>
                    <p>Phone: {q.phone}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Patients;
