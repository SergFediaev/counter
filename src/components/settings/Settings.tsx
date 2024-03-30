import {ButtonsContainer} from '../buttons/ButtonsContainer/ButtonsContainer'
import {Button} from '../buttons/Button/Button'
import {SettingsContainer} from './SettingsContainer/SettingsContainer'
import s from './Settings.module.css'
import {Setting} from './Setting/Setting'
import {memo, useEffect, useState} from 'react'
import {STATE, TEXT} from '../../strings'
import {CounterType, StateType} from '../../store/counterTypes'

type SettingsPropsType = {
    counter: CounterType
    setSettings: (initialCount: number, maxCount: number) => void
    setState: (state: StateType) => void
}

export const Settings = memo(({
                                  counter: {initialCount, maxCount, state},
                                  setSettings,
                                  setState,
                              }: SettingsPropsType) => {
    //region Local state.
    const [startValue, setStartValue] = useState(initialCount)
    const [maxValue, setMaxValue] = useState(maxCount)
    const error = maxValue <= startValue || startValue < 0
    const isSetSettingsDisabled = error || state !== STATE.EDIT

    useEffect(() => {
        if (!error) {
            if (startValue !== initialCount || maxValue !== maxCount) {
                setState(STATE.EDIT)
            } else if (startValue === initialCount && maxValue === maxCount) {
                setState(STATE.NORMAL)
            }
        } else setState(STATE.ERROR)
    }, [error, initialCount, maxCount, maxValue, startValue])
    //endregion

    const setSettingsHandler = () => {
        if (state === STATE.EDIT) setSettings(startValue, maxValue)
    }

    return <div className={s.settings}>
        <SettingsContainer>
            <Setting name={TEXT.START_VALUE}
                     value={startValue}
                     setValue={setStartValue}
                     error={error}/>
            <Setting name={TEXT.MAX_VALUE}
                     value={maxValue}
                     setValue={setMaxValue}
                     error={error}/>
        </SettingsContainer>
        <ButtonsContainer>
            <Button name={TEXT.SET}
                    onClick={setSettingsHandler}
                    disabled={isSetSettingsDisabled}/>
        </ButtonsContainer>
    </div>
})