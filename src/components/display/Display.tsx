import S from './Display.module.css'

type DisplayPropsType = {
    count: number
    maxCount: number
}

export const Display = ({count, maxCount}: DisplayPropsType) => <div className={S.display}>
    <span className={count === maxCount ? S.countLimit : undefined}>{count}</span>
</div>