import React, { useState, useEffect } from 'react'
import {Pin} from '../svgs'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc  } from "firebase/firestore"; 
import db from '../../firebase'
import 'firebase/storage';
const FileUpload = ({messages, path}) => {
  const [image, setImage] = useState()
  let inputRef
  const handleChange = (e) => {
      setImage(e.target.files[0])
  }
  useEffect(() => {
    if(!image) return
    else {
      const storage = getStorage();

/** @type {any} */
const metadata = {
  contentType: 'image/jpeg'
};
const storageRef = ref(storage, 'images/'+Date.now() + image.name);
const uploadTask = uploadBytesResumable(storageRef, image, metadata);
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
      let lastElement = messages[messages.length - 1];
      let id = lastElement.id + 1
      await setDoc(doc(db, `${path}`, `${id}`), {
        message: downloadURL,
        type: 'image',
        userID: localStorage.getItem('uid'),
        reference: doc(db,`userData/${localStorage.getItem('uid')}`),
        time: Date.now(),
        id: id,
      });
    });
    setImage()
  }
);
      
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[image])
  return (
    <>
      <input type="file" hidden={true} ref={refParam => inputRef = refParam} accept="image/png, image/gif, image/jpeg, image/jpg" onInput={handleChange}/>
      <button style={{ backgroundColor: 'transparent', marginLeft: '12px', color: '#c1c7cd', cursor: 'pointer', marginTop: '4px'}} onClick={() => inputRef.click()}><Pin/></button>
    </>
  );
}
 
export default FileUpload;