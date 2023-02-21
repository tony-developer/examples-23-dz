import React from "react";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;

type RatingPropsType = {
    value: 0|1|2|3|4|5
}

export function Rating(props: RatingPropsType) {
    console.log('RATING RENDERED')

    if (props.value === 1) {
        return <div>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    }
    if (props.value === 2) {
        return <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    }
    if (props.value === 3) {
        return <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    }
    if (props.value === 4) {
        return <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
        </div>
    }
    if (props.value === 5) {
        return <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
        </div>
    }
    return <div>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
    </div>
}

type StarPropsType = {
    selected: boolean
}
const Star = (props: StarPropsType) => {
    console.log('Star rendered')

    if (props.selected) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }
    return (
        <span><b>Star </b></span>
    )
}