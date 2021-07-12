import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Content from './component/Content';
import Message from './component/Message/Message';
import Home from './component/Home/Home'
import {Route, BrowserRouter} from 'react-router-dom';
import About from './component/About/About'




class App extends React.Component {



  render(props) {
    return (

      <div>
      <BrowserRouter>

        <Header />
        <div className='content--center' >
          <Navbar />
          <Route path='/home' render={() => < Home />} />
          <Route path='/message' render={() => <Message  />} />
          <Route path='/content' component={Content} />
          <Route path='/about' render={About} />
        </div>
      </BrowserRouter>

      </div>

    )
  }


}
export default App;
