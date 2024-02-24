import S from './Button.module.css'

type ButtonPropsType = {
    name: string
    disabled: boolean
    clickCallback: () => void
}

export const Button = ({name, disabled, clickCallback}: ButtonPropsType) => <button
    className={`${S.button} ${disabled ? S.disabledButton : undefined}`}
    disabled={disabled}
    onClick={clickCallback}
>{name}</button>