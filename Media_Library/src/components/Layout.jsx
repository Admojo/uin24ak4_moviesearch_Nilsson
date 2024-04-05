
import { Link } from "react-router-dom";

export default function Layout({children}){

    return(
        <>
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="search">Search</Link></li>
                </ul>
            </nav>
        </header>
        <main>
            {/* Children: Når komponenten <Layout> blir benyttet, vil plassering av {children} her skriver ut contents?  */}
            {children}
        </main>
        <footer>Footer</footer>
        </>
    )
}