import React, { useState, useEffect } from 'react'
import '../../styles/profile.scss'
import {onAuthStateChanged } from 'firebase/auth'
import {auth} from '../../firebase'
const Profile = () => {
  const [user,setUser] = useState()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return
    } else {
      window.location.href = 'http://localhost:3000/login'
    }
  });
  useEffect(() => {
  })
  return (
    <div id="bodyProfile">
    <div class="card-container">
	<img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" onMouseOver={() => console.log('dziala')} onMouseOut={() => console.log('nie ma')}/>
  {/* <div id="hover">
    <div id="text">Change Profile Image</div>
    </div> */}
	<h3>Ricky Park</h3>
	<h6>New York</h6>
	<p>User interface designer and <br/> front-end developer</p>
	<div class="buttons">
		<button class="primary">
			Message
		</button>
		<button class="primary ghost">
			Following
		</button>
	</div>
	<div class="skills">
		<h6>Skills</h6>
		<ul>
			<li>UI / UX</li>
			<li>Front End Development</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			<li>Node</li>
		</ul>
	</div>
</div>
</div>
  );
}
 
export default Profile;