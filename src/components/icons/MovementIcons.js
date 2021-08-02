import React from 'react'
import { MOVEMENT_TYPE } from '../../constants/movementTypes'

export const MovementIcon = ({
	size = '100%',
	color = '#ccc',
	type,
	...props
}) => {
	switch(type) {
		case MOVEMENT_TYPE.STRAIGHT:
			return <StraightIcon {...props} size={size} color={color} />
		case MOVEMENT_TYPE.LEFT:
			return <LeftIcon {...props} size={size} color={color} />
		case MOVEMENT_TYPE.RIGHT:
			return <RightIcon {...props} size={size} color={color} />
		case MOVEMENT_TYPE.STRAIGHT_OR_LEFT:
			return <StraightLeftIcon {...props} size={size} color={color} />
		case MOVEMENT_TYPE.STRAIGHT_OR_RIGHT:
			return <StraightRightIcon {...props} size={size} color={color} />
		case MOVEMENT_TYPE.LEFT_OR_RIGHT:
			return <LeftRightIcon {...props} size={size} color={color} />
		case MOVEMENT_TYPE.WILD:
			return <WildIcon {...props} size={size} color={color} />
		case MOVEMENT_TYPE.LANE_CHANGE:
			return <LaneChangeIcon {...props} size={size} color={color} />
		case MOVEMENT_TYPE.DOUBLE_LEFT:
			return <DoubleLeftIcon {...props} size={size} color={color} />
		case MOVEMENT_TYPE.DOUBLE_RIGHT:
			return <DoubleRightIcon {...props} size={size} color={color} />
		case MOVEMENT_TYPE.DOUBLE_STRAIGHT:
			return <DoubleStraightIcon {...props} size={size} color={color} />
	}
	return null
}

export const LeftIcon = ({size = '100%', color = '#fff'}) => (
	<svg version="1.1" id="Layer_1"x="0px" y="0px" viewBox="0 0 60 60" style={{height: size, width: size}}>
		<path style={{fill: color}} d="M0,32.7v-5.4c3.3,0.3,30.9-3.6,39.9-17.2l-4.2-2.7L49.9,0l-0.6,16l-4.5-2.8C34,31,0,32.7,0,32.7z"/>
	</svg>
)

export const RightIcon = ({size = '100%', color = '#fff'}) => (
	<svg version="1.1" id="Layer_1"x="0px" y="0px" viewBox="0 0 60 60" style={{height: size, width: size}}>
		<path style={{fill: color}} d="M0,27.3v5.4c3.3-0.3,30.9,3.6,39.9,17.2l-4.2,2.7L49.9,60l-0.6-16l-4.5,2.8C34,29,0,27.3,0,27.3z"/>
	</svg>
)

export const StraightIcon = ({size = '100%', color = '#fff'}) => (
	<svg version="1.1" id="Layer_1"x="0px" y="0px" viewBox="0 0 60 60" style={{height: size, width: size}}>
		<polygon style={{fill: color}} points="46.1,27.3 0,27.3 0,32.7 46.1,32.7 46.1,38 60,30 46.1,21.9"/>
	</svg>
)

export const StraightLeftIcon = ({size = '100%', color = '#fff', leftColor, straightColor}) => (
	<svg version="1.1" id="Layer_1"x="0px" y="0px" viewBox="0 0 60 60" style={{height: size, width: size}}>
		<path style={{fill: leftColor || color}} d="M0,32.7v-5.4c3.3,0.3,30.9-3.6,39.9-17.2l-4.2-2.7L49.9,0l-0.6,16l-4.5-2.8C34,31,0,32.7,0,32.7z"/>
		<polygon style={{fill: straightColor || color}} points="46.1,27.3 0,27.3 0,32.7 46.1,32.7 46.1,38 60,30 46.1,22"/>
	</svg>
)

export const StraightRightIcon = ({size = '100%', color = '#fff', rightColor, straightColor}) => (
	<svg version="1.1" id="Layer_1"x="0px" y="0px" viewBox="0 0 60 60" style={{height: size, width: size}}>
		<path style={{fill: rightColor || color}} d="M0,27.3v5.4c3.3-0.3,30.9,3.6,40,17.2l-4.2,2.7L50,60l-0.6-16l-4.5,2.8C34.1,29,0,27.3,0,27.3z"/>
		<polygon style={{fill: straightColor || color}} points="46.1,27.3 0,27.3 0,32.7 46.1,32.7 46.1,38 60,30 46.1,22"/>
	</svg>
)

