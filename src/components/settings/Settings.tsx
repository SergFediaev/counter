import {ButtonsContainer} from '../buttons/ButtonsContainer/ButtonsContainer'
import {Button} from '../buttons/Button/Button'
import {SettingsContainer} from './SettingsContainer/SettingsContainer'
import s from './Settings.module.css'
import {Setting} from './Setting/Setting'
import {useEffect, useState} from 'react'
import {StateType} from '../../App'
import {STATE, TEXT} from '../../strings'

type SettingsPropsType = {
    initialCount: number
    setInitialCount: (initialCount: number) => void
    maxCount: number
    setMaxCount: (maxCount: number) => void
    state: StateType
    setState: (state: StateType) => void
}

export const Settings = ({
                             initialCount,
                             setInitialCount,
                             maxCount,
                             setMaxCount,
                             state,
                             setState,
                         }: SettingsPropsType) => {
    const [startValue, setStartValue] = useState(initialCount)
    const [maxValue, setMaxValue] = useState(maxCount)
    const error = maxValue <= startValue || startValue < 0

    const setSettingsHandler = () => {
        if (state === STATE.EDIT) {
            setInitialCount(startValue)
            setMaxCount(maxValue)
        }
    }

    useEffect(() => {
        if (!error) {
            if (startValue !== initialCount || maxValue !== maxCount) {
                setState(STATE.EDIT)
            } else if (startValue === initialCount && maxValue === maxCount) {
                setState(STATE.NORMAL)
            }
        } else setState(STATE.ERROR)
    }, [error, initialCount, maxCount, startValue, maxValue, setState])

    return <div className={s.settings}>
        <SettingsContainer child={
            <>
                <Setting
                    name={TEXT.START_VALUE}
                    value={startValue}
                    setValue={setStartValue}
                    isValid={!error}
                />
                <Setting
                    name={TEXT.MAX_VALUE}
                    value={maxValue}
                    setValue={setMaxValue}
                    isValid={!error}
                />
            </>
        }/>
        <ButtonsContainer child={<Button
            name={TEXT.SET}
            onClick={setSettingsHandler}
            disabled={error || state !== STATE.EDIT}
        />}/>
    </div>
}