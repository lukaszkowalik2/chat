import React, {useEffect} from 'react'
import '../../styles/SignUp.scss'
const SignUp = () => {
  useEffect(() => {
    document.getElementById('name').addEventListener("keyup", function(e) {
      if (e.key === 27 || e.key === 13) {
        document.getElementById('password').focus()
      }
    });
    document.getElementById('password').addEventListener("keyup", function(e) {
      if (e.key === 27 || e.key === 13) {
        document.getElementById('mainButton').className = ''
      }
    });
  })
  const checkInput = (e) => {
    if (e.target.value.length > 4){
      e.className = 'active';
    } else {
      e.className = '';
    }
  }
  return (
    <div id="mainButton">
    <div className="btn-text" onClick={() => document.getElementById('mainButton').className = 'active'}>Sign In</div>
	<div className="modal">
  <div className="close-button"  onClick={() => document.getElementById('mainButton').className = ''}>x</div>
		<div className="form-title">Sign In</div>
		<div className="input-group">
			<input type="text" id="name" onBlur={checkInput} />
			<label htmlFor="name">Username</label>
		</div>
		<div className="input-group">
			<input type="password" id="password" onBlur={checkInput} />
			<label htmlFor="password">Password</label>
		</div>
		<div className="form-button"onClick={() => document.getElementById('mainButton').className = ''}>Go</div>
	</div>
</div>
  );
}
 
export default SignUp;