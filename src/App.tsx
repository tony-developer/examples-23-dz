import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";

function App(props:any) {
    console.log('App rendered')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let[switchOn, setSwitchOn] =useState<boolean>(false)
    return (
        <div className="App">
            {/*<input type="text"/>*/}
            {/*<input type={"password"} value={'Yo!'} checked={true}/>*/}
            <div>Lorem  ipsum</div>
            <PageTitle title={'This is App component'}/>
            <PageTitle title={'Title 2'}/>
            {/*<OnOff  on={switchOn} onChange={(on) =>{setSwitchOn(on)}}/>*/}
            <OnOff  on={switchOn} onChange={setSwitchOn}/>
            <UncontrolledOnOff />
            {/*<OnOff />*/}
            {/*<OnOff />*/}
            <UncontrolledAccordion titleValue={'Menu'}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<UncontrolledAccordion titleValue={'Users'}/>*/}

            <UncontrolledRating />
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}
const PageTitle=(props: PageTitlePropsType)=> {
    return <h1>{props.title}</h1>
}

export default App;
