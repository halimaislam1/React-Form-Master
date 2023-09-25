
import './App.css'
import HookForm from './Component/HookForm/HookForm'
import RefForm from './Component/RefForm/RefForm'
import ReuseableForm from './Component/ReuseableForm/ReuseableForm'
// import SimpleForm from './Component/SimpleForm/SimpleForm'
// import StateFulForm from './Component/StateFulForm/StateFulForm'

function App() {

  const handleSignUpSubmit = data => {
    console.log('sign up data: ', data);
  }

  const handleUpdateProfile = data => {
    console.log('Update profile data: ', data);
  }




  return (
    <>
      <h1 className='mb-8'>React Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseableForm 
                formTitle={'Sign up'}
                handleSubmit={handleSignUpSubmit}> 
                <div >
                  <h3 className ="font-extrabold text-5xl mb-4 mt-4" >Sign up</h3>
                  <p className ="font-bold text-xl mb-5">Please sign up right now</p>
                </div>
      </ReuseableForm>
      <ReuseableForm
                handleSubmit={handleUpdateProfile}
                formTitle={'Profile Update'}
                submitButtonText='Update'>
                <div>
                  <h3 className =" font-extrabold text-5xl mb-4 mt-4">Update Profile</h3>
                  <p className ="font-bold text-xl mb-5">Alwys keep your  Profile Update</p>
                </div>
                </ReuseableForm>
    </>
  )
}

export default App
