import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log('ACCORDION RENDERED')
    if (props.collapsed === true) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>
        )
    }
}

type AccordionTitle = {
    title: string
}

const AccordionTitle = (props: AccordionTitle) => {
    console.log('AccordionTitle rendered')
    return (
        <h3>---{props.title}---</h3>
    )
}

const AccordionBody = () => {
    console.log('AccordionBody rendered')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;