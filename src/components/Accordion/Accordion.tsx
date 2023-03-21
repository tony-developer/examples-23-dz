import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange:() => void
}

function Accordion(props: AccordionPropsType) {
    console.log('ACCORDION RENDERED')
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}
            />

            {/*{props.collapsed === false && <AccordionBody/>}*/}
            {!props.collapsed  && <AccordionBody/>}
        </div>
    )
}

type AccordionTitle = {
    title: string
    onChange: ()=>void
}

const AccordionTitle = (props: AccordionTitle) => {
    console.log('AccordionTitle rendered')
    return (
        <h3 onClick={props.onChange}>---{props.title}---</h3>
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