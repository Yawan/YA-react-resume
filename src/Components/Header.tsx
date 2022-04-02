import { Component } from 'react'
import { MainData } from './dataAPI'
import ScrollTo from './ScrollToButton'

type Props = {
  data: MainData
}

type State = {}

class Header extends Component<Props, State> {
  render() {
    const { name, occupation, description, address } = this.props.data
    const { city } = address
    const networks = this.props.data.social.map(function (network: any) {
      return (
        <li key={network.name}>
          <a href={network.url} target="_blank" rel="noopener noreferrer">
            <i className={network.className}></i>
          </a>
        </li>
      )
    })

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>

          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="nav-item">
              <ScrollTo toId="home" toRef={undefined} duration={1000}>
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </ScrollTo>
            </li>

            <li className="nav-item">
              <ScrollTo toId="about" toRef={undefined} duration={1000}>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </ScrollTo>
            </li>

            <li className="nav-item">
              <ScrollTo toId="resume" toRef={undefined}>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </ScrollTo>
            </li>

            <li className="nav-item">
              <ScrollTo toId="portfolio" toRef={undefined} duration={1000}>
                <a className="smoothscroll" href="#portfolio">
                  Works
                </a>
              </ScrollTo>
            </li>

            <li className="nav-item">
              <ScrollTo toId="testimonials" toRef={undefined} duration={1000}>
                <a className="smoothscroll" href="#testimonials">
                  Testimonials
                </a>
              </ScrollTo>
            </li>

            {/* <li className="nav-item">
              <ScrollTo toId="contact" toRef={undefined} duration={1000}>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </ScrollTo>
            </li> */}
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}</h1>

            <h3>
              I'm a <span>{occupation}</span> with 5 years of work
              experience. Thanks to <span>Tim Baker </span>
              for offering this{' '}
              <a href="https://github.com/tbakerx/react-resume-template">
                React-Resume-Template
              </a>
              . {description}
            </h3>

            <hr />

            <ul className="social">{networks}</ul>
          </div>
        </div>

        <ScrollTo toId="about" toRef={undefined} duration={1000}>
          <p className="scrolldown">
            <a>
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </ScrollTo>
      </header>
    )
  }
}

export default Header
