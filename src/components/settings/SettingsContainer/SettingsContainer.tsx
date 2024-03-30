import {memo, ReactNode} from 'react'
import s from './SettingsContainer.module.css'

type SettingsContainerPropsType = {
    children: ReactNode
}

export const SettingsContainer = memo(({children}: SettingsContainerPropsType) => <div
    className={s.setting}>{children}</div>)