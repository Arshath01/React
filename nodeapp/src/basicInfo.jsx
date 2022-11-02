import React,{useState} from 'react';

const UserInfo = () => {
   const [username,setUsername] = useState ('') ;
   const [password,setPassword] = useState ('') ;
   const [style,setStyle] = useState({
      container : [' p-5 border w-50 '],
      inlineStyle : { 
         margin: 'auto', 
         marginTop : '80px' ,
       } ,
      form : 'form-control',
      button : 'btn btn-primary ' ,
      group : [
         'input-group',            //group[0]
         'input-group-prepend',   //group[1]
         'input-group-text'      //group[2]
      ] ,
   }) ;
   function handleUser(e) {
      setUsername(e.target.value)
   }
   function handlePassword (e) {
      setPassword (e.target.value)
   }
   return (
      <div className={style.container} style= {style.inlineStyle} >

         {/* username */}
         <div className= {style.group[0]} >
            <div className={style.group[1]} > 
               <span className= {style.group[2]} > username </span>
            </div>
            <input type="text" value={username} onChange = {(e) => {handleUser(e)}} className= {style.form} />
         </div> <br />

         {/* password */}
         <div className= {style.group[0]} >
            <div className={style.group[1]} > 
               <span className= {style.group[2]} > password </span>
            </div>
            <input type="text" value={password} onChange = {(e) => {handlePassword(e)}} className= {style.form} />
         </div> <br />
         
         {/* submit */}
         <button className={style.button} > submit </button>
      </div>
   )
}
export default UserInfo;