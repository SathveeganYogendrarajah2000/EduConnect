import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer fluid className='p-4 overflow-hidden' style={{ backgroundColor: 'hsl(218, 81%, 95%)' }}>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{fontFamily: 'Roboto Condensed, sans-serif', color: 'black' }}>
            EduConnect<br />
            <span style={{color: 'hsl(218, 81%, 75%)',fontSize: '48px'}}>Lets Begin to Race!</span>
          </h1>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>

              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'/>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              </div>

              <MDBBtn className='w-100 mb-4' size='lg'>sign up</MDBBtn>

              <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', backgroundColor: 'black', color: 'white', fontSize: '16px', padding: '10px 10px' }}>
                Google
                </MDBBtn>






              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default App;