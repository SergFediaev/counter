import {useState} from 'react'
import {Display} from '../display/Display'
import {Button} from '../button/Button'
import S from './Counter.module.css'

export const Counter = () => {
    const initialCount: number = 0
    const incrementStep: number = 1
    const maxCount: number = 5
    const [count, setCount] = useState<number>(initialCount)

    const incrementHandler = () => {
        if (count < maxCount) setCount(count + incrementStep)
    }

    const resetHandler = () => setCount(initialCount)

    return <div className={S.counterContainer}>
        <Display count={count} maxCount={maxCount}/>
        <div className={S.buttonContainer}>
            <Button
                name="inc"
                disabled={count === maxCount}
                clickCallback={incrementHandler}
            />
            <Button
                name="reset"
                disabled={count === initialCount}
                clickCallback={resetHandler}
            />
        </div>
    </div>
}