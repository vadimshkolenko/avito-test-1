import React, { useState } from 'react'
import styles from './Slider.module.css'

const Slider = (props) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlideHandler = (event) => {
        if (event.currentTarget.dataset.direction === "next") {
            if (currentIndex === props.images.length - 1) {
                setCurrentIndex(0)
            } else {
                setCurrentIndex(currentIndex + 1)
            }
        } else {
            if (currentIndex === 0) {
                setCurrentIndex(props.images.length - 1)
            } else {
                setCurrentIndex(currentIndex - 1)
            }
        }
    }

    const onSlideHandler = (event) => {
        setCurrentIndex(+event.currentTarget.dataset.index)
    }

    return (
        <div className={styles.slides}>
            {props.images &&
                <div className={styles.slide}>
                    <button data-direction="prev" onClick={nextSlideHandler} className={styles.prev}>&#8592;</button>
                    <img src={props.images[currentIndex]} />
                    <button data-direction="next" onClick={nextSlideHandler} className={styles.next}>&#8594;</button>
                </div>
            }
            <div className={styles.images}>
                {props.images &&
                    props.images.map((image, index) => (
                        <img key={index} data-index={index} src={image} onMouseOver={onSlideHandler}/>
                    ))
                }
            </div>
        </div>
    )

}

export default Slider