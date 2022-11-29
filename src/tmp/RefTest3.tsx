import { useRef, useState } from "react";

export const RefTest3 = () => {
    const [inText, setInText] = useState("");
    return (
        <>
            <input type="text" value={inText} onInput={(e) => e.target instanceof HTMLInputElement ? setInText(e.target.value): console.log("Error")} />
            <ChildComponent />
        </>
    )
}

const ChildComponent = () => {
    const id = useRef(new Date().getTime());
    return (
        <>
            <p>{id.current}</p>
        </>
    )
}