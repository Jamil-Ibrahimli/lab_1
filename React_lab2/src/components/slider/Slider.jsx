import './slider.css'
import React, { useState } from 'react'
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";



const Slider = (props) => {

    const { imgDatas } = props

    const [count, setCount] = useState(0)



    // React.useEffect(() => {

    //     const timeout = setTimeout(() => setCount((next) => next >= imgDatas.length-1 ? next = 0 : next + 1), 1000)
    //     console.log(timeout)

    // })


    // Timer  has bags





    const setIncrement = () => {

        if (count >= imgDatas.length - 1) {

            setCount(0)

        } else {

            setCount((next) => next + 1)

        }


    }

    const setDecrement = () => {

        if (count <= 0) {

            setCount(imgDatas.length - 1)

        } else {

            setCount((prev) => prev - 1)

        }


    }

    return (
        <>

            <div className="slider_container">

                <div className="slider_buttons">
                    <FcPrevious className={`slider_prev `} onClick={setDecrement} />
                    <FcNext className='slider_next' onClick={setIncrement} />

                </div>

                <img src={imgDatas[count]} alt="image" className="slider_image" />

            </div>

        </>
    )
}

export default Slider