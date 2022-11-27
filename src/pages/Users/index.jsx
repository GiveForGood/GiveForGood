import React from "react";
import styles  from "../../style";
import {Navbar,Footer } from "../../components";
import Table from "../../components/Table";
// import ListTable from "./components/ListTable";


const Users = () => {
   return(
  <div className="bg-primary w-full overflow-hidden bg-black-gradient">
         <div className={`${styles.paddingX} ${styles.flexCenter}`}>
         <div className={`${styles.boxWidth}`}>
              < Navbar />
         </div>
         </div>
         <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
           <div className={`${styles.boxWidth}`}>
            <h1 className="text-2xl font-bold text-white text-center p-2">Users Registered For Fund</h1>
            <div className="flex justify-center pb-[250px]">
              <Table/>
            </div>
              < Footer />
           </div>
         </div>
    </div>
   )
}

export default Users
