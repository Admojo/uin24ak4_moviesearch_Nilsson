import { Link } from "react-router-dom";

// Info om hver enkelt bok: Søkeresultater skal vise tittel, første år boken er publisert, forfatter, gjennomsnittlig rating 
// og en knapp som leder til et Amazon.com-søk (ved hjelp av feltet amazon_id i APIet og URL-strukturen https://www.amazon.com/s?k=0395082544) 
// i en fornuftig HTML-struktur.
export default function BookCard({keyBook, title, first_publish_year, author_name, ratings_average, coverImage, isbn}){
    
    return(
        <>
             {/* <article>
            <h3>{title}</h3>
            <p>{ingress}</p>
            <Link to="">{category}</Link>
            <Link to={JSON.stringify(id)}>Read more</Link>
        </article> */}
        <article className="card" key={this.keyBook}>
            <h3>{this.title}</h3>
            <p>First publish year: {this.first_publish_year}</p>
            <p>Author: {author_name}</p>
            {ratings_average == null ? <p>Average rating: none</p> : <p>Average rating: {ratings_average}</p>} 
            {isbn == null ? "" : <a href={`https://www.amazon.com/s?k=${isbn?.[0]}`}>Show in Amazon</a>}
            <img src={`https://covers.openlibrary.org/b/id/${coverImage}-L.jpg`} alt={title}/>
        </article>
        </>
       


    )
}