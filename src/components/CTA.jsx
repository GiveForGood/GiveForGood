import styles from "../style";
import Button from './Button';

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow `}>
      <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>This is our Banner</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>This is where we would be displaying heavy info,... like an alert to users opening the page</p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 ss:mt-0 mt-10`}>
      <Button />
    </div>
    </section>
  )
}

export default CTA