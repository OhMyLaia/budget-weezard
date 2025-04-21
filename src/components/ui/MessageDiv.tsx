export function MessageDiv(props: {message: string, color: string, width?: string}) {
    return (
        <div
        className={`
            m-1
            text-sm
            text-${props.color}
            text-center
        `}
        >{`${props.message}`}</div>
    )
}