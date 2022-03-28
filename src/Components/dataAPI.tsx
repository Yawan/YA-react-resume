export type SocialInfoProps = {
  className: string
  name: string
  url: string
}

export type MainData = {
  address: {
    city: string
    state: string
    street: string
    zip: string
  }
  bio: string
  contactMessage: string
  description: string
  email: string
  image: string
  name: string
  occupation: string
  phone: string
  resumeDownload: string
  social: SocialInfoProps[]
  website: string
}

export type Project = {
  category: string
  image: string
  title: string
  url: string
}
export type PortfolioProps = {
  projects: Project[]
}

//todo: check if level is necessary
export type Skill = {
  name: string
  level: string
}

type Works = {
  company: string
  description: string
  title: string
  years: string
}

type Education = {
  degree: string
  description: string
  graduated: string
  school: string
}
export type ResumeProps = {
  education: Education[]
  skillmessage: string
  skills: Skill[]
  work: Works[]
}
export type TestimonialProps = {
  text: string
  user: string
}

export type ResumeData = {
  main: MainData
  portfolio: PortfolioProps
  resume: ResumeProps
  testimonials: TestimonialProps[]
}
