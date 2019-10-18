import { ModalType, Animation } from './atoms'

type PropsName = {
  type: keyof ModalType
  animation: Animation
}

export const getStyle = (propsName: keyof PropsName, styles: any) => (
  props: any,
) => {
  if (props.customTypes) {
    return props[propsName] && props.customTypes[props[propsName]]
  }
  return props[propsName] && styles[props[propsName]]
}
