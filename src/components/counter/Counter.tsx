import {Display} from './display/Display'
import {Button} from '../buttons/Button/Button'
import s from './Counter.module.css'
import {ButtonsContainer} from '../buttons/ButtonsContainer/ButtonsContainer'
import {StateValueType} from '../../App'

type CounterPropsType = {
    initialCount: number
    count: number
    setCount: (count: number) => void
    incrementStep: number
    maxCount: number
    state: StateValueType
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
                    name="inc"
                    disabled={state !== 'normal' || count === maxCount}
                    onClick={incrementHandler}
                />
                <Button
                    name="reset"
                    disabled={state !== 'normal' || initialCount === count}
                    onClick={resetHandler}
                />
            </>
        }/>
    </div>
}