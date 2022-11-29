import React, { useEffect, useState } from "react";
import styles from './styles.module.css';
import { InputSearchProps } from "./interfaces";
import { Input } from "../Input";

export const InputSearch:React.FC<InputSearchProps> = ({
    placeholder,
    list,
    disabled = false,
    selectedElement
})=> {

    const [search, setSearch] = useState<string>('');
    const [resultSearch, setResultSearch] = useState<string[]>([]);
    const [showSearch, setShowSearch] = useState<boolean>(false);

    useEffect(()=> {
        if(search){
            const result = list.filter(el=> el.toLowerCase().includes(search.toLowerCase()));
            setResultSearch(result);
        } else {
            setResultSearch([]);
        }
    }, [search]);

    return (
        <div>
            <Input 
                placeholder={placeholder}
                value={search}
                onchange={(e)=> {
                    setSearch(e);
                    selectedElement(e);
                    setShowSearch(true);
                }}
                inputType='text'
                disabled={disabled}
            />
            {
                (search && resultSearch.length === 0) && (
                    <h4 className={styles.textError}
                    >* Aucune ville trouver!</h4>
                )
            }
            {
                resultSearch && showSearch && (
                    <ul className={styles.listContainer}>
                        {
                            resultSearch.map((el, i)=> {
                                return (
                                    <li
                                        key={i}
                                        className={styles.listItem}
                                        onClick={()=> {
                                            setSearch(el);
                                            selectedElement(el);
                                            setShowSearch(false);
                                        }}
                                    >{el}</li>
                                )
                            })
                        }
                    </ul>
                )
            }
        </div>
    )
}