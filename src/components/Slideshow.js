import React,{useState} from 'react'

const Slideshow = () => {

    const [Count,setCount] = useState(0)

const incrementCounter = () => {
setCount(Count +1)
}

const resetCounter = () => {
    setCount(0)
}

const decrementCounter = () => {
setCount(Count - 1)
}

    return (
        <div>
            <button onClick={resetCounter}>Restart</button>
        {Count<=0 ?  <button onClick={decrementCounter} disabled>previous</button> : <button onClick={decrementCounter} >previous</button>}
           {Count>=4 ? <button onClick={incrementCounter} disabled>next</button> : <button onClick={incrementCounter}>next</button>}
            <p>
                Count - {Count}
            </p>           
            {Count === 1 ? <p>First Window</p> : ""}
            {Count === 2 ? <p>Second Window</p> : ""}
            {Count === 3 ? <p> Third window</p> : ""}
            {Count >=4 ? <p>You have reaached the End of the slie</p> : ""}
        </div>
    )
}

export default Slideshow
