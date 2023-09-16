import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'

const SettingsIcon = ({
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
      viewBox="0 0 64 64"
      strokeWidth={5}
      stroke={color}
      fill={"none"}
      onPress={onPress}
    >
      <Circle cx={32} cy={18.14} r={11.14} />
      <Path d="M54.55 56.85A22.55 22.55 0 0032 34.3h0A22.55 22.55 0 009.45 56.85z" />
    </Svg>
  )
}

export default SettingsIcon
