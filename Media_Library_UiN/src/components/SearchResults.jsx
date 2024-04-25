import BookCard from "./BookCard";
// import BookCards from "./BookCards";
import PropTypes from 'prop-types'

// Lister opp søkeresultater i "Bookcard"
export default function SearchResults ({content, title}) {

    const allBooks = content?.docs;
    // console.log("SearchResults:", content?.docs)

    return (
    <>
        
         {/* Vise overskrift etter at søk er gjort: Søkereulstater for: "query" - vil alltid innfri betingelse, 
        fordi james bond er satt som default i useState */}
        <div className='search-result-bar'>{title == null ? <h3> Populære nå </h3> : <h3> Showing results for: {title} </h3>  }</div>
        <section className='library'>
        <span className='book-item-wrapper'>
            {allBooks?.map((singleBook, id) => 
                <li key={id}>
                    <BookCard key={singleBook?._version_} 
                    title={singleBook?.title} 
                    first_publish_year={singleBook?.first_publish_year}
                    author_name={singleBook?.author_name}
                    ratings_average={singleBook?.ratings_average} 
                    coverImage={singleBook?.cover_i}
                    isbn={singleBook?.isbn}>
                    </BookCard>
                </li>)
            }
        </span>
        </section>
    </>
    )
}

 //Definere Props
 SearchResults.propTypes = {
    content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    title: PropTypes.string
    }
