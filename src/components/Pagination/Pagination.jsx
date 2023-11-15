import { React, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData, loadMoreData } from '../../redux/action/data';
import BookCard from '../BookCard/BookCard'
import styles from './Pagination.module.scss'

const Pagination = ({ data, dispatchInput, page, fetchData, loadMoreData, setPage }) => {
    useEffect(() => {
        fetchData(dispatchInput, page)
        setPage(page + 1)
    }, [dispatchInput]);

    return (
        <div className={styles.pagination}> <h2>Found {data.data.length} results</h2>
            {data.data.length !== 0 ? [
                <div key={'booksList_pag'} className={styles.booksList}>
                    {data.data.map((book) =>
                    (
                        <div key={book.id} className={styles.item}>
                            <BookCard
                                imgURL={book.volumeInfo.hasOwnProperty("imageLinks") ?
                                    book.volumeInfo.imageLinks.thumbnail : '../../../public/default_book.png'}
                                title={book.volumeInfo.hasOwnProperty("title") ?
                                    book.volumeInfo.title : ''}
                                authors={book.volumeInfo.hasOwnProperty("authors") ?
                                    book.volumeInfo.authors : ['']}
                                categories={book.volumeInfo.hasOwnProperty("categories") ?
                                    book.volumeInfo.categories : ''} />
                        </div>
                    ))}
                </div>,
                <button key={'btn_pag'} onClick={() => (loadMoreData(dispatchInput, page), setPage(page + 1))}>Load More</button>]
                : <h2>Loading</h2>}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        data: state.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (dispatchInput, page) => dispatch(fetchData(dispatchInput + `&maxResults=30&startIndex=${page * 30}`)),
        loadMoreData: (dispatchInput, page) => dispatch(loadMoreData(dispatchInput + `&maxResults=30&startIndex=${page * 30}`)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);