import {ReactNode} from 'react'
import s from './SettingsContainer.module.css'

type SettingsContainerPropsType = {
    child: ReactNode
}

export const SettingsContainer = ({child}: SettingsContainerPropsType) => <div className={s.setting}>{child}</div>