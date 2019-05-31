import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";
import Interviews from "./pages/Interviews";
import Faq from "./pages/Faq";
//components
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav location={window.location.pathname} />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/books" component={Books} />
            <Route path="/interviews" component={Interviews} />
            <Route path="/faq" component={Faq} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
