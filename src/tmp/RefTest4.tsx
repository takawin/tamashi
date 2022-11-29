import { forwardRef, useRef } from "react";

export const RefTest4 = () => {
    const ref = useRef();
    return (
        <>
            <ChildComponent ref={ref} />
        </>
    )
}


const ChildComponent = forwardRef<any>((props, ref) => {
    return (
        <button ref={ref}>
            <p>aaaa</p>
        </button>
    )
})