import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Table from './components/Table';
import SideBar from './components/SideBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="main">
          <SideBar />
          <Table />
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
