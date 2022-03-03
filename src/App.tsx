// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Component } from 'react';
import ReactGA from 'react-ga';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'jque... Remove this comment to see the full error message
import $ from 'jquery';
import './App.css';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/Header' was resolved to '/Use... Remove this comment to see the full error message
import Header from './Components/Header';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/Footer' was resolved to '/Use... Remove this comment to see the full error message
import Footer from './Components/Footer';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/About' was resolved to '/User... Remove this comment to see the full error message
import About from './Components/About';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/Resume' was resolved to '/Use... Remove this comment to see the full error message
import Resume from './Components/Resume';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/Contact' was resolved to '/Us... Remove this comment to see the full error message
import Contact from './Components/Contact';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/Testimonials' was resolved to... Remove this comment to see the full error message
import Testimonials from './Components/Testimonials';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/Portfolio' was resolved to '/... Remove this comment to see the full error message
import Portfolio from './Components/Portfolio';

class App extends Component {
  state: any;

  constructor(props: any){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(this: any, data: any) {
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr: any, status: any, err: any){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      <div className="App">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Header data={this.state.resumeData.main}/>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <About data={this.state.resumeData.main}/>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Resume data={this.state.resumeData.resume}/>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Portfolio data={this.state.resumeData.portfolio}/>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Testimonials data={this.state.resumeData.testimonials}/>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Contact data={this.state.resumeData.main}/>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Footer data={this.state.resumeData.main}/>
      // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      </div>
    );
  }
}

export default App;
