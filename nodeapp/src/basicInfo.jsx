import React, {useState} from 'react';

const UserInfo = ()=> {
   const [style,setStyle] = useState(
      {
         nav:' bg-primary text-dark w-100 p-3' ,
         container:' p-3 text-light container  rounded mt-5',
         formText:'form-text text-dark m-2',
         input:'form-control p-2 m-1 w-75',
         button:'p-2 m-1 w-75 bg-primary text-white rounded'
      }
   );
   const[username,setUsername] = useState('');
   const[password,setPassword] = useState('');
   function handleSubmit(){
      fetch('http://localhost:5000/process_post',{
         method:'POST',
         body:JSON.stringify(
            {
               name:username,
               pass:password,
            }
            
         )
      })
   }
   return (
      <div>
         <nav className={style.nav} >
            <h2>Form Submission</h2>
         </nav>
         <form className={style.container} >

            <span className={style.formText}>
               <b>Username</b>
            </span> <br/>

            <input
             type="text"
              value={username}
               className={style.input} 
              onChange={(e)=>{
            setUsername(e.target.value)
               }}/> 

            <span className={style.formText}>
               <b>Password</b>
            </span> <br/>

            <input 
               type="password"
                 value={password}
                   className={style.input} 
                 onChange={(e)=>{
               setPassword(e.target.value)
               }}/>  

             <br/>

            <button 
               className={style.button} 
                  style={{border:'none'}} 
                     onClick={handleSubmit}>
               <b>Submit</b>
            </button>

         </form>
      </div>
   )
}
export default UserInfo;