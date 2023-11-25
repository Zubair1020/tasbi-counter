import {useEffect, useState} from "react";
import {tasbiContainer, tasbiHeading, tasbiSubHeading, tasbiButton} from "./Tasbi.module.css"

export const TasbiComponent = ({limit, title, btnText, resetCountValue, incrementTotalTasbi}) => {
    const [count, setCount] = useState(0)
    useEffect(() => setCount(0), [resetCountValue]);
    return (
        <>
            <div className={tasbiContainer}>
                <h1 className={tasbiHeading}>{title}</h1>
                <h2 className={tasbiSubHeading}>Tasbi Count: {count}</h2>
                <button onClick={() => {
                    if (count < limit) {
                        setCount(count + 1)
                        incrementTotalTasbi(1)
                    }
                }} className={tasbiButton}>
                    {btnText}
                </button>
            </div>

        </>
    )
}
