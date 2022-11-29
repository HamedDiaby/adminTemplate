import React, { useState } from "react";
import './styles.module.css';
import { TableProps } from "./interfaces";
import { Input } from "../Input";

export const Table:React.FC<TableProps> = ({
    thead,
    tbody,
    detailName,
    showDetails = false,
    onDetailsPress,
    onSearch,
})=> {

    const [search, setSearch] = useState<string>('');

    return (
        <div style={{flex: 1}}>
            <div 
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingRight: '30%',
                    paddingLeft: '30%'
                }}
            >
                <Input 
                    placeholder="Recherche..."
                    value={search}
                    inputType='text'
                    onchange={e=> {
                        setSearch(e);
                        onSearch(e);
                    }}
                />
            </div>
            <table>
                <tr>
                    {
                        thead.map((el, i)=> {
                            return (
                                <th key={i}
                                >{el}</th>
                            )
                        })
                    }
                </tr>
                {
                    tbody.map((el, i)=> {
                        return (
                            <tr
                                key={i}
                            >
                                {
                                    Object.entries(el).map((key, j)=> {
                                        if(key[0] !== 'id'){
                                            return (
                                                <td key={j}>{key[1]}</td>
                                            )
                                        }
                                    })
                                }
                                {
                                    showDetails && (
                                        <td 
                                            style={{
                                                fontWeight: 700,
                                                color: '#003566',
                                                cursor: 'pointer'
                                            }}
                                            onClick={()=> onDetailsPress(el, i)}
                                        >{detailName ? detailName : 'Détails'}</td>
                                    )
                                }
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}