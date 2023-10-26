import { React,useState } from "react";
import { useNavigate } from 'react-router-dom';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput } from 'mdb-react-ui-kit';

const paddingStyle = {
    paddingTop: '10%'
}

const Login = () => {

    const navigate = useNavigate();

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

    const usernameHandler = (event) => {
      setUsername(event.target.value)
    }
    
    const passwordHandler = (event) => {
      setPassword(event.target.value)
    }
    
    const submitHandler = () => {

    // Define the API endpoint for login
    const loginUrl = 'https://dummyjson.com/auth/login';

    // Create a request object
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username:username, password:password }),
    };

    // Send the API request
    fetch(loginUrl, requestOptions)
      .then((response) => {
        if (response.status === 200) {
          // Successfully logged in, you can redirect or perform other actions.
          console.log('Logged in successfully');
          navigate('/dashbaord')

        } else {
          // Handle login error, e.g., show an error message.
          console.error('Login failed');
          setError('Username or Password is incorrect!!!')
        }
      })
      .catch((error) => {
        // Handle network errors
        console.error('Network error', error);
      });
    }

    return(
        <>
        <MDBContainer fluid className="p-3 my-5 h-custom">
        <MDBRow>
          <MDBCol col='10' md='6'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
          </MDBCol>
         
          <MDBCol col='4' md='6' style={paddingStyle}>
            {/* <div className="d-flex flex-row align-items-center justify-content-center">
              <p className="lead fw-normal mb-0 me-3">Sign in with</p>
              <MDBBtn floating size='md' tag='a' className='me-2'>
                <MDBIcon fab icon='facebook-f' />
              </MDBBtn>
              <MDBBtn floating size='md' tag='a' className='me-2'>
                <MDBIcon fab icon='twitter' />
              </MDBBtn>
              <MDBBtn floating size='md' tag='a' className='me-2'>
                <MDBIcon fab icon='linkedin-in' />
              </MDBBtn>
            </div> */}
            {/* <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div> */}
            <MDBCol col='6' md='6'>
            <MDBInput wrapperClass='mb-4' label='Email address' id='username' type='email' size="lg" value={username} onChange={usernameHandler}/>
            <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' size="lg" value={password} onChange={passwordHandler}/>
            <p style={{ color: 'red' }}>{error}</p>
            <MDBBtn className="mb-0 px-5" size='lg' onClick={submitHandler}>Login</MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a>
              </p>
            </MDBCol>
            
            
            {/* <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="!#">Forgot password?</a>
            </div> */}

          </MDBCol>
          
        </MDBRow>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          <div className="text-white mb-3 mb-md-0"> Copyright © 2020. All rights reserved. </div>
          <div>
            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
              <MDBIcon fab icon='facebook-f' size="md" />
            </MDBBtn>
            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
              <MDBIcon fab icon='twitter' size="md" />
            </MDBBtn>
            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
              <MDBIcon fab icon='google' size="md" />
            </MDBBtn>
            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
              <MDBIcon fab icon='linkedin-in' size="md" />
            </MDBBtn>
          </div>
        </div>
      </MDBContainer>
      </>
    )
}

export default Login;