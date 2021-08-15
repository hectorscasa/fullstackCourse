import React from 'react'
import Part from '../Part'

const Content = ({parts}) => {
  return (
    <>
      {
        parts.map((exercise) => {
          return (
            <Part exercise={exercise} />
          )
        })
      }
    </>
  )
}

export default Content;