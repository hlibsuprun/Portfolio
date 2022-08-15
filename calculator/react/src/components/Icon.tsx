import React from 'react'

import icons from '../assets/icons.svg'

type IconProps = {
  className?: string
  iconName: string
}

export const Icon = (props: IconProps): JSX.Element => {
  const { className, iconName } = props

  return (
    <svg className={className}>
      <use href={`${icons}#${iconName}`} />
    </svg>
  )
}
