import DropDown from "../DropDown/DropDown"
import styles from "./SearchLayout.module.scss"

const SearchLayout = ({
    handleOnclick,
    setInput,
    setCategories,
    setFilter
}) => {

    const handleKeyDown = (event) => {
        if(event.key === 'Enter'){
            handleOnclick();
        }
      }

    return (
        <div className={styles.search} >
            <div className={styles.search_inputLayout}>
                <input onKeyDown={handleKeyDown} onInput={e => setInput(e.target.value)} />
                <button onClick={handleOnclick}></button>
            </div>
            <div className={styles.search_dropdownLayout}>
                <DropDown
                    name='Categories'
                    items={['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']}
                    setValue={setCategories}
                />
                <DropDown
                    name='Sorting by'
                    items={['relevance', 'newest']}
                    setValue={setFilter}
                />
            </div>
        </div>
    )

}
export default SearchLayout