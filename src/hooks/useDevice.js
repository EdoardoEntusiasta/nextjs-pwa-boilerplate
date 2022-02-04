import { useState, useEffect } from 'react';



export const useDevice = () => {

    const [deviceInfo, setDeviceInfo] = useState({
        type: undefined,
        os: undefined,
        browser: undefined,
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const getDeviceInfo = () => {
                const useragent = navigator.userAgent, 
                    platform = navigator.userAgentData.platform;

                const getType = () => {

                    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(useragent)) {
                        return 'tablet';
                    }

                    if (
                        /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
                            useragent
                        )
                    ) {
                        return 'mobile';
                    }

                    return 'desktop';
                };

                const getOs = () => {
                    if (/(Macintosh|MacIntel|MacPPC|Mac68K)/i.test(platform)) {
                        return 'mac os';
                    }
                    if (/(iPhone|iPod|iPad)/i.test(platform)) {
                        return 'ios';
                    }
                    if (/(android)/i.test(platform)) {
                        return 'android';
                    }
                    if (/(Windows|WinCE)/i.test(platform)) {
                        return 'windows';
                    }
                    return null;
                };

                const getBrowser = () => {
                    if (/(Opera)/i.test(useragent)) {
                        return 'opera';
                    }
                    if (/(Chrome)/i.test(useragent)) {
                        return 'chrome';
                    }
                    if (/(Safari)/i.test(useragent)) {
                        return 'safari';
                    }
                    if (/(Firefox)/i.test(useragent)) {
                        return 'firefox';
                    }
                    if (/(Edge)/i.test(useragent)) {
                        return 'edge';
                    }
                    return null;
                };

                setDeviceInfo({
                    type: getType(),
                    os: getOs(),
                    browser: getBrowser(),
                });
            };
            window.addEventListener('DOMContentLoaded', getDeviceInfo);
            getDeviceInfo();

            return () => window.removeEventListener('DOMContentLoaded', getDeviceInfo);
        }
    }, []);

    return deviceInfo;
};
