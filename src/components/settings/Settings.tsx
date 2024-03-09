import {ButtonsContainer} from '../buttons/ButtonsContainer/ButtonsContainer'
import {Button} from '../buttons/Button/Button'
import {SettingsContainer} from './SettingsContainer/SettingsContainer'
import s from './Settings.module.css'
import {Setting} from './Setting/Setting'
import {StateValueType} from '../../App'
import {useEffect, useState} from 'react'

type SettingsPropsType = {
    initialCount: number
    setInitialCount: (initialCount: number) => void
    maxCount: number
    setMaxCount: (maxCount: number) => void
    state: StateValueType
    setState: (state: StateValueType) => void
}

export const Settings = ({
                             initialCount,
                             setInitialCount,
                             maxCount,
                             setMaxCount,
                             state,
                             setState,
                         }: SettingsPropsType) => {
    const [isStartValueValid, setStartValueValid] = useState(true)

    const [startValue, setStartValue] = useState(initialCount)

    const setStartValueHandler = (newStartValue: number) => {
        if (newStartValue >= maxValue || newStartValue < 0) {
            setStartValueValid(false)
        } else {
            setStartValueValid(true)
        }

        setStartValue(newStartValue)
    }

    const [maxValue, setMaxValue] = useState(maxCount)

    const setMaxValueHandler = (newMaxValue: number) => {
        if (newMaxValue <= startValue || newMaxValue < 1) {
            setMaxValueValid(false)
        } else {
            setMaxValueValid(true)
        }

        setMaxValue(newMaxValue)
    }

    const [isMaxValueValid, setMaxValueValid] = useState(true)

    const setSettingsHandler = () => {
        if (state === 'edit' && isStartValueValid && isMaxValueValid) {
            setInitialCount(startValue)
            setMaxCount(maxValue)
        }
    }

    useEffect(() => {
        if (isStartValueValid && isMaxValueValid) {
            if (startValue !== initialCount || maxValue !== maxCount) {
                setState('edit')
            } else if (startValue === initialCount && maxValue === maxCount) {
                setState('normal')
            }
        } else {
            setState('error')
        }
    }, [initialCount, maxCount, startValue, maxValue, isStartValueValid, isMaxValueValid, setState])

    return <div className={s.settings}>
        <SettingsContainer child={
            <>
                <Setting
                    name="Start value"
                    value={startValue}
                    setValue={setStartValueHandler}
                    isValid={isStartValueValid}
                />
                <Setting
                    name="Max value"
                    value={maxValue}
                    setValue={setMaxValueHandler}
                    isValid={isMaxValueValid}
                />
            </>
        }/>
        <ButtonsContainer child={<Button
            name="set"
            onClick={setSettingsHandler}
            disabled={!isStartValueValid || !isMaxValueValid || state !== 'edit'}
        />}/>
    </div>
}