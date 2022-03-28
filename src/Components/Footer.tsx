import { Component } from 'react'
import { MainData, SocialInfoProps } from './dataAPI'
import ScrollTo from './ScrollToButton'

type Props = {
  data: MainData
}

type State = {}

class Footer extends Component<Props, State> {
  render() {
    const { social } = this.props.data

    const socialLinks = social.map((network: SocialInfoProps) => {
      return (
        <li key={network.name}>
          <a href={network.url} target="_blank" rel="noopener noreferrer">
            <i className={network.className}></i>
          </a>
        </li>
      )
    })

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">{socialLinks}</ul>

            <ul className="copyright">
              <li>&copy; Copyright 2022 J.S</li>

              <li>
                Design by{' '}
                <a title="Styleshout" href="http://www.styleshout.com/">
                  Styleshout
                </a>
              </li>
            </ul>
          </div>

          <div id="go-top">
            <ScrollTo toId="home" toRef={undefined} duration={3000}>
              <a className="smoothscroll" title="Back to Top" href="#home">
                <i className="icon-up-open"></i>
              </a>
            </ScrollTo>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
