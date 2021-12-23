import { ActionButton } from 'components/ui/Button/styled'

const typeMap = {
  action: ActionButton,
}

interface ButtonProps extends Omit<JSX.IntrinsicElements['button'], 'ref' | 'type'> {
  type: keyof typeof typeMap
  htmlType?: JSX.IntrinsicElements['button']['type']
}

export default function Button({ type, htmlType, ...buttonProps }: ButtonProps) {
  const ButtonComponent = typeMap[type]

  return <ButtonComponent type={htmlType} {...buttonProps} />
}
