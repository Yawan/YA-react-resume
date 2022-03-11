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

              <cite>{testimonials.user}</cite>
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
                <span>Client Testimonials</span>
              </h1>
            </div>

            <div className="ten columns flex-container">
              <ul className="slides">{renderTestimonials}</ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Testimonials
