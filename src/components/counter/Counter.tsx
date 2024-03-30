import {Display} from './display/Display'
import {Button} from '../buttons/Button/Button'
import s from './Counter.module.css'
import {ButtonsContainer} from '../buttons/ButtonsContainer/ButtonsContainer'
import {STATE, TEXT} from '../../strings'
import {memo} from 'react'
import {CounterType} from '../../store/counterTypes'

type CounterPropsType = {
    setCount: (count: number) => void
    counter: CounterType
}

export const Counter = memo(({
                                 counter: {initialCount, incrementStep, maxCount, count, state},
                                 setCount,
                             }: CounterPropsType) => {
    const incrementHandler = () => {
        if (count < maxCount) setCount(count + incrementStep)
    }

    const resetHandler = () => setCount(initialCount)

    const isIncrementDisabled = state !== STATE.NORMAL || count === maxCount
    const isResetDisabled = state !== STATE.NORMAL || initialCount === count

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