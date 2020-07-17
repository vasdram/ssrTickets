import React from "react"
import styles from "./MainLayout.module.scss"
import Header from "../Header/Header"


const MainLayout: React.FC = ({children}) => {
    return (
    <div className={styles.mainLayout}>
        <main>
            {children}
        </main>
    </div>
    )
}

 export default MainLayout