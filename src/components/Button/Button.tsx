import { ButtonHTMLAttributes } from 'react'

type ButtonAppearance = 'filled' | 'outlined'
type ButtonSize = 'tablet-large' | 'desktop-large'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: ButtonAppearance
  size?: ButtonSize
}

export const Button = ({
  appearance = 'filled',
  size = 'tablet-large',
  children,
  ...props
}: IButton) => {
  return (
    <button className={`button button_${appearance} button_${size}`} {...props}>
      {children}
    </button>
  )
}
