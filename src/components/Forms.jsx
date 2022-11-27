import styles from "../style";
import React, { useState} from "react";
import { Buffer } from "buffer";
import { Web3Storage, getFilesFromPath, File } from 'web3.storage'


const Forms = () => {

  const getAccessToken = () => {
    // console.log(process.env.WEB3STORAGE_TOKEN)
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDY1MEU3NjRFMEM4NjAwQ2Q5QTQ1MTZENzJGMTFEOTM3NjViMjIyOTAiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Njk1MDU4OTc4OTYsIm5hbWUiOiJtYWx1bHUifQ.tbHFCYkW0UH97BDcByYgOeznM8vsZSXbVuZolNooa8A';
  }

  const makeStorageClient = () => {
    return new Web3Storage({token:getAccessToken()})
  }


  const makeFileObjects = () => {
    const obj = { 
      firstname: userDetails.firstName ,
      lastname: userDetails.lastName ,
      reasons: userDetails.reason,
      amountgoal: userDetails.amount,
      commentsfordonor: userDetails.comments
   }

    const buffer = Buffer.from(JSON.stringify(obj))

    const files = [
      new File([buffer], `${userDetails.firstName} ${userDetails.lastName}`)
    ]
    return files;
  }

  const storeFiles = async(files) => {
    const client = makeStorageClient()
    const cid = await client.put(files)
    console.log('stored files with cid:', cid)
    return cid
  }

  const retrieveFiles = async(cid) => {
    const client = makeStorageClient()
    const res = await client.get(cid)
    // const value = await res.files()
    console.log(`Got a response! [${res.status}] ${res.ok}`)
    if (!res.ok) {
      console.log(`failed to get ${cid} - [${res.status}] ${res.body}`)
    }
  
    const files = await res.files()
    for (const file of files) {
      console.log(`${file.cid} -- ${file.name} -- ${file.size}`)
      const text = await file.text()
      const obj = JSON.parse(text)
      console.log("text", text, obj)
    }
  }

    const [userDetails, setUserDetails] = useState({
      firstName:'',
      lastName:'',
      reason:'',
      amount:0,
      comments:''
    });

    const [cid, setCid] = useState('')

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
      setLoading(true)
      e.preventDefault();
      const data = makeFileObjects(userDetails)
      console.log("user", userDetails)
      const cidData = await storeFiles(data)
      setLoading(false)
      alert("User Registered Successfully")
      setCid(cidData)
      setUserDetails({
        firstName:'',
        lastName:'',
        reason:'',
        amount:0,
        comments:''
      })
    }



  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow w-1/2`}>
      <div className="flex-1 flex flex-col">
      {
        loading?<p className="font-bold text-white">Loading...</p>:''
      }
      <h2 className={styles.heading2}>Apply for Fund.</h2>
        <form onSubmit={handleSubmit}>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>First name:</p>
        <input value={userDetails.firstName} onChange={(e) => setUserDetails({...userDetails, firstName:e.target.value})} className="bg-dimWhite text-black p-2 rounded-sm font-poppins rounded-full cursor-pointer sm:w-[100%] border-[#3d4f7c]"/>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Last name:</p>
        <input value={userDetails.lastName} onChange={(e) => setUserDetails({...userDetails, lastName:e.target.value})} className="bg-dimWhite text-black p-2 rounded-sm font-poppins rounded-full cursor-pointer sm:w-[100%] border-[#3d4f7c]"/>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Reason:</p>
        <input value={userDetails.reason} onChange={(e) => setUserDetails({...userDetails, reason:e.target.value})} className="bg-dimWhite text-black p-2 rounded-sm font-poppins rounded-full cursor-pointer sm:w-[100%] border-[#3d4f7c]"/>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Ammount goal (optional):</p>
        <input value={userDetails.amount} onChange={(e) => setUserDetails({...userDetails, amount:e.target.value})} className="bg-dimWhite text-black p-2 rounded-sm font-poppins rounded-full cursor-pointer sm:w-[100%] border-[#3d4f7c]"/>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Comments:</p>
        <input value={userDetails.comments} onChange={(e) => setUserDetails({...userDetails, comments:e.target.value})} className="bg-dimWhite text-black p-2 rounded-sm font-poppins rounded-full cursor-pointer sm:w-[100%] border-[#3d4f7c]"/>
        <div>
          <button disabled={loading} onClick={handleSubmit} className={`py-4 mt-3 px-6 ${loading?'bg-dimWhite text-black':'bg-blue-gradient text-primary'} font-poppins font-medium text-[18px]  outline-none ${styles} rounded-[10px] `}>Submit</button>
        </div>
        </form>
    </div>
    
    </section>
  )
}

export default Forms