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
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="flex justify-center">
            <div>
              <div className=" flex">
                <p className="text-white px-2">Name:</p>
                  <p className="text-white">{selectedUser.name}</p>
              </div>
              <div className=" flex">
                  <p className="text-white px-2">cid:</p>
                  <p className="text-white">{selectedUser.cid}</p>
              </div>
              <div className=" flex">
              <p className="text-white px-2">Size:</p>
                  <p className="text-white">{selectedUser.size}</p>
              </div>
              <div className=" flex">
              <p className="text-white px-2">Created At:</p>
                  <p className="text-white">{selectedUser.createdAt}</p>      
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default User;
