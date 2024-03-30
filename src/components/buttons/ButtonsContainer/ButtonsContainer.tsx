import s from './Buttons.module.css'
import {memo, ReactNode} from 'react'

type ButtonsContainerPropsType = {
    children: ReactNode
}

export const ButtonsContainer = memo(({children}: ButtonsContainerPropsType) => <div
    className={s.buttonContainer}>{children}</div>)