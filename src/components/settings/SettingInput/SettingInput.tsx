import s from './SettingInput.module.css'

type SettingInputPropsType = {
    value: number
    setValue: (value: number) => void
    isValid: boolean
};

export const SettingInput = ({
                                 value,
                                 setValue,
                                 isValid,
                             }: SettingInputPropsType) => {
    const onChangeHandler = (inputValue: string) => setValue(Number(inputValue))

    return <input
        className={`${s.settingInput} ${!isValid && s.settingInputInvalid}`}
        type="number"
        onChange={(event) => onChangeHandler(event.currentTarget.value)}
        value={value}
    />
}