import { ModalType, Animation } from './types'

type PropsName = {
  type: keyof ModalType
  animationName: Animation
}

export const getStyle = (propsName: keyof PropsName, styles: any) => (
  props: any,
) => {
  if (props.typesStyle) {
    return props[propsName] && props.typesStyle[props[propsName]]
  }
  return props[propsName] && styles[props[propsName]]
}
