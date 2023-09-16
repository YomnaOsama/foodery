import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const SearchIcon = ({
  width,
  height,
  onPress,
  color,
}: React.SVGProps<SVGSVGElement> & {
  onPress?: () => void
}): React.ReactElement => {
  return (
    <Svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      onPress={onPress}
    >
      <Path
        d="M14.954 14.946L21 21m-4-11a7 7 0 11-14 0 7 7 0 0114 0z"
        stroke={color ?? "#9b9ca2"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SearchIcon
