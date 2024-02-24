import {useState} from 'react'
import {Display} from '../display/Display'
import {Button} from '../button/Button'
import S from './Counter.module.css'

export const initialCount: number = 0

export const maxCount: number = 5

export const Counter = () => {
    let [count, setCount] = useState<number>(initialCount)

    const incrementHandler = () => setCount(++count)

    const resetHandler = () => setCount(initialCount)

    return <div className={S.counterContainer}>
        <Display count={count}/>
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