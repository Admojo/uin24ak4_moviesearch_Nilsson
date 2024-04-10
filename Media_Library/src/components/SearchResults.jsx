import BookCard from "./BookCard";
import PropTypes from 'prop-types'

// Lister opp søkeresultater i "Bookcard"
export default function SearchResults ({content, title}) {

    const allBooks = content?.docs;
    console.log("SearchResults:", content?.docs)
    console.log("SearchResults, content:", content)
    console.log("SearchResults, title:", title)

    return (
    <>
        <span className="search-result-list-wrapper">
        {/* Vise overskrift etter at søk er gjort: Søkereulstater for: "query" */}
        {title == null ? <h3> Populære nå </h3> : <h3> Search results for: {title} </h3>  }
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
    </>
    )
}

 //Definere Props
 SearchResults.propTypes = {
    content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    title: PropTypes.string
    }
