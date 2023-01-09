import React, { useState, useEffect } from 'react'


export default function Multiply(props) {
    console.log(props.backgroundColor)
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)

    function handleMultiply() {
        const answer = number1 * number2
        // console.log(answer)
        return answer
    }

    function handleNumber1Change(event) {
        const newNumber = event.target.value
        setNumber1(newNumber)
    }

    function handleNumber2Change(event) {
        const newNumber = event.target.value
        setNumber2(newNumber)
    }

    useEffect(() => {
        // console.log('Number 1 or number 2 has changed')
    }, [number1, number2])


    return (
        <div>
            <h1 style={{ color: props.backgroundColor }}>{props.headerName}</h1>
            <form>
                <input type='number' onChange={handleNumber1Change} />
                <input type='number' onChange={handleNumber2Change} />
                <button type='button' onClick={handleMultiply}>Multiply!</button>
            </form>
            <span>
            </span>
        </div >
    )

}