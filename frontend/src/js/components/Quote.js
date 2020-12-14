import React, {Fragment} from 'react';
import { Link, withRouter } from 'react-router-dom';
import clientAxios from '../../config/axios';
import Swal from 'sweetalert2';

const Quote = (props) => {
  
  if(!props.getQuote){
    props.history.push('/');
    return null;
  }

  //stract data quote
  const { getQuote: {name, owner, hour, phone, date, symptoms, _id } } = props;

  //delete Quote

  const deleteQuote = (id) => {
    console.log(id);

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

          // alert delete
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )

          //call the API
          clientAxios.delete(`/patients/${id}`)
          .then(res => {
            props.setRequestC(true);
            props.history.push('/');
          }).catch(error => console.error(error));
        }
      })
  }
  return ( 
    <Fragment>
      <h1>Name Quote: {name}</h1>
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-12 mb-5 d-flex justify-content-center">
            <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Back</Link>
          </div>

          <div className="col-md-8 mx-auto">
            <div className="list-group">
              <div className="p-5 list-group-item list-group-item-action flex-column align-items-center">
                <div className="d-flex w-100 justify-content-between mb-4">
                  <h3  className="mb-3">{name}</h3>
                  <small className="fecha-alta">
                    {date} - {hour}
                  </small>
                </div>
                <p className="mb-0">
                  {symptoms}
                </p>
                <div className="contacto py-3">
                 <p>Owner: {owner}</p>
                 <p>Phone: {phone}</p>
                </div>

                <div className="d-flex">
                  <button type="button"
                    className="text-uppercase py-2 px-5 font-weight-bold btn btn-danger col"
                    onClick={ () => deleteQuote(_id)}
                  >
                    Delete &times;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
   );
}
 
export default withRouter(Quote);