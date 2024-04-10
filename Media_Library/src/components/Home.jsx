

import { Outlet } from "react-router-dom"
// import BookCards from "./BookCards"
// import BookShelf from "./BookShelf"
// import Search from "./Search"

// import BookShelf from "./BookShelf"

export default function Home(){

    console.log("Home")
    return (
        <>
            {/* <section>
                <h1>Home</h1> 
            </section> */}

             {/* <div className="card">
            <p><span>BOOK CARDS</span></p>
            <p><span>BOOK CARDS</span></p>
            <p><span>BOOK CARDS</span></p>
            <p><span>BOOK CARDS</span></p>
            </div> */}
            <main>
            <Outlet />
            </main>
            
        </>
   
)
}