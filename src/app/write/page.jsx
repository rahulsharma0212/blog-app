'use client';

import Image from 'next/image';
import styles from './writePage.module.css';
import { useEffect, useState } from 'react';
/* import ReactQuill from 'react-quill'; */
import 'react-quill/dist/quill.bubble.css';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from 'firebase/storage';
import { app } from '@/utils/firebase';
import dynamic from 'next/dynamic';

const WritePage = () => {
    const { status } = useSession();
    const router = useRouter();
    const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

    const [isOpen, setIsOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [categories, setCategories] = useState([]);
    const [media, setMedia] = useState();
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const [catSlug, setCatSlug] = useState('');

    useEffect(() => {
        const storage = getStorage(app);
        const upload = () => {
            const name = new Date().getTime() + file.name;
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {},
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        (downloadURL) => {
                            setMedia(downloadURL);
                        },
                    );
                },
            );
        };

        file && upload();
    }, [file]);

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/');
        }
    }, [status]);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`/api/categories`);
                const categories = await res.json();
                setCategories(categories);
            } catch (error) {
                console.log('🚀 ~ file: page.jsx:77 ~ error:', error);
            }
        })();
    }, []);

    const slugify = (str) =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');

    const handleSubmit = async () => {
        const res = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({
                title,
                desc: value,
                img: media,
                slug: slugify(title),
                catSlug: catSlug || 'style', //If not selected, choose the general category
            }),
        });

        if (res.status === 200) {
            const data = await res.json();
            router.push(`/posts/${data.slug}`);
        }
    };

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
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <select
                        className={styles.select}
                        onChange={(e) => setCatSlug(e.target.value)}
                    >
                        {categories.map(({ id, slug }) => {
                            return (
                                <option
                                    className={styles.option}
                                    value={slug}
                                    key={id}
                                >
                                    {slug}
                                </option>
                            );
                        })}
                    </select>
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
                                <input
                                    type="file"
                                    id="image"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: 'none' }}
                                />
                                <button className={styles.addButton}>
                                    <label htmlFor="image">
                                        <Image
                                            src="/image.png"
                                            alt=""
                                            width={16}
                                            height={16}
                                        />
                                    </label>
                                </button>
                                <button className={styles.addButton}>
                                    <Image
                                        src="/external.png"
                                        alt=""
                                        width={16}
                                        height={16}
                                    />
                                </button>
                                <button className={styles.addButton}>
                                    <Image
                                        src="/video.png"
                                        alt=""
                                        width={16}
                                        height={16}
                                    />
                                </button>
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
                    <button className={styles.publish} onClick={handleSubmit}>
                        Publish
                    </button>
                </div>
            )}
        </>
    );
};

export default WritePage;
