import BookCards from "./BookCards"
import PropTypes from 'prop-types'

export default function BookShelf ({content, title}) {

    const allBooks = content?.docs;

    return(
        <>
            <h1> Popular right now</h1>
            <div className='search-result-bar'>{title == null ? <h3> Populære nå </h3> : <h3> Showing results for: {title} </h3>  }</div>
            <section className='bookshelf'>
                <span className='kort'>{allBooks?.map((singleBook, id) => 
                <li className='pakk' key={id}>
                    <BookCards key={singleBook?._version_} 
                    title={singleBook?.title} 
                    first_publish_year={singleBook?.first_publish_year}
                    author_name={singleBook?.author_name}
                    ratings_average={singleBook?.ratings_average} 
                    coverImage={singleBook?.cover_i}
                    isbn={singleBook?.isbn}>
                    </BookCards>
                </li>)
                }
                </span>
        </section>
    
        </>
    )
}

//Definere Props
BookShelf.propTypes = {
    content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    title: PropTypes.string
    }