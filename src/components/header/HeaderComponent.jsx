import {TasbiComponent} from "../tasbi/TasbiComponent.jsx";
import {useState} from "react";
import {header, heading, container, tasbiValue, resetBtn} from "./Header.module.css"

export const HeaderComponent = () => {
    const [resetCountValue, setResetCountValue] = useState(false)
    const [totalTasbi, setTotalTasbi] = useState(0)
    const resetTasbi = () => {
        setTotalTasbi(0)
        setResetCountValue(!resetCountValue)
    }
    const incrementTotalTasbi = (tasbi) => {
        setTotalTasbi(totalTasbi + tasbi)
    }
    return (
        <header className={header}>
            <h1 className={heading}>Total tasbi: <span className={tasbiValue}>{totalTasbi}</span></h1>
            <section className={container}>
                <TasbiComponent incrementTotalTasbi={incrementTotalTasbi} resetCountValue={resetCountValue} limit={33}
                                title="سبحان الله" btnText="Subhan-Allah"/>
                <TasbiComponent incrementTotalTasbi={incrementTotalTasbi} resetCountValue={resetCountValue} limit={33}
                                title="لْحَمْدُ لِلَّٰهِه"
                                btnText="Allhumdo-Lillah"/>
                <TasbiComponent incrementTotalTasbi={incrementTotalTasbi} resetCountValue={resetCountValue} limit={34}
                                title="الله أكبر" btnText="Allahu-Akbar"/>
            </section>
            <button onClick={resetTasbi} className={resetBtn}>Reset Tasbi</button>
        </header>
    )
}