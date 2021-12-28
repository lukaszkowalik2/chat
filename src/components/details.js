import React from 'react'
const Details = () => {
  return (
    <div className="detail-area">
    <div className="detail-area-header">
     <div className="msg-profile group">
      <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
       <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2zM12 22v-6.5" />
       <path d="M22 8.5l-10 7-10-7" />
       <path d="M2 15.5l10-7 10 7M12 2v6.5" /></svg>
     </div>
     <div className="detail-title">CodePen Group</div>
     <div className="detail-subtitle">Created by Aysenur, 1 May 2020</div>
     <div className="detail-buttons">
      <button className="detail-button">
       <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
       </svg>
       Call Group
      </button>
      <button className="detail-button">
       <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="feather feather-video">
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>
       Video Chat
      </button>
     </div>
    </div>
    <div className="detail-changes">
     <input type="text" placeholder="Search in Conversation"/>
     <div className="detail-change">
      Change Color
      <div className="colors">
       <div className="color blue selected" data-color="blue"></div>
       <div className="color purple" data-color="purple"></div>
       <div className="color green" data-color="green"></div>
       <div className="color orange" data-color="orange"></div>
      </div>
     </div>
     <div className="detail-change">
      Change Emoji
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up">
       <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" /></svg>
     </div>
    </div>
    <div className="detail-photos">
     <div className="detail-photo-title">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-image">
       <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
       <circle cx="8.5" cy="8.5" r="1.5" />
       <path d="M21 15l-5-5L5 21" /></svg>
      Shared photos
     </div>
     <div className="detail-photo-grid">
      <img src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2168&q=80" alt=""/>
      <img src="https://images.unsplash.com/photo-1516085216930-c93a002a8b01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"alt="" />
      <img src="https://images.unsplash.com/photo-1458819714733-e5ab3d536722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80" alt=""/>
      <img src="https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2287&q=80"alt="" />
      <img src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2247&q=80"alt="" />
      <img src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80" alt=""/>
      <img src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80" alt=""/>
      <img src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80" alt=""/>
      <img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2309&q=80" alt=""/>
 
      <img src="https://images.unsplash.com/photo-1473170611423-22489201d919?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80" alt=""/>
      <img src="https://images.unsplash.com/photo-1579613832111-ac7dfcc7723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt=""/>
      <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2189&q=80" alt=""/>
     </div>
     <div className="view-more">View More</div>
    </div>
    <a href="https://twitter.com/AysnrTrkk" className="follow-me" target="_blank" rel='noreferrer'>
     <span className="follow-text">
      <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
       <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
      </svg>
      Follow me on Twitter
     </span>
     <span className="developer">
      <img src="data:image/jpeg;base64,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"alt="" />
      Aysenur Turk — @AysnrTrkk
     </span>
    </a>
   </div>
  );
}
 
export default Details;