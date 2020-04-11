import React from 'react';
import {Route, Switch} from 'react-router-dom'
import '../src/css/tailwind.css'
import {GlobalProvider} from './context/GlobalState'
import Home from './components/Home'
import AddEmployee from './components/AddEmployee'
import EditEmployee from './components/EditEmployee'


function App() {
  return(
    <GlobalProvider>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add" exact component={AddEmployee} />
        <Route path="/edit/:id" exact component={EditEmployee} />
        </Switch>
    </GlobalProvider>
  )
}

export default App;
