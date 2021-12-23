import Head from 'next/head'
import { useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'

export default function addPost() {
    const [show, setShow] = useState('')
    const [post, setPost] = useState({
        title: '',
        message: '',
        content_type: 0,
        file: 'none'
    })
    const [postData, setPostData] = useState({
        uid: 1,
        type: '',
        created_at: '',
        status: 'Pending',
        has_media: 0
    })
    const [isLoading, setIsLoading] = useState(false)
    const showFileInfo = (e) => {
        const { type, name, size } = e.target.files[0];
        if (type == "image/jpeg" || type == "image/png") {
            console.log(`${name} (${size} bytes)`);
        } else {
            console.log(type, size);
        }
    }
    const addPost = async (e) => {
        const formData = new FormData();
        e.preventDefault()
        setIsLoading(true)
        const res = await axios.post(`http://localhost:4000/api/${postData.type}`, { ...postData, post })
        if (res.status === 200) {
            console.log(res);
            alert(res.data.message)
            setShow('success')
            setIsLoading(false)
        }
    }

    return (
        <div className="container">
            <Head>
                <meta charset="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="stylesheet" href="https://unpkg.com/chota@latest" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css" />
            </Head>
        <div className="hero is-full-screen">
            <Navbar />
            <section>
                <h2>Add a new post</h2>
                <div className="card">
                    <h3>Select Your Platform</h3>
                    <div className="social-media-choice">
                            <div>
                                <i
                                    className="fab fa-facebook fa-5x facebook"
                                    onClick={() => {
                                        setShow('facebook')
                                        setPostData({ ...postData, type: 'facebook' })
                                    }}></i></div>
                            <div><i className="fab fa-instagram fa-5x instagram" onClick={() => {
                                setShow('instagram')
                                setPostData({ ...postData, type: 'instagram' })
                            }}></i></div>
                            <div><i className="fab fa-linkedin fa-5x linkedin" onClick={() => {
                                setShow('linkedin')
                                setPostData({ ...postData, type: 'linkedin' })
                            }}></i></div>
                            <div><i className="fab fa-twitter fa-5x twitter" onClick={() => {
                                setShow('twitter')
                                setPostData({ ...postData, type: 'twitter' })
                            }}></i></div>
                            <div><i className="fab fa-reddit fa-5x reddit" onClick={() => {
                                setShow('reddit')
                                setPostData({ ...postData, type: 'reddit' })
                            }}></i></div>
                    </div>
                </div>
            </section>

                {show && (
                    <section>
                        <h2 id="platformName">Post on {show[0].toUpperCase() + show.substring(1)}</h2>
                        <form>
                        <div className="row">
                            <div className="col-3 card">
                                    <input type="hidden" name="content_type" value={ postData.content_type}/>
                                    <label>Enter Title</label>
                                    <input type="text" placeholder="title" name="title" value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })}/>
                                    <label>Enter Time</label>
                                    <input type="datetime-local" placeholder="time" name="post_at"  value={ postData.created_at } onChange={(e) => setPostData({ ...postData, created_at: e.target.value })}/>
                                    {/* <input type="file" name="content_media" onChange={showFileInfo} /> */}
 
                                    <button
                                        className="button dark"
                                        style={{ "marginTop": "2rem", "width": "100%" }}
                                        onClick={addPost}>
                                            {isLoading ? 'Loading...' : 'Post 🕓'}
                                        </button>
                                </div>
                                <div className="col-9">
                                    <label>Enter Description</label>
                                    <textarea name="desc" id="" cols="30" rows="10" placeholder="what is on your mind?" onChange={(e) =>  setPost({ ...post, message: e.target.value })}></textarea>
                                </div>
                            </div>
                        </form>
                    </section>
                )}

        </div>
    </div>
    )
}