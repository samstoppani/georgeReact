import React from 'react'
import '../styles/components/Header.css'

export default function Header() {

    let a = 1
    const b = 2
    const c = a + b

    // console.log(c)

    function multiply(a, b) {
        return a * b
    }

    const d = multiply(b, c)

    // console.log(`d = ${d}`)


    return (
        <div className='header'>
            <h1>This is a header</h1>
        </div>
    )
}
