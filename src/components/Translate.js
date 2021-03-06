//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
// API google translate

import React,{ useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
     label:'Afrikaans',
     value:'af'
    },
    {
     label:'Arabic',
     value:'ar'
    },
    {
     label:'Hindi',
     value:'hi'
    }
];

const Translate = () => {
    const [Language,setLanguage]=useState(options[0]);
    const [text,setText]=useState('');

   return(
       <div>
           <div className='ui form'>
               <div className="field">
                   <label>EnterText</label>
                   <input value ={text} onChange={(e) => setText(e.target.value)}/>
               </div>
            </div>
           
           <Dropdown label="Select a Language"  selected={Language} onSelectedChange={setLanguage} options = {options}  />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} Language={Language}/>
       </div>
   );
};

export  default Translate;