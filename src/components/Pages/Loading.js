import React from 'react'
import '../../styles/loading.css'
const Loading = () => {
  return (
  <div className="body2">
    <main>
	<div className="preloader">
		<div className="preloader__square"></div>
		<div className="preloader__square"></div>
		<div className="preloader__square"></div>
		<div className="preloader__square"></div>
	</div>
	<div className="status">Loading<span className="status__dot">.</span><span className="status__dot">.</span><span className="status__dot">.</span></div>
</main>
</div>
  );
}
 
export default Loading;