
// Info om hver enkelt bok: Søkeresultater skal vise tittel, første år boken er publisert, forfatter, gjennomsnittlig rating 
// og en knapp som leder til et Amazon.com-søk (ved hjelp av feltet amazon_id i APIet og URL-strukturen https://www.amazon.com/s?k=0395082544) 
// i en fornuftig HTML-struktur.
export default function BookCard({key, title, first_publish_year, author_name, ratings_average, coverImage, isbn}){
    
    return(
        <>
        <article className="singleBookCard" key={key}>
            <h3>{title}</h3>
            <h4>Author: {author_name}</h4>
            <h5>First publish year: {first_publish_year}</h5>
            {ratings_average == null ? <p>Average rating: none</p> : <p>Average rating: {ratings_average}</p>} 
            {isbn == null ? "" : 
            <p><a href={`https://www.amazon.com/s?k=${isbn?.[0]}`}>Show in Amazon</a></p>}
            <img src={`https://covers.openlibrary.org/b/id/${coverImage}-L.jpg`} alt={title}/>
         </article>
        </>
    )
}