import BookCard from "./BookCard";
import PropTypes from 'prop-types'
// Lister opp søkeresultater i "Bookcard"
export default function SearchResults ({content}) {

    //Definere Props
    SearchResults.propTypes = {
        content: PropTypes.object
    }
    const allBooks = content?.docs;
    console.log("SearchResults:", content?.docs)

    return (
    <>
        <h3 className="nude-background"> Populære nå </h3>
        <span>
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


  

