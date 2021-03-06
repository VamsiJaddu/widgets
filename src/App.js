import React,{useState} from 'react';
import Accordion from './components/Accordion';
import Search1 from "./components/Search1";
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items =[
    {
        title:"What is React ? ",
        content:'React is a front javascript framework'
    },
    {
        title:"Why use react?",
        content:"React is a favorite JS Library among engineers"
    },
    {
        title:'How do you use React?',
        content:"You use React by creating components "
    }
];

const options =[
    {
        label:'The Color Red',
        value:'red'
    },
    {
        label:'The Color Black',
        value:'black'
    },
    { 
        label:'The Color Green',
        value:'green'
    },
    {
        label:'A shade of Blue',
        value:'blue'
    }
];

 /*const showAccordion = () => {
     if(window.location.pathname ==='/'){
         return <Accordion items ={items} />;
     }
 };

 const showList = () => {
    if(window.location.pathname === '/list'){
        return <Search1 />;
    }
};

const showDropdown = () => {
    if(window.location.pathname === '/dropdown'){
        return <Dropdown />;
    }
};

const showTranslate = () => {
    if(window.location.pathname === '/translate'){
        return <Translate />;
    }
}

const showComponent = (route , component) =>{
    return window.location.pathname === route
    ? component
    : null;
};*/


const App = () => {
    const [selected,setSelected] = useState(options[0]);
 return(
      <div>
        <Header />
       <Route path ="/">
          <Accordion items={items} />
       </Route>
       <Route path ="/list">
           <Search1 />
       </Route>
       <Route path ="/dropdown">
            <Dropdown 
           label="select a color"
           options={options} 
           selected={selected}
           onSelectedChange={setSelected}/>
       </Route>
       <Route path ="/translate">
           <Translate />
       </Route>

      </div>
 );
};

 
export default App;
 