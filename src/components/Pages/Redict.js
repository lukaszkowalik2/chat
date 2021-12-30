import {useEffect} from 'react'
const Redict = () => {
  useEffect(() => {
      window.location.href = `${localStorage.getItem("lastChat")}`
  })
  return (
    "redict"
  );
}
 
export default Redict;