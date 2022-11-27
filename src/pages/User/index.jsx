import React from "react";
import styles from "../../style";

import { Navbar, Footer } from "../../components";
import { useSelector } from "react-redux";
// import ListTable from "./components/ListTable";

const User = () => {
  const {selectedUser} = useSelector((state) => state.userData);
  console.log(selectedUser);

  return (
    <div className="bg-primary w-full overflow-hidden bg-black-gradient">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} h-screen`}>
        <div className={`${styles.boxWidth}`}>
        <div className="flex justify-center w-full py-2">
      <h1 className="text-white font-bold text-3xl text-center">Donate</h1>
        </div>
          <div className="flex justify-center">
            <section className="bg-black-gradient-2 rounded-[20px] box-shadow w-full p-6 m-12 h-[500px]">
              <div className=" flex p-4">
                <p className="text-white px-2 font-semibold">Name:</p>
                  <p className="text-white">{selectedUser.name}</p>
              </div>
              <div className=" flex p-4">
                  <p className="text-white px-2 font-semibold">cid:</p>
                  <p className="text-white">{selectedUser.cid}</p>
              </div>
              <div className=" flex p-4">
              <p className="text-white px-2 font-semibold">Size:</p>
                  <p className="text-white">{selectedUser.size}</p>
              </div>
              <div className=" flex p-4">
              <p className="text-white px-2 font-semibold">Created At:</p>
                  <p className="text-white">{selectedUser.createdAt}</p>      
              </div>
              <div className=" flex p-4 space-x-4">
              <p className="text-white px-2 font-semibold">Amount:</p>
              <input type="number" className="bg-dimWhite text-black p-2 rounded-sm w-1/2 font-poppins rounded-full cursor-pointer  border-[#3d4f7c]"/>

              </div>
              <div className=" flex p-4 space-x-2">
              <p className="text-white px-2 font-semibold">Full name:</p>
                <input type="text" className="bg-dimWhite text-black p-2 rounded-sm font-poppins rounded-full w-1/2 cursor-pointer  border-[#3d4f7c]"/>
              </div>
              <div>
          <button onClick={() => alert("Thank You")} className={`py-4 mt-3 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] `}>Submit</button>
        </div>
            </section>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default User;
