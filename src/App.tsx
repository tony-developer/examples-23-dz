import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    console.log('App rendered')
    return (
        <div className="App">
            {/*<input type="text"/>*/}
            {/*<input type={"password"} value={'Yo!'} checked={true}/>*/}
            <PageTitle title={'This is App component'}/>
            <PageTitle title={'Title 2'}/>
            <Rating value={3}/>
            <Accordion titleValue={'Accordion1'} collapsed={true}/>
            <Accordion titleValue={'Accordion2'} collapsed={false}/>
            <Rating value={4}/>
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
