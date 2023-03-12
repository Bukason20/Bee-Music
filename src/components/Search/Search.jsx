import { BiSearch } from "react-icons/bi"
import styles from "./search.module.css"

function Search() {
    return (
        <div className = {styles.searcdh}>
            {/* <BiSearch /> */}
           <input type="search" name="" defaultValue = {<BiSearch />}/> 
        </div>
    )
}

export default Search
