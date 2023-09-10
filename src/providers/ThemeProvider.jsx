'use client';

import { ThemeContext } from '@/context/ThemeContext';
import { useContext, useEffect, useState } from 'react';

const ThemeProvider = ({ children }) => {
    const { theme } = useContext(ThemeContext);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return isMounted ? <div className={theme}>{children}</div> : null;
};

export default ThemeProvider;
