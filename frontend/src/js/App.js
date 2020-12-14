import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import clientAxios from '../config/axios';

import Patients from './components/Patients';
import NewQuote from './components/NewQuote';
import Quote from './components/Quote';

const App = () =>{

  const [quote, setQuote] = useState([]);
  const [requestC, setRequestC] = useState(true);

  useEffect( () => {
    if (requestC){
      const consultAPI = () => {
        clientAxios.get('/patients')
          .then(res => {
            setQuote(res.data);
            setRequestC(false);
          })
          .catch(err => console.log(err))
      }
      consultAPI();
    }
  }, [requestC]);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Patients quote={quote} />}/>
        <Route exact path="/new" component={() => <NewQuote setRequestC={setRequestC} /> }/>
        <Route exact path="/quote/:id"
          render={(props) => {
            const getQuote = quote.filter(q => q._id === props.match.params.id);
            return(
              <Quote getQuote={getQuote[0]} setRequestC={setRequestC}/>
            )
          }
        }
        />
      </Switch>
    </Router>
  )
}

export default App;
