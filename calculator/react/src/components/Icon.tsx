import React from 'nextjs'

import icons from '../assets/icons.svg'

type IconProps = {
  iconName: string
}

export const Icon = (props: IconProps): JSX.Element => {
  const { iconName } = props

  return (
    <svg id={iconName} data-testid={iconName}>
      <use href={`${icons}#${iconName}`} />
    </svg>
  )
}
