'use client';
import Link from 'next/link';
import styles from './authLink.module.css';
import { useState } from 'react';

const AuthLink = () => {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    //temporary
    const status = 'notauthenticated';
    return (
        <>
            {status === 'notauthenticated' ? (
                <Link href="/login" className={styles.link}>
                    Login
                </Link>
            ) : (
                <>
                    <Link href="/write" className={styles.link}>
                        Write
                    </Link>
                    <span className={styles.link}>Logout</span>
                </>
            )}
            <div
                className={styles.burger}
                onClick={() => setIsSideMenuOpen((e) => !e)}
            >
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {isSideMenuOpen && (
                <div className={styles.responsiveMenu}>
                    <Link href="/">HomePage</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    {status === 'notauthenticated' ? (
                        <Link href="/login">Login</Link>
                    ) : (
                        <>
                            <Link href="/write">Write</Link>
                            <span className={styles.link}>Logout</span>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default AuthLink;
