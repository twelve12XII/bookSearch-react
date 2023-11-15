import { useState } from 'react';
import styles from './Home.module.scss'
import SearchLayout from '../../SearchLayout/SearchLayout';
import Pagination from '../../Pagination/Pagination';

const Home = () => {

  const [page, setPage] = useState(0);
  const [input, setInput] = useState('');
  const [categories, setCategories] = useState('all');
  const [filter, setFilter] = useState('relevance');
  const [dispatchInput, setDispatchInput] = useState(`${categories}+subject&orderBy=${filter}`);

  const handleOnclick = () => {
    input ? setDispatchInput(`${input}&${categories}+subject&orderBy=${filter}`)
      : setDispatchInput(`${categories}+subject&orderBy=${filter}`);
    setPage(0);
  }


  return (
    <>
      <div className={styles.header}>
        <h1>Search for books</h1>
        <SearchLayout
          handleOnclick={handleOnclick}
          setInput={setInput}
          setCategories={setCategories}
          setFilter={setFilter}
        />
      </div>
      <Pagination
        page={page}
        setPage={setPage}
        dispatchInput={dispatchInput}
      />
    </>
  )
}

export default Home