export const LeftRightIcon = ({size = '100%', color = '#fff', leftColor, rightColor}) => (
	<svg version="1.1" id="Layer_1"x="0px" y="0px" viewBox="0 0 60 60" style={{height: size, width: size}}>
		<path style={{fill: leftColor || color}} d="M0,27.3v5.4c3.3-0.3,30.9,3.6,40,17.2l-4.2,2.7L50,60l-0.6-16l-4.5,2.8C34.1,29,0,27.3,0,27.3z"/>
		<path style={{fill: rightColor || color}} d="M0,32.7v-5.4c3.3,0.3,30.9-3.6,40-17.2l-4.2-2.7L50,0l-0.6,16l-4.5-2.8C34.1,31,0,32.7,0,32.7z"/>
	</svg>
)

export const WildIcon = ({size = '100%', color = '#fff', leftColor, rightColor, straightColor}) => (
	<svg version="1.1" id="Layer_1"x="0px" y="0px" viewBox="0 0 60 60" style={{height: size, width: size}}>
		<path style={{fill: leftColor || color}} d="M0,27.3v5.4c3.3-0.3,30.9,3.6,40,17.2l-4.2,2.7L50,60l-0.6-16l-4.5,2.8C34.1,29,0,27.3,0,27.3z"/>
		<path style={{fill: rightColor || color}} d="M0,32.7v-5.4c3.3,0.3,30.9-3.6,40-17.2l-4.2-2.7L50,0l-0.6,16l-4.5-2.8C34.1,31,0,32.7,0,32.7z"/>
		<polygon style={{fill: straightColor || color}} points="46.1,27.3 0,27.3 0,32.7 46.1,32.7 46.1,38 60,30 46.1,22"/>
	</svg>
)
export const DoubleStraightIcon = ({size = '100%', color = '#fff', straightColor}) => (
	<svg version="1.1" id="Layer_1"x="0px" y="0px" viewBox="0 0 60 60" style={{height: size, width: size}}>
		<polygon style={{fill: color}} points="23.9,27.3 0,27.3 0,32.7 23.9,32.7 23.9,38 37.7,30 23.9,21.9"/>
		<polygon style={{fill: straightColor || color}} points="60,30 46.1,21.9 46.1,27.3 35.5,27.3 40.2,30 35.5,32.7 46.1,32.7 46.1,38"/>
	</svg>
)
export const DoubleLeftIcon = ({size = '100%', color = '#fff', leftColor}) => (
	<svg version="1.1" id="Layer_1"x="0px" y="0px" viewBox="0 0 60 60" style={{height: size, width: size}}>
		<path style={{fill: color}} d="M16.9,19.2l0.4,0.8l1.7,3.6c-8.9,2.9-17.3,3.9-19,3.8v5.4c0,0,10.4-0.5,21.5-4l0.1,0.2l2.3,4.8l9.1-13.2
		L16.9,19.2z"/>
		<path style={{fill: leftColor || color}} d="M35.7,7.4l4.2,2.7c-2.4,3.6-6.1,6.5-10.3,8.9l5.6,0.1l-3.2,5.3c5.2-2.7,9.9-6.4,12.8-11.2l4.5,2.8l0.6-16
		L35.7,7.4z"/>	
	</svg>
)
export const DoubleRightIcon = ({size = '100%', color = '#fff', rightColor}) => (
	<svg version="1.1" id="Layer_1"x="0px" y="0px" viewBox="0 0 60 60" style={{height: size, width: size}}>
		<path style={{fill: color}} d="M16.9,40.8l0.4-0.8l1.7-3.6c-8.9-2.9-17.3-3.9-19-3.8v-5.4c0,0,10.4,0.5,21.5,4l0.1-0.2l2.3-4.8l9.1,13.2
		L16.9,40.8z"/>
		<path style={{fill: rightColor || color}} d="M35.7,52.6l4.2-2.7c-2.4-3.6-6.1-6.5-10.3-8.9l5.6-0.1l-3.2-5.3c5.2,2.7,9.9,6.4,12.8,11.2l4.5-2.8l0.6,16
		L35.7,52.6z"/>
	</svg>
)

export const LaneChangeIcon = ({size = '100%', color = '#fff'}) => (
	<svg version="1.1" id="Layer_1"x="0px" y="0px" viewBox="0 0 60 60" style={{height: size, width: size}}>
		<polygon style={{fill: color}} points="32.6,56.6 25,48.2 21.9,48.2 32.6,60 43.3,48.2 40.2,48.2"/>
		<polygon style={{fill: color}} points="32.6,48.6 25,40.1 21.9,40.1 32.6,51.9 43.3,40.1 40.2,40.1"/>
		<polygon style={{fill: color}} points="32.6,3.6 40.2,12.3 43.3,12.3 32.6,0 21.9,12.3 25,12.3"/>
		<polygon style={{fill: color}} points="32.6,11.9 40.2,20.7 43.3,20.7 32.6,8.4 21.9,20.7 25,20.7"/>
	</svg>
)