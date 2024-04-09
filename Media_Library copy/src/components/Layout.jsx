
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
            {/* Children er en place holder. Dersom Layout component benyttes som wrapper, vil siden vise innehol med
            standard oppsett som header og footer - men! alt mellom main-tagene endres, basert på gitte kriterier, pga plassering av {children} */}
            {children}
        </main>
        <footer>Footer</footer>
        </>
    )
}