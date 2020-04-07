import React from 'react';
import {Route, Switch} from 'react-router-dom'
import '../src/css/tailwind.css'
import {GlobalProvider} from './context/GlobalState'
import Home from './components/Home'

function App() {
  return(
    <GlobalProvider>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </GlobalProvider>
  )
}

export default App;
