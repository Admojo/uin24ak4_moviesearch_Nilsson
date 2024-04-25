
import { Link } from "react-router-dom";
import Button from "./Button";
// import SearchBar from "./SearchBar";

export default function Layout({children}){

    return(
        <>
        <header>
            <nav className="header-menu">
                <ul>
                    {/* <li><Link to="/">Home</Link></li>
                    <li><Link to="search">Search</Link></li> */}
                    <li><Button buttonText="Log In" linkTo="/login" /></li>
                    <li><Button buttonText="Home" linkTo="/" /></li>
                    <li><Button buttonText="Search" linkTo="/search" /></li>
                    <li><Button buttonText="My BookShelf" linkTo="/mybookshelf" /></li>
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