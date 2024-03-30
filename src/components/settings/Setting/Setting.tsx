import {SettingInput} from '../SettingInput/SettingInput'
import s from './Setting.module.css'
import {memo} from 'react'

type SettingPropsType = {
    name: string
    value: number
    setValue: (value: number) => void
    error: boolean
}

export const Setting = memo(({
                                 name,
                                 value,
                                 setValue,
                                 error,
                             }: SettingPropsType) => <div className={s.setting}>
    <span>{name}:</span>
    <SettingInput value={value}
                  setValue={setValue}
                  error={error}/>
</div>)