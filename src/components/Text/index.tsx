import React from 'react'

interface ITextProps {
    size?:number
    children?: string
}

export default function Text({size,children}:ITextProps) {
  return (
    <p className={`size-${size}`}>{children}</p>
  )
}
