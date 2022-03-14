// import $ from 'jquery'
import React, { Component } from 'react'
import ReactGA from 'react-ga'
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import { ResumeData } from './Components/dataAPI'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Portfolio from './Components/Portfolio'
import Resume from './Components/Resume'
import Testimonials from './Components/Testimonials'
type Props = {}

type State = {
  resumeData?: ResumeData
}

class App extends Component<Props, State> {
  // state = {}
  constructor(props: any) {
    super(props)
    this.state = {}

    ReactGA.initialize('UA-110570651-1')
    ReactGA.pageview(window.location.pathname)
  }

  getResumeData() {
    fetch('/resumeData.json', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        /* Here is your json */
        console.log(json)
        this.setState({ resumeData: json as ResumeData })
      })
      .catch((error) => {
        console.log(error)
        /*Handle error*/
      })
  }

  componentDidMount() {
    this.getResumeData()
  }

  render() {
    console.log('render', this.state)
    const { resumeData } = this.state
    return resumeData ? (
      <div className="App">
        <Header data={resumeData.main} />
        <About data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Portfolio data={resumeData.portfolio} />
        <Testimonials data={resumeData.testimonials} />
        <Contact data={resumeData.main} />
        <Footer data={resumeData.main} />
      </div>
    ) : (
      <div>Something wrong</div>
    )
  }
}

export default App
