import * as React from 'react'
import Svg, { ColumnMajorTransformMatrix, Path } from 'react-native-svg'
import { TransformsStyle } from 'react-native/types'

import colors from '../../constants/colors'

const RightIArrow = ({
  width,
  height,
  onPress,
  color,
  transform,
}: React.SVGProps<SVGSVGElement> & {
  onPress?: () => void
  transform?: ColumnMajorTransformMatrix
  | string
  | TransformsStyle['transform'];
}): React.ReactElement => {
  return (
    <Svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      onPress={onPress}
      transform={transform}
    >
      <Path
        d="M10 7l5 5-5 5"
        stroke={color ?? colors.black}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default RightIArrow
