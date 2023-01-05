import {useState, UseEffect, useEffect} from 'react'
import Loading from 'react-loading'

const loadingGifs = [
    '../loading-images/l1.gif',
    '../loading-images/l2.gif',
    '../loading-images/l3.gif',
    '../loading-images/l4.gif',
    '../loading-images/l5.gif',
    '../loading-images/l6.gif',
    '../loading-images/l7.gif',
    '../loading-images/l8.gif',
    '../loading-images/l9.gif',
    '../loading-images/l10.gif',
    '../loading-images/l11.gif',
    '../loading-images/l12.gif',
    '../loading-images/l13.gif',
    '../loading-images/l14.gif',
    '../loading-images/l15.gif',
]

const LoadingPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const loadingGifs = loadingGifs[Math.floor(Math.random() * loadingGifs.length)]

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false)
        }, 5000);
        
        return () => clearTimeout(timeout)
    }, [])
    
    if (isLoading) {
        return (
            <>
                <div>
                    <loadingGifs src={loadingGifs} />
                </div>
            </>
        )
    }
}

export default LoadingPage