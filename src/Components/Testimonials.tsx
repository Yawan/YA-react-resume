import React, { Component } from 'react'
import { TestimonialProps } from './dataAPI'

type Props = {
  data: TestimonialProps[]
}

class Testimonials extends Component<Props> {
  render() {
    const { data: testimonials } = this.props
    const renderTestimonials = testimonials.map(
      (testimonials: TestimonialProps) => {
        return (
          <li key={testimonials.user}>
            <blockquote>
              <p>{testimonials.text}</p>

              <cite> {testimonials.user}</cite>
            </blockquote>
          </li>
        )
      }
    )

    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Testimonials</span>
              </h1>
            </div>

            <div className="ten columns flex-container">
              <ul className="slides">{renderTestimonials}</ul>
            </div>
            <div className="columns download">
              <p>
                <a
                  href={
                    'https://drive.google.com/file/d/1K1Ao3IWP1OosZuz8MYhE_XpC6A0dSLej/view?usp=sharing'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  <i className="fa fa-download"></i>View more
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Testimonials
