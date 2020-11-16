import React from 'react';

import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.util';

import { connect } from 'react-redux';

const HEADER = ({ currentUser }) => (
    <div className='header'>
        <Link to='/' className="logo-container">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/contact' className='option'>CONTACT</Link>
            {
                currentUser
                    ? <div className='option' onClick={
                        () => {
                            auth.signOut();
                            console.log("Signed out");
                        }
                    }>SIGN OUT</div>
                    : <Link className='option' to='/signIn'>SIGN IN</Link>
            }
        </div>
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(HEADER);