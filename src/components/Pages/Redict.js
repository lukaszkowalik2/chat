import {useEffect} from 'react'
const Redict = () => {
  useEffect(() => {
    if(!localStorage.getItem("lastChat"))
      window.location.href = 'http://localhost:3000/login'
    else
      window.location.href = `${localStorage.getItem("lastChat")}`
  })
  return (
    "redict"
  );
}
 
export default Redict;