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
  observer?: IntersectionObserver
}

const buildThresholdList = () => {
  let thresholds = []
  let numSteps = 20

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

  componentDidUpdate(prevProps: Props, prevState: State) {
    this.initObserver()
  }

  private initObserver() {
    if (!this.state.observer) {
      const navItems = document.querySelectorAll('.nav-item')
      const sections = document.querySelector('.App')!.childNodes

      const sectionElements = Object.values(sections) as HTMLElement[]
      let ratioByElementId = new Map()
      // const thresholdList = buildThresholdList()
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            let prevRatio = ratioByElementId.get(entry.target.id) || 0
            entry.target.id &&
              ratioByElementId.set(entry.target.id, entry.intersectionRatio)

            // the ratio is increasing and more then 20% of rootMargin
            if (
              entry.intersectionRatio > prevRatio &&
              entry.intersectionRatio > 0.2
            ) {
              // console.log(prevRatio)
              // console.log(
              //   entry.target.id,
              //   entry,
              //   'ratio',
              //   entry.intersectionRatio
              // )
              const currentSection = entry.target
              const currentIndex = sectionElements?.findIndex(
                (el) => el === currentSection
              )

              // update the status of navbar.
              navItems.forEach((navItem, index) => {
                index === currentIndex
                  ? navItem.classList.toggle('current', true)
                  : navItem.classList.toggle('current', false)
              })
            }
          })
        },
        {
          // threshold: thresholdList,
          threshold: [0.2, 0.3, 0.8, 0.9],
          // skip footer from triggering
          rootMargin: '0px 0px -33% 0px',
        }
      )
      for (const childEl of sectionElements) {
        observer.observe(childEl)
      }
      this.setState({ observer })
    }
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
