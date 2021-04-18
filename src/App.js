import React from 'react'
import { BrowserRouter ,Switch, Route } from 'react-router-dom'
import './App.css'
import Admin from './components/Admin'
import ListingItems from './components/ListingItems'

function App() {
  return (
    <>
    <BrowserRouter>
      <Route exact path="/" component={Admin} />
      <Switch>
        <Route exact path="/listingitems" component={ListingItems} />
      </Switch> 
    </BrowserRouter>      
    </>
  )
}

export default App;