import s from './Button.module.css'

type ButtonPropsType = {
    name: string
    disabled?: boolean
    onClick: () => void
}

export const Button = ({
                           name,
                           disabled,
                           onClick,
                       }: ButtonPropsType) => <button
    className={`${s.button} ${disabled && s.disabledButton}`}
    disabled={disabled}
    onClick={onClick}
>{name}</button>