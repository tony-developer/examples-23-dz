import React, {useState} from "react";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log('RATING RENDERED')

let [value, setValue] = useState(4)
    return (
        <div>
            {/*<Star selected={value > 0}/><button onClick={()=>{setValue(1)}}>1</button>*/}
            <Star selected={value > 0} setValue={()=> {setValue(1) } } />
            <Star selected={value > 1} setValue={()=> {setValue(2) } } />
            <Star selected={value > 2} setValue={()=> {setValue(3) } } />
            <Star selected={value > 3} setValue={()=> {setValue(4) } } />
            <Star selected={value > 4} setValue={()=> {setValue(5) } } />
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
    // value:  1 | 2 | 3 | 4 | 5
}
const Star = (props: StarPropsType) => {
    // console.log('Star rendered')
       return <span onClick={()=>{props.setValue() } }>
           { props.selected ? <b>star</b > : "star"}
       </span>
}