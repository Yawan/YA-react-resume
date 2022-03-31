import React, { Component } from 'react'
import Card from './Card'
import { ResumeProps, Skill } from './dataAPI'

type Props = {
  data: ResumeProps
}
class Resume extends Component<Props> {
  render() {
    const { data } = this.props
    const { skillmessage, education: educations, work: works } = data

    const EducationComponent = educations.map((edu, index) => {
      return (
        <div key={index}>
          <h3>{edu.school}</h3>

          <p className="info">
            {edu.degree} <span>&bull;</span>
            <em className="date">{edu.graduated}</em>
          </p>

          <p>{edu.description}</p>
        </div>
      )
    })
    const WorkComponent = works.map((work) => {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>

          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>

          <p>{work.description}</p>
        </div>
      )
    })
    const renderSkills = data.skills.map((skill: Skill) => {
      const path = 'images/' + skill.img
      return (
        <Card
          img={path}
          description={skill.alt}
          title={skill.name}
          key={skill.name}
        ></Card>
      )
    })

    return (
      <section id="resume">
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{WorkComponent}</div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="twelve card-container">{renderSkills}</div>
        </div>
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{EducationComponent}</div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Resume
