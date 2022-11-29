import React from "react";
import styles from './styles.module.css';
import { TabDivProps } from "./interfaces";

export const TabDiv:React.FC<TabDivProps> = ({
    tabsLabel,
    tabsContent,
    activeTab,
    onChangeTab
})=> {
    return (
        <div>
            <div className={styles.tabsLabelsContainer}>
                {
                    tabsLabel.map((el, i)=> {
                        return (
                            <div 
                                key={i}
                                className={i === activeTab ? styles.activeTab 
                                    : styles.inActiveTab}
                                onClick={()=> onChangeTab(i)}
                            >
                                <p>{el}</p>
                            </div>
                        )
                    })
                }
            </div>
            {
                tabsContent.map((el, i)=> {
                    if(i === activeTab){
                        return (
                            <div key={i}>
                                {el}
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}