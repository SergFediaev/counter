import {Display} from './display/Display'
import {Button} from '../buttons/Button/Button'
import s from './Counter.module.css'
import {ButtonsContainer} from '../buttons/ButtonsContainer/ButtonsContainer'
import {StateType} from '../../App'
import {STATE, TEXT} from '../../strings'

type CounterPropsType = {
    initialCount: number
    count: number
    setCount: (count: number) => void
    incrementStep: number
    maxCount: number
    state: StateType
}

export const Counter = ({
                            initialCount,
                            count,
                            setCount,
                            incrementStep,
                            maxCount,
                            state,
                        }: CounterPropsType) => {
    const incrementHandler = () => {
        if (count < maxCount) setCount(count + incrementStep)
    }

    const resetHandler = () => setCount(initialCount)

    return <div className={s.counterContainer}>
        <Display
            count={count}
            maxCount={maxCount}
            state={state}
        />
        <ButtonsContainer child={
            <>
                <Button
                    name={TEXT.INC}
                    disabled={state !== STATE.NORMAL || count === maxCount}
                    onClick={incrementHandler}
                />
                <Button
                    name={TEXT.RESET}
                    disabled={state !== STATE.NORMAL || initialCount === count}
                    onClick={resetHandler}
                />
            </>
        }/>
    </div>
}