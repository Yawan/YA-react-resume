// import $ from 'jquery'
import React, { Component } from 'react'
import ReactGA from 'react-ga'
import './App.css'
import About from './Components/About'
//import Contact from './Components/Contact'
import { ResumeData } from './Components/dataAPI'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Portfolio from './Components/Portfolio'
import Resume from './Components/Resume'
import Testimonials from './Components/Testimonials'
type Props = {}

type State = {
  resumeData?: ResumeData
  observer?: IntersectionObserver
}

type RatioElementRecord = Record<string, number>

const buildThresholdList = () => {
  const thresholds = []
  const numSteps = 10

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps
    thresholds.push(ratio)
  }

  thresholds.push(0)
  return thresholds
}

class App extends Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {}

    ReactGA.initialize('UA-110570651-1')
    ReactGA.pageview(window.location.pathname)
  }

  getResumeData() {
    fetch(`${process.env.PUBLIC_URL}/resumeData.json`, {
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

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (!this.state.observer) {
      this.initObserver()
    }
  }

  private initObserver() {
    const navItems = document.querySelectorAll('.nav-item')
    const sections = document.querySelector('.App')!.childNodes
    const sectionElements = Object.values(sections) as HTMLElement[]
    const ratioBySectionId: RatioElementRecord = {}
    const thresholdList = buildThresholdList()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratioBySectionId[entry.target.id] = entry.intersectionRatio

          // find max intersection with reduce comparer
          const idWithMaxRatio = Object.keys(ratioBySectionId).reduce((a, b) =>
            ratioBySectionId[a] > ratioBySectionId[b] ? a : b
          )

          // get the section element and set currentIndex.
          const currentSection = document.getElementById(idWithMaxRatio)
          const currentIndex = sectionElements?.findIndex(
            (el) => el === currentSection
          )
          // use the currentIndex to update the status of navbar.
          navItems.forEach((navItem, index) => {
            index === currentIndex
              ? navItem.classList.toggle('current', true)
              : navItem.classList.toggle('current', false)
          })
        })
      },
      {
        threshold: thresholdList,
        // only focus on the upper side.
        rootMargin: '-5% 0px -35% 0px',
      }
    )
    for (const section of sectionElements) {
      section.id && observer.observe(section)
    }
    this.setState({ observer })
  }

  render() {
    // console.log('render', this.state)
    const { resumeData } = this.state

    return resumeData ? (
      <div className="App">
        <Header data={resumeData.main} />
        <About data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Portfolio data={resumeData.portfolio} />
        <Testimonials data={resumeData.testimonials} />
        {/* <Contact data={resumeData.main} /> */}
        <Footer data={resumeData.main} />
      </div>
    ) : (
      <div>Something wrong</div>
    )
  }
}

export default App
