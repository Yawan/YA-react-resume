import React from 'react'

type Props = {
  img: string
  description: string
  title: string

}

const Card = ({ img, description, title }: Props) => {
  return (
    <div className="card">
      <img src={img} alt={description} />
      <h2>{title}</h2>
    </div>
  )
}

export default Card
