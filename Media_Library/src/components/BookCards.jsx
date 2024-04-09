import { Link} from "react-router-dom"
import { useEffect, useState } from "react"

export default function BookCards({title}) {

    // const [result, setResult] = useState(null)

    // const getBook = async() =>{
    //     fetch(title)
    //     .then(response => response.json())
    //     .then(data => setResult(data))
    //     .catch(error => console.error(error));
    // }

    // console.log(result)

    // useEffect(()=>{
    //     getBook()
    // },[])


    // return (
    //     <>
    //         <h3><Link to={result?.title}>{result?.title}</Link></h3>
    //     </>
    // )

    const allBooks = title?.docs;
    console.log(title?.docs)

    return (
    <span className="display-Books">
        {allBooks?.map(singleBook => 
        <Bookcard className="card" 
            key={singleBook?._version_} 
            title={singleBook?.title} 
            first_publish_year={singleBook?.first_publish_year}
            author_name={singleBook?.author_name}
            ratings_average={singleBook?.ratings_average}
            coverImage={singleBook?.cover_i}
            isbn={singleBook?.isbn}>
        </Bookcard>)}
    </span>
    )
}