import { signal } from "@preact/signals-core";

export const x = signal(1)

export default () => {

    return(
        <button
        onClick={()=>{
            x.value = x.peek() + 2
        }}
        >
            Increment
        </button>
    )
}