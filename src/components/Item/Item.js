import React, { useEffect, useState } from 'react'
import styles from './Item.module.css'
import * as axios from 'axios';
import Slider from '../Slider'

const Item = (props) => {

    const [item, setItem] = useState([])
    const [images, setImages] = useState([])

    useEffect(() => {
        const itemId = props.match.params.itemId

        axios.get(`http://134.209.138.34/item/${itemId}`)
            .then(response => {
                setItem(response.data[0])
                setImages(response.data[0].images)
            })
    }, [])

    return (
        <div className={styles.item}>
            <div className={styles.titleAndPrice}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.price}>{item.price}</div>
            </div>
            <Slider images={images}/>
            <div><b>Адрес:</b> {item.address}</div>
            <div><b>Продавец:</b> {item.sellerName}</div>
            <div>{item.description}</div>
        </div>
    )
}

export default Item