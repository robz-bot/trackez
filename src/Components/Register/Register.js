import React from 'react';


function Register(props) {
    return (
        <div className='regform'>
           <form>
            <FormInput placeholder= "Username"/>
            <FormInput placeholder= "Email"/>

            <FormInput placeholder= "Emp-code"/>
            <FormInput placeholder= "Password"/>


           </form>
        </div>
    );
}

export default Register;