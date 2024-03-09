import s from './Display.module.css'
import {StateValueType} from '../../../App'

type DisplayPropsType = {
    count: number
    maxCount: number
    state: StateValueType
}

export const Display = ({
                            count,
                            maxCount,
                            state,
                        }: DisplayPropsType) => <div className={s.display}>
    {state === 'normal' ? <span className={count === maxCount ? s.countLimit : undefined}>{count}</span> : <span
        className={`${s.info} ${state === 'error' && s.error}`}>{state === 'error' && 'Incorrect value!'}{state === 'edit' && 'enter values and press \'set\''}</span>}
</div>