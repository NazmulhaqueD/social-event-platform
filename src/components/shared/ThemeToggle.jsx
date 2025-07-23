import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);
    // dark or light mode toggle implement here 
    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', isDark ? 'dark' : 'light')
    }, [isDark])

    return (
        <div>
            <input onClick={() => setIsDark(!isDark)} type="checkbox" defaultChecked className="toggle toggle-lg" />
        </div>
    );
};

export default ThemeToggle;