import s from './SettingInput.module.css'
import {TYPES} from '../../../strings'
import {memo} from 'react'

type SettingInputPropsType = {
    value: number
    setValue: (value: number) => void
    error: boolean
}

export const SettingInput = memo(({
                                      value,
                                      setValue,
                                      error,
                                  }: SettingInputPropsType) => <input
    className={`${s.settingInput} ${error && s.settingInputError}`}
    type={TYPES.NUMBER}
    onChange={event => setValue(Number(event.currentTarget.value))}
    value={value}/>)