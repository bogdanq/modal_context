import { ModalType } from './atoms'

type PropsName = {
  type: keyof ModalType
}

export const getStyle = (propsName: keyof PropsName, styles: any) => (
  props: any,
) => {
  if (props.customTypes) {
    return props[propsName] && props.customTypes[props[propsName]]
  }
  return props[propsName] && styles[props[propsName]]
}
