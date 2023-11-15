import styles from './BookCard.module.scss'

const BookCard = ({
    title,
    authors,
    categories,
    imgURL,
}) => {

    return (
        <>
            <img src={imgURL}/>
            <div className={styles.info}>
                <p className={styles.info_categories}>{categories[0]}</p>
                <p className={styles.info_title}>{title}</p>
                <p className={styles.info_authors}>
                {authors.map((text, index) => (
                    index !== authors.length - 1 ? 
                    text + ', ' : text
                )
                )}
                </p>
            </div>
        </>
    )
}

export default BookCard