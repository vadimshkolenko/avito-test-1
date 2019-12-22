import React, { useEffect, useState } from 'react'
import styles from './List.module.css'
import * as axios from 'axios';
import { NavLink } from "react-router-dom";

const List = () => {

    const [items, setItems] = useState([])
    const [isLoaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://134.209.138.34/items')
            .then(response => {
                setItems(response.data)
                setLoaded(true)
            })
    })

    return (
        <div className={styles.items}>
            {
                isLoaded ?
                items.map(item =>
                    <div className={styles.item} key={item.id}>
                        <NavLink to={`/item/` + item.id} params={{ itemId: item.id }}>
                            <img src={item.previewImage} alt="" />
                        </NavLink>
                        <div className={styles.information}>
                            <NavLink to={`/item/` + item.id} params={{ itemId: item.id }} className={styles.title}>
                                {item.title}
                            </NavLink>
                            <div className={styles.price}>{item.price}</div>
                            <div className={styles.address}>{item.address}</div>
                        </div>
                    </div>
                ) : <div>Загрузка...</div>
            }
        </div>
    )
}

export default List