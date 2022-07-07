import React, { ReactNode } from 'react'

const NewsCard = (props: {children: ReactNode}) => {
  return (
    <div>{props.children}</div>
  )
}

export default NewsCard