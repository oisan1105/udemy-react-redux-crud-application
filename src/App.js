import { useState } from "react";

function App() {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "Noname",  },

    
  ]
  return (
<div>
  {
    profiles.map((profile, index) => {
       return <User name={profile.name} age={profile.age} key={index}/>
    })
  }
</div>
  )
}

// function App() {
//   const [state, setstate] = useState(false)
//   return (
//   <div>
//     <button onClick={() => setstate(!state)}></button>
//     <p>Text:{state ? "A":"B"}</p>
//   </div>
//   )
// }

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old! </div>
}

User.defaultProps = {
  age: 1
}


export default App;
