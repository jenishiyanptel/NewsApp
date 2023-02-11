import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import NewsItem from './Components/NewsItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';




export default class App extends Component {
  state={
    progress:0
  }
setProgress=(progress)=>{
 this.setState({progress:progress})
  }
  c ='Jhon'
  pageSize=8
   apiKey="fe91fbf18eac498d9ae1161486b93c18";
  //  process.env.REACT_APP_NEWS_API;
  render() {



    return (

      <>
      <Router>
      <NavBar/>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
  
      />
      <Routes>
        <Route exact path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"/>}>general</Route>
        ́̃<Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize={this.pageSize}country="in" category="business"/>}>business</Route>
́̃        <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}>entertainment</Route>
́̃        <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health"/>}>health</Route>
́̃        <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science"/>}>science</Route>
́̃        <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports"/>}>sports</Route>
́̃        <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology"/>}>technology</Route>
      </Routes>
      </Router>
      </>
    )
  }
}
