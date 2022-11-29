import { useRef } from "react";

export const RefTest1 = () => {
    const ref = useRef<any>(null);
    return (
        <>
            <button onClick={() => {
                ref.current.focus();
            }}>
                focus
            </button>
            <button onClick={() => {
                ref.current.blur();
            }}>
                blur
            </button>
            <button onClick={() => {
                ref.current.value = "mokotan";
            }}>
                fill
            </button>
            <input type="text" ref={ref} />
        </>
    )
}