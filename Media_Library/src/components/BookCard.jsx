import PropTypes from 'prop-types'

// Info om hver enkelt bok: Søkeresultater skal vise tittel, første år boken er publisert, forfatter, gjennomsnittlig rating 
// og en knapp som leder til et Amazon.com-søk (ved hjelp av feltet amazon_id i APIet og URL-strukturen https://www.amazon.com/s?k=0395082544) 
// i en fornuftig HTML-struktur.
export default function BookCard({key, title, first_publish_year, author_name, ratings_average, coverImage, isbn}){
    
    // console.log("Key:", key)
    // console.log("Book card title:", title)

    return(
        <>
        {/* <div className="book-item-wrapper"> */}
            <article className="book-card" key={key}>
                <section className="book-cover">
                    <img src={`https://covers.openlibrary.org/b/id/${coverImage}-M.jpg`} alt={title}/>
                </section>
                <section className="book-redirect">
                    {isbn == null ? console.log("Ingen ISBN Funnet") : <a href={`https://www.amazon.com/s?k=${isbn?.[0]}`}
                    className="button-54" role="button"> Read More</a>}
                </section>
                <section className="book-redirect">
                    {isbn == null ? console.log("Ingen ISBN Funnet") : <a href={`https://www.amazon.com/s?k=${isbn?.[0]}`}
                    className="button-54" role="button"> Add to My Bookshelf</a>}
                </section>
                <section className="book-redirect">
                    {isbn == null ? console.log("Ingen ISBN Funnet") : <a href={`https://www.amazon.com/s?k=${isbn?.[0]}`}
                    className="button-54" role="button"> Buy on Amazon</a>}
                </section>
                <section className="book-properties">
                    <h3>{title}</h3>
                    <h4>Author: {author_name}</h4>
                    <h5>First publish year: {first_publish_year}</h5>
                    {ratings_average == null ? <p>Average rating: none</p> : <p>Average rating: {ratings_average}</p>} 
                </section>
            </article>
        {/* </div> */}
        </>
    )
}

 
 BookCard.propTypes = {
    key: PropTypes.string, //Usikker på om det blir riktig håndtering av this.id
    title: PropTypes.string.isRequired,
    first_publish_year: PropTypes.number.isRequired,
    author_name: PropTypes.array,
    ratings_average: PropTypes.number,
    coverImage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isbn: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
    }
    
