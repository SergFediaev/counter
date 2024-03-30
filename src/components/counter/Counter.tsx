import {Display} from './display/Display'
import {Button} from '../buttons/Button/Button'
import s from './Counter.module.css'
import {ButtonsContainer} from '../buttons/ButtonsContainer/ButtonsContainer'
import {STATE, TEXT} from '../../strings'
import {memo} from 'react'
import {CounterType} from '../../store/counterTypes'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'
import {setCount} from '../../store/counterActions'

export const Counter = memo(() => {
    //region Local state.
    const {
        initialCount,
        incrementStep,
        maxCount,
        count,
        state,
    }: CounterType = useSelector<AppRootStateType, CounterType>(state => state.counter)
    const dispatch = useDispatch()
    const isIncrementDisabled = state !== STATE.NORMAL || count === maxCount
    const isResetDisabled = state !== STATE.NORMAL || initialCount === count
    //endregion

    //region Handlers.
    const incrementHandler = () => {
        if (count < maxCount) dispatch(setCount(count + incrementStep))
    }

    const resetHandler = () => dispatch(setCount(initialCount))
    //endregion

    //todo прокидывать пропсы ниже или вместо этого сразу доставить их useSelector'ом в компоненте?
    return <div className={s.counterContainer}>
        <Display count={count}
                 maxCount={maxCount}
                 state={state}/>
        <ButtonsContainer>
            <Button name={TEXT.INC}
                    disabled={isIncrementDisabled}
                    onClick={incrementHandler}/>
            <Button name={TEXT.RESET}
                    disabled={isResetDisabled}
                    onClick={resetHandler}/>
        </ButtonsContainer>
    </div>
})