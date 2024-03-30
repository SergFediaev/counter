import {ButtonsContainer} from '../buttons/ButtonsContainer/ButtonsContainer'
import {Button} from '../buttons/Button/Button'
import {SettingsContainer} from './SettingsContainer/SettingsContainer'
import s from './Settings.module.css'
import {Setting} from './Setting/Setting'
import {memo, useEffect, useState} from 'react'
import {STATE, TEXT} from '../../strings'
import {CounterType} from '../../store/counterTypes'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../store/store'
import {setSettings, setState} from '../../store/counterActions'

export const Settings = memo(() => {
    //region Local state.
    const {
        initialCount,
        maxCount,
        state,
    }: CounterType = useSelector<AppRootStateType, CounterType>(state => state.counter)
    const dispatch = useDispatch()
    const [startValue, setStartValue] = useState(initialCount)
    const [maxValue, setMaxValue] = useState(maxCount)
    const error = maxValue <= startValue || startValue < 0
    const isSetSettingsDisabled = error || state !== STATE.EDIT

    useEffect(() => {
        if (!error) {
            if (startValue !== initialCount || maxValue !== maxCount) {
                dispatch(setState(STATE.EDIT))
            } else if (startValue === initialCount && maxValue === maxCount) {
                dispatch(setState(STATE.NORMAL))
            }
        } else dispatch(setState(STATE.ERROR))
    }, [dispatch, error, initialCount, maxCount, maxValue, startValue])
    //endregion

    const setSettingsHandler = () => {
        if (state === STATE.EDIT) dispatch(setSettings(startValue, maxValue))
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