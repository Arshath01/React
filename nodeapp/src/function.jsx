import React, { Component } from 'react';
class App  extends Component {
    state = {  } 
    render() { 
        return (
            <div>

                <div className='container-fluid bg-primary text-light p-4' >
                    <h1 className='text-center'>React App</h1>
                </div>
            
                <div className='card m-4 p-4 text-dark' style={{width:'30%'}} >
                    <div>
                        <form action="http://127.0.0.1:5000/process_post" method='POST'>
                            
                            <input type="text" name='user' className='form-control p-2 ' placeholder='username' />
                            <br />
                            <input type="password" name='pass' className='form-control p-2 ' placeholder='Password' />
                            <br />
                            <input type="email" name='email' className='form-control p-2' placeholder='Email' />
                            <br />
                            <input type="submit" className='btn btn-primary  w-100'  style={{float:'right'}}/>
                        
                        </form>
                    </div>
                </div>
            
            </div>
        );
    }
}
export default App;