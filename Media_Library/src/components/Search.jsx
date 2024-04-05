import { Outlet } from 'react-router-dom'

// Returnerer innhold, basert på hvilke komponenter som er wrappet inn under komponent <Search />
export default function Search(){
    
    return (
        <>
            <Outlet />
        </>
    )
}