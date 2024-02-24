import S from './Display.module.css'

type DisplayPropsType = {
    count: number
}

export const Display = ({count}: DisplayPropsType) => <div className={S.display}>
    <span className={count === 5 ? S.countLimit : undefined}>{count}</span>
</div>