import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import axios from 'axios'

const SlugPage = () => {
    const router = useRouter()
    const { slug } = router.query

    let [redirectUrl, setRedirectUrl] = useState([])

    useEffect(() => {
        if (slug != undefined && slug != "undefined") {
            axios.post('/api/url/get', {
                slug
            }).then(res => {
                console.log(res.data);
                setRedirectUrl(res.data.url)
                window.location.href = res.data.url
            })
        }
    }, [slug])

    return (
        <div className="p-4 sm:ml-64 h-screen">
            
        </div>
    )
}


export default SlugPage