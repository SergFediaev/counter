import s from './Buttons.module.css'
import {ReactNode} from 'react'

type ButtonsContainerPropsType = {
    child: ReactNode
}

export const ButtonsContainer = ({child}: ButtonsContainerPropsType) => <div className={s.buttonContainer}>{child}</div>