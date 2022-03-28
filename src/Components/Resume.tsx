import React, { Component } from 'react'
import { ResumeProps, Skill } from './dataAPI'

type Props = {
  data: ResumeProps
}
class Resume extends Component<Props> {
  render() {
    const { data } = this.props
    const { skillmessage, education: educations, work: works } = data

    const EducationComponent = educations.map((edu) => {
      return (
        <div key={edu.school}>
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
      var className = 'bar-expand ' + skill.name.toLowerCase()

      return (
        <li key={skill.name}>
          <span style={{ width: skill.level }} className={className}></span>
          <em>{skill.name}</em>
        </li>
      )
    })

    return (
      <section id="resume">
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

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{renderSkills}</ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Resume
