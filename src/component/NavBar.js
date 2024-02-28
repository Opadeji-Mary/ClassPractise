const NavBar = () => {
    let myAge = 100
    let MySrc ='kcknmkkke'
    let myLink ="www.google.com"
    let MyStyle ='bg-danger'
    let gender = "female"
    let allStudent = [
      {firstname:"Opadeji",lastname:"mary"},
      {firstname:"Temidayo",lastname:"oluwapelumi"},
      {firstname:"sqi girl",lastname:"bonafide student"}
    ]
  return (
    <>
    <div className={MyStyle}>NavBar {myAge}</div>
    <img src={MySrc} alt=""/>
    <a href={myLink}>link to Google</a>
    <h2 className={gender=='male'?'bg-danger':'bg-success'}>Gender</h2>
    {gender=='male'?<h1>Hello nah man you be</h1>:<h1>The gender gave apple to Adem</h1>}
    
    {
      allStudent.map((key,index) =>(
        <div key={index}>
          <h1>{index+1}</h1>
          <h1>{key.firstname} {key.lastname}</h1>
        </div>
      ))
    }

    </>
  )
}

export default NavBar