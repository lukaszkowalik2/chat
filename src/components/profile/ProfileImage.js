import React, { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import db from '../../firebase'
const ProfileImage = ({disablePopup, profilePhoto,setUpdatedName}) => {
  const [image,setImage] = useState(profilePhoto)
  const [imageClone,setImageClone] = useState(profilePhoto)
  let inputRef
  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setImageClone(e.target.files[0]);
  }
  const handleSubmit = (e) => {
    if(image === profilePhoto) return;
    else {
      const storage = getStorage();

/** @type {any} */
const metadata = {
  contentType: 'image/jpeg'
};
const storageRef = ref(storage, 'images/'+Date.now() + imageClone.name);
const uploadTask = uploadBytesResumable(storageRef, imageClone, metadata);
uploadTask.on('state_changed',
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
  }, 
  (error) => {
    switch (error.code) {
      case 'storage/unauthorized':
        console.log(error)
        break;
      case 'storage/canceled':
        console.log(error)
        break;
      case 'storage/unknown':
        console.log(error)
        break;
      default:
        break;
    }
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
      const userDataRef = doc(db, 'userData', `${localStorage.getItem('uid')}`)
      await updateDoc(userDataRef, {
        profilePhoto: downloadURL
      });
      setUpdatedName(downloadURL)
      setImage(downloadURL)
      disablePopup()
    });
  }
);
      
    }
  }
  const hadleClosePopup = (e) =>{
    if (e.target.className === "namePop"){
      disablePopup()
    } else {
      return 
    }
  }
  return (
    <div className="namePop" onClick={hadleClosePopup}>
      <div className="layer">
        <div className="focusLock">
          <div className="info">
           <div className="nameChange">Change your profile image</div>
           <div className="close" onClick={disablePopup}><svg className="closeIcon" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg></div>
          </div>
            <div className="headerItem">profile image</div>
            <div className="imageUpload">
              <img className="profileImagePopUp" src={image} alt="" />
              <input  type="file"  accept="image/jpeg, image/png" hidden onInput={handleImageChange} ref={refParam => inputRef = refParam}/>
              <button className="imageBtn" onClick={() => inputRef.click()}>Change</button>
            </div>
         <div className="submit">
           <button className="cancel" onClick={disablePopup}>Cancel</button>
           <button className="submitBtn" onClick={handleSubmit}>Ready</button>
         </div>
       </div>
      </div>
    </div>
  );
}
 
export default ProfileImage;