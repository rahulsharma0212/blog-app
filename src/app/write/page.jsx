'use client';

import Image from 'next/image';
import styles from './writePage.module.css';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const WritePage = () => {
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('');

    const { status } = useSession();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/');
        }
    }, [status]);

    return (
        <>
            {status === 'loading' && (
                <div className={styles.loading}>Loading...</div>
            )}
            {status === 'authenticated' && (
                <div className={styles.container}>
                    <input
                        type="text"
                        placeholder="Title"
                        className={styles.input}
                    />
                    <div className={styles.editor}>
                        <button
                            className={styles.button}
                            onClick={() => setIsOpen((e) => !e)}
                        >
                            <Image
                                src="/plus.png"
                                alt=""
                                width={16}
                                height={16}
                            />
                        </button>
                        {isOpen && (
                            <div className={styles.add}>
                                <div className={styles.addButton}>
                                    <Image
                                        src="/image.png"
                                        alt=""
                                        width={16}
                                        height={16}
                                    />
                                </div>
                                <div className={styles.addButton}>
                                    <Image
                                        src="/external.png"
                                        alt=""
                                        width={16}
                                        height={16}
                                    />
                                </div>
                                <div className={styles.addButton}>
                                    <Image
                                        src="/video.png"
                                        alt=""
                                        width={16}
                                        height={16}
                                    />
                                </div>
                            </div>
                        )}
                        <ReactQuill
                            className={styles.textArea}
                            theme="bubble"
                            value={value}
                            onChange={setValue}
                            placeholder="Tell your story..."
                        />
                    </div>
                    <button className={styles.publish}>Publish</button>
                </div>
            )}
        </>
    );
};

export default WritePage;