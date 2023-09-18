import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="intro-header">
            <ul>
                <li>
                    <Link to="/cv">
                        <p>个人主页</p>
                        <p className="p-size-12">Self Introduction</p>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;
