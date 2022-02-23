import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Search = () =>{
   //default error not come in console  
   
   const [term ,setTerm]=useState("programming");
    
   // const [term ,setTerm]=useState('');//error comes

     const [results,setResults]=useState([]);
     
     useEffect(()=>{
        const search = async() =>{
        const { data } = await axios.get("https://en.wikipedia.org/w/api.php",{
             params:{
                 action:'query',
                 list:'search',
                 origin:'*',
                 format:'json',
                 srsearch:term
               }    
             });
             setResults(data.query.search);
         };search();
         //if empty string is useState then to skip error in console
         /*if(term){
             search();
         }*/
        
        
        /* 2. (async () =>{
            await axios.get("gsvacvsyu");
        })();*/
     

        //helper function
        /* 3.axios.get('ghvvwvdyu')
        .then((response)=>{
         console.log(response.data);
        });*/
     },[term]);


     const renderedResults = results.map((result) =>{
         return(
           <div key={result.pageid} className="item">
               <div className="right floated content">
                   <a
                    className="ui button"
                     href ={'https://en.wikipedia.org?curid=${result.pageid}'}
                   >
                   Go
                   </a>
               </div>
               <div className="content">
                   <div className="header">{result.title}</div>
                   <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
               </div>
           </div>
         );
        }); 
   return (
       <div>
            <div className="ui form">
                <div className="field">
                    <label>Search ...</label>
                    <input className="input" type ="text" onChange={(e)=>setTerm(e.target.value)}/>
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
       </div>
    );
};

export default Search;
