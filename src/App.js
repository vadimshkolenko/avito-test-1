import React from 'react';
import './App.css';
import Header from './components/Header'
import List from './components/List'
import Item from './components/Item'
import { Route } from 'react-router-dom';

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <Route exact path="/" render={() => <List />} />
            <Route path="/item/:itemId" render={(props) => <Item {...props}/>} />
        </div>
    )
}

export default App;
