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
                             }: SettingInputPropsType) => <input
    className={`${s.settingInput} ${!isValid && s.settingInputInvalid}`}
    type="number"
    onChange={(event) => setValue(Number(event.currentTarget.value))}
    value={value}
/>