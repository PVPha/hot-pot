import { useEffect } from "react"

const Home = () => {
    useEffect(() => {
        fetch('/api/hello').then(res => res.json()).then(res => {console.log(res);
        })
    }, [])
    return (
      <>
        <iframe src="https://www.youtube.com/?gl=VN" frameBorder="0" style={{width: '100%', height: '100vh'}}></iframe>
      </>
    );
}

export default Home