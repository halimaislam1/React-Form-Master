
import './App.css'
import HookForm from './Component/HookForm/HookForm'
import RefForm from './Component/RefForm/RefForm'
import ReuseableForm from './Component/ReuseableForm/ReuseableForm'
// import SimpleForm from './Component/SimpleForm/SimpleForm'
// import StateFulForm from './Component/StateFulForm/StateFulForm'

function App() {
  
  return (
    <>   
      <h1 className='mb-8'>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseableForm></ReuseableForm>
    </>
  )
}

export default App
