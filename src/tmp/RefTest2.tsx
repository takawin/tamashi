import { useState } from "react"

export const RefTest2 = () => {
    const [inText, setInText] = useState("");
    return (
        <>
            <input type="text" value={inText} onInput={(e) => e.target instanceof HTMLInputElement ? setInText(e.target.value): console.log("Error")} />
            <ChildComponent />
        </>
    )
}

const ChildComponent = () => {
    const id = new Date().getTime();
    return (
        <>
            <p>{id}</p>
        </>
    )
}