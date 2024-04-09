// import BookCards from "./BookCards"
import BookCard from "./BookCard";

// KOPI AV "searchresults", som lister opp søkeresultater i "bookcards"
export default function SearchResultsDefault ({content}) {


    const allBooks = content?.docs;
    console.log(content?.docs)

    return (
    <>

    {/* Dette innholdet bør egentlig bare vises, når det ikke er gjort et query i søkefeltet */}
        <h3 className="NudeBackground"> Populære nå </h3>
        <span className="display-Books">
        {allBooks?.map(singleBook => 
        <BookCard className="card" key={singleBook?._version_} title={singleBook?.title} first_publish_year={singleBook?.first_publish_year}
            author_name={singleBook?.author_name} ratings_average={singleBook?.ratings_average} coverImage={singleBook?.cover_i}
            isbn={singleBook?.isbn}>
        </BookCard>)}
        </span>
    </>
    )
    // return (
    //     <>
    //         <BookCards > </BookCards>
            
    //     </>
        
    // )
}

  

