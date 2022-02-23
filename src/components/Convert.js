import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Convert =({Language,text}) => {
    const [translated ,settranslated]=useState('');
    const [debouncedText
         ,setdebouncedText]=useState(text);

    useEffect(()=>{
        const timerId =setTimeout(()=>{
         setdebouncedText(text);
        },500);
        return ()=>{
         clearTimeout(timerId);
        };
    },[text]);

    useEffect(() =>{
        const doTranslation = async() =>{
           const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',
           {},
           {
          params:{
              q:debouncedText,
              target:Language.value,
              key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
          },
        }
     );
     settranslated(data.data.translations[0].translatedText);
 };
   doTranslation();  
    },[Language,debouncedText]);

    return (
        <div>
            <h1 className='ui header'>{translated}</h1>
        </div>
    );
}

export default Convert;