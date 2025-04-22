import { FiLoader } from "react-icons/fi";
import style from "./comingSoon.module.scss"
const ComingSoonComponent = () => {
    return (
        <div className={style.comingSoonContainer}>
            <h1>Coming Soon...</h1>
            <FiLoader className={style.loader} />
        </div>
    );
}
 
export default ComingSoonComponent;