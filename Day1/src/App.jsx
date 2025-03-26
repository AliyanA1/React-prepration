import  Profile from './Components/Profile'

const App=()=>{
  return(
     <main className=" flex flex-col items-center justify-center bg-cyan-600">
       <Profile name='Aliyan'  />
       <Profile />
       <Profile name='Eren' age={19}/>
     </main>
  )
}

export default App