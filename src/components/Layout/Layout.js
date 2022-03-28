import { Link, Outlet} from 'react-router-dom'
import "./Layout.css"
const Layout = () => {

    return (
        <>
            <header>
                        <Link to={'/'}> SHARETRADE.com</Link>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    );

};

export  default Layout;