// ScrollToButton.jsx

import React from 'react'
import { scrollTo } from '../utils/scrollTo'

const ScrollTo = ({ toId, toRef, duration = 2000, children }) => {
  const handleClick = () => scrollTo({ id: toId, ref: toRef, duration })

  return (
    <div onClick={handleClick} className="scroll-to">
      {children}
    </div>
  )
}

export default ScrollTo
