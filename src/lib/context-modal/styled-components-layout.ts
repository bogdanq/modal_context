import { ModalType, Animation } from './typings'

type PropsName = {
  type: keyof ModalType
  animationName: Animation
}

export const getStyle = (propsName: keyof PropsName, styles: any) => (
  props: any,
) => {
  if (props.customTypeStyles) {
    return props[propsName] && props.customTypeStyles[props[propsName]]
  }

  return props[propsName] && styles[props[propsName]]
}

// type Props = {
//   type?: keyof ModalType
//   animationName?: any
//   customAnimation?: Animation
//   customStyle?: FlattenSimpleInterpolation
//   customTypeStyles?: keyof ModalType
//   propsName?: keyof PropsName
// }
