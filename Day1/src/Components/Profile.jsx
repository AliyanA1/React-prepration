

const Profile=({name='ali'
    ,age=22,year=new Date().getFullYear()
})=>{
    return(
        <section className="m-4">
        <article 
        className="text-2xl font-mono text-black 
        text-center p-6 rounded-md shadow-2xl bg-amber-200">
          <h1>User Profile</h1>
         <h2>name: {name}</h2>
         <h2>age: {age}</h2>
         <p>working houre: {4+4}</p>
         <p>hey, i'm learning software engineering working hard </p>
         <h3>Current year: {year}</h3>
        </article>
     </section>
    )
}
export default Profile