import { ErrorMessageDivType } from '../../types/types'

export function ErrorMessageDiv(props: {error: string, explanation: string}) {
    return (
        <div
        className="
        text-sm
        text-red-600"
        >{`${props.error}${props.explanation}`}</div>
    )
}