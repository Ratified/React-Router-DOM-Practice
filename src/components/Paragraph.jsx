import React from 'react'

const Paragraph = ({username = "User"}) => {
  return (
    <div>
      <h1>Welcome {username} </h1>
    </div>
  )
}

export default Paragraph
