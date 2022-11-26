// import {features} from "../constants";
import styles, { layout } from '../style';
// import Contributions from "./tableData";


const ListTable = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow `}>
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col">
          <h2 className={styles.heading2}>Contributions made;</h2>

          <table class="table-auto">
            <thead>
              <tr>
                <th className={`${styles.paragraphtwo} max-w-[470px] mt-5`} >name</th>
                <th className={`${styles.paragraphtwo} max-w-[470px] mt-5`} >content</th>
                <th className={`${styles.paragraphtwo} max-w-[470px] mt-5`} >ammount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={`${styles.paragraph} max-w-[470px] mt-5`} >The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td className={`${styles.paragraph} max-w-[470px] mt-5`} >Malcolm Lockyer</td>
                <td className={`${styles.paragraph} max-w-[470px] mt-5`} >1961</td>
              </tr>
              <tr>
                <td className={`${styles.paragraph} max-w-[470px] mt-5`} >Witchy Woman</td>
                <td className={`${styles.paragraph} max-w-[470px] mt-5`} >The Eagles</td>
                <td className={`${styles.paragraph} max-w-[470px] mt-5`} >1972</td>
              </tr>
              <tr>
                <td className={`${styles.paragraph} max-w-[470px] mt-5`} >Shining Star</td>
                <td className={`${styles.paragraph} max-w-[470px] mt-5`} >Earth, Wind, and Fire</td>
                <td className={`${styles.paragraph} max-w-[470px] mt-5`} >1975</td>
              </tr>
            </tbody>
          </table>



        </div>
      </div>
    </section>
  )
}

export default ListTable