import React, { createContext, useContext, useEffect, useState } from 'react';

const ReCaptchaContext = createContext();
const SITE_KEY = process.env.REACT_APP_RECAPTCHA_KEY;

export function ReCaptchaProvider({ children }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Define callback before loading script
        window.onloadCallback = () => {
            console.log("reCAPTCHA script loaded");
            setIsLoaded(true);
        };

        // Create script element
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);

        // Cleanup
        return () => {
            document.head.removeChild(script);
            delete window.onloadCallback;
        };
    }, []);

    const executeReCaptcha = async (action) => {
        console.log("executeReCaptcha called", { isLoaded, action });
        if (!isLoaded) {
            throw new Error('reCAPTCHA has not loaded yet');
        }

        return new Promise((resolve, reject) => {
            try {
                window.grecaptcha.execute(SITE_KEY, { action }).then((token) => {
                    resolve(token);
                }).catch((err) => {
                    console.error("ReCAPTCHA execution error:", err);
                    reject(err);
                });
            } catch (error) {
                console.error("ReCAPTCHA execution error:", error);
                reject(error);
            }
        });
    };

    return (
        <ReCaptchaContext.Provider value={{ executeReCaptcha, isLoaded }}>
            {children}
            <div id="g-recaptcha" style={{ display: 'none' }}></div>
        </ReCaptchaContext.Provider>
    );
}

export function useReCaptcha() {
    return useContext(ReCaptchaContext);
}