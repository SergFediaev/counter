import {SettingInput} from '../SettingInput/SettingInput'
import s from './Setting.module.css'

type SettingPropsType = {
    name: string
    value: number
    setValue: (value: number) => void
    isValid: boolean
}

export const Setting = ({
                            name,
                            value,
                            setValue,
                            isValid,
                        }: SettingPropsType) => {
    return <div className={s.setting}>
        <span>{name}:</span>
        <SettingInput
            value={value}
            setValue={setValue}
            isValid={isValid}
        />
    </div>
}