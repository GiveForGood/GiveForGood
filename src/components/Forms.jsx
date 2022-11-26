import styles from "../style";
// import { fabricatedData } from "../constants";
import Button from "./Button";
import { useState, useRef } from "react";

const Input = ({name}) => (
    <input value={userDetails.name} onChange={(e) => setUserDetails({...userDetails, name:e.target.value})} className="bg-transparent text-white p-2 rounded-sm font-poppins rounded-full cursor-pointer sm:w-[100%] border-[#3d4f7c]"/>
)

const Forms = () => {
    // const [firstname, setfirstname] = useState("") 
    // on using useREf hooh care to handle the submit
    const firstnameRef = useRef()

   


    const [userDetails, setUserDetails] = useState({
      firstName:'',
      lastName:'',
      reason:'',
      amount:0,
      comments:''
    });

    const postUserDetails = async (data) => {
      const response = await fetch('url',{
        method:'POST',
        body:JSON.stringify(data)
      })
    }


    const handleSubmit = (e) => {
      e.preventDefault();
      postUserDetails(userDetails)
      //  const data = makeFileObjects();
      //  console.log(data)
    }


function makeFileObjects () {

    const obj = { 
        firstname: userDetails.firstName ,
        lastname: userDetails.lastName ,
        reasons: userDetails.reason,
        amountgoal: userDetails.amount,
        commentsfordonor: userDetails.comments
     }
    const blob = new Blob([JSON.stringify(obj)], { type: 'application/json' })
  
    const files = [
      new File(['contents-of-file-1'], 'plain-utf8.txt'),
      new File([blob], 'userdetails.json')
    ]
    return files
  }

  // get the created files
// function getFiles () {
//     const fileInput = document.querySelector('input[type="file"]')
//     return fileInput.files
//   }


  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow `}>
      <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>To start a new campaign, Please fill the form below;</h2>
        <form onSubmit={handleSubmit}>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>First name:</p>
        <input value={userDetails.firstName} onChange={(e) => setUserDetails({...userDetails, firstName:e.target.value})} className="bg-transparent text-white p-2 rounded-sm font-poppins rounded-full cursor-pointer sm:w-[100%] border-[#3d4f7c]"/>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Last name:</p>
        <input value={userDetails.lastName} onChange={(e) => setUserDetails({...userDetails, lastName:e.target.value})} className="bg-transparent text-white p-2 rounded-sm font-poppins rounded-full cursor-pointer sm:w-[100%] border-[#3d4f7c]"/>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Reason:</p>
        <input value={userDetails.reason} onChange={(e) => setUserDetails({...userDetails, reason:e.target.value})} className="bg-transparent text-white p-2 rounded-sm font-poppins rounded-full cursor-pointer sm:w-[100%] border-[#3d4f7c]"/>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Ammount goal (optional):</p>
        <input value={userDetails.amount} onChange={(e) => setUserDetails({...userDetails, amount:e.target.value})} className="bg-transparent text-white p-2 rounded-sm font-poppins rounded-full cursor-pointer sm:w-[100%] border-[#3d4f7c]"/>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Comments:</p>
        <input value={userDetails.comments} onChange={(e) => setUserDetails({...userDetails, comments:e.target.value})} className="bg-transparent text-white p-2 rounded-sm font-poppins rounded-full cursor-pointer sm:w-[100%] border-[#3d4f7c]"/>
        <div>
         {/* <div className={`${styles.flexCenter} sm:ml-10 ml-0 ss:mt-0 mt-10`}>
            <Button />
          </div> */}
          <button onClick={handleSubmit} className={`py-4 mt-3 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] `}>Submit</button>
        </div>
        </form>
    </div>
    
    </section>
  )
}

export default Forms