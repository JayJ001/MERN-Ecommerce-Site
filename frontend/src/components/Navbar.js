import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return (
        <header>
            <div className="container">
                <div className="logo-cont">
                    <Link to='/'>
                        <img className="logo" src="images/home/logo.avif" />
                    </Link>
                </div>
                <ul>
                    <Link to='/'>
                        Home
                    </Link>
                    <Link to='/shop'>
                        Store
                    </Link>
                    {!user &&
                        <Link to='/login'>
                            Login
                        </Link>
                    }
                    {user &&
                        <Link onClick={handleClick}>
                            Log out
                        </Link>
                    }
                </ul>
                <Link to='/cart' className='checkout-a' >
                    <img className="checkout" src='images/icons/cart.png' />
                </Link>
            </div>
        </header>
    )
}

export default Navbar