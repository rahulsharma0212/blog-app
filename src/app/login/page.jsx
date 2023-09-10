'use client';
import { signIn, useSession } from 'next-auth/react';
import styles from './loginPage.module.css';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const LoginPage = () => {
    const { status } = useSession();

    const router = useRouter();

    useEffect(() => {
        if (status === 'authenticated') {
            router.push('/');
        }
    }, [status]);

    return (
        <>
            {status === 'loading' && (
                <div className={styles.loading}>Loading...</div>
            )}
            {status === 'unauthenticated' && (
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <div
                            className={styles.socialButton}
                            onClick={() => signIn('google')}
                        >
                            Sign in with Google
                        </div>
                        <div className={styles.socialButton}>
                            Sign in with Github
                        </div>
                        <div className={styles.socialButton}>
                            Sign in with Facebook
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default LoginPage;
