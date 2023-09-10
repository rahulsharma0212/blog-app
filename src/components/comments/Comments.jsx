'use client';
import Image from 'next/image';
import styles from './comments.module.css';
import Link from 'next/link';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message);
    }
    return data;
};

const Comments = ({ postSlug }) => {
    const { status } = useSession();

    const { data, isLoading, mutate } = useSWR(
        `/api/comments?postSlug=${postSlug}`,
        fetcher,
    );

    const [desc, setDesc] = useState('');

    const handleSubmit = async () => {
        await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({
                desc,
                postSlug,
            }),
        });
        mutate();
    };
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === 'authenticated' ? (
                <div className={styles.write}>
                    <textarea
                        placeholder="Write a comment..."
                        className={styles.input}
                        onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                    <button className={styles.button} onClick={handleSubmit}>
                        Send
                    </button>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}
            <div className={styles.comments}>
                {isLoading
                    ? 'loading'
                    : data?.map((item, idx) => (
                          <div className={styles.comment} key={idx}>
                              <div className={styles.user}>
                                  {item?.user?.image && (
                                      <Image
                                          src={item.user.image}
                                          alt=""
                                          width={50}
                                          height={50}
                                          className={styles.image}
                                      />
                                  )}
                                  <div className={styles.userInfo}>
                                      <span className={styles.username}>
                                          {item.user.name}
                                      </span>
                                      <span className={styles.date}>
                                          {new Date(item.createdAt)
                                              .toLocaleString()
                                              .replace(/\//g, '-')}
                                      </span>
                                  </div>
                              </div>
                              <p className={styles.description}>{item.desc}</p>
                          </div>
                      ))}
            </div>
        </div>
    );
};

export default Comments;
