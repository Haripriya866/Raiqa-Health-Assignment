import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Counter from './components/Counter';

import './App.css'

function App() {
  
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Counter} />
        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App
