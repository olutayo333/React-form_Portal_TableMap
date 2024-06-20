import React  from 'react'
import { useState } from 'react';
import axios from 'axios';
let url_upload = "https://node-modularized.onrender.com/user/upload";

const Upload = () => {
    const[myfile, setmyfile]= useState(""); 
    const[imgurl, setimgurl] = useState("")
    
    //CONVERTING TO BASE 64
    const setmyupload =(e)=>{
        //console.log(e.target.files)
        let myImage = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(myImage)
        reader.onload = ()=>{ setmyfile(reader.result); console.log(reader.result)}
        }
    //GENERATING URL
    const upload = ()=>{
        axios.post(url_upload, {myfile})
        .then((response)=>{
          if(response.data.status)
          { setimgurl(response.data.result.secure_url); console.log(imgurl); 
            //uploadFIle(); //CALLING THE FUNCTION THAT WILL SEND IT TO THE BACKEND
        }
          else{console.log("fetch url failed")}
    
        }) }

    //SENDING URL TO THE BACKEND
    //   const uploadFIle = ()=>{
    //     axios.post(url_uploadFile, {myfile:imgurl, email})
    //     .then((response)=>{
    //       if (response){alert("upload successful")}
    //       else{alert("upload failed")}
    //     })
    //   }


  return (
    <div>
        <h4>{imgurl}</h4>
        <p><input type="file" onChange={(e)=>setmyupload(e)} /> <span>UploadURL</span></p>
        <button onClick={upload} > Generate URL</button>
    </div>
  )
}

export default Upload
