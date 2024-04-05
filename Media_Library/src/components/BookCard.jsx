import { Link } from "react-router-dom";

// Info om hver enkelt bok: Søkeresultater skal vise tittel, første år boken er publisert, forfatter, gjennomsnittlig rating 
// og en knapp som leder til et Amazon.com-søk (ved hjelp av feltet amazon_id i APIet og URL-strukturen https://www.amazon.com/s?k=0395082544) 
// i en fornuftig HTML-struktur.
export default function BookCard({title, category, ingress, id}){
    
    return(
        <article>
            <h3>{title}</h3>
            <p>{ingress}</p>
            <Link to="">{category}</Link>
            <Link to={JSON.stringify(id)}>Read more</Link>
        </article>
    )
}