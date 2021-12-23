/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'

export default function dashboard() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/api/posts/1').then(res => {
            console.log(resp);
            if(resp.status === 200) {
                setPosts(resp.data)
            }
        })
    }, [])
    return (
        <div className="container">
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/chota@latest" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css" />
      </Head>
        <div className="hero is-full-screen">
            <Navbar />
            <section>
                <nav className="nav">
                    <div className="nav-left">
                        <h2>Dashboard</h2>
                    </div>
                    <div className="nav-right">
                            <h1>
                                <Link href="/addPost">
                                    <a>🚀</a>
                                </Link>
                            </h1>
                    </div>
                    </nav>
                </section>
                
                <section className='is-vertical-align'>
                    <div className="row">
                    {(posts.length > 0) ? posts.map((post, index) => {
                        return (
                                <div className="col-3" key={index}>
                                    <div className="card">
                                        <div className="card-title">
                                            <h2>
                                                {post.type === 'facebook' && <i className="fab fa-facebook facebook"></i>}
                                                {post.type === 'twitter' && <i className="fab fa-twitter twitter"></i>}
                                                {post.type === 'instagram' && <i className="fab fa-instagram instagram"></i>}
                                                {post.type === 'linkedin' && <i className="fab fa-linkedin linkedin"></i>}
                                                {post.type === 'reddit' && <i className="fab fa-reddit reddit"></i>}
                                                {post.post.title}
                                        </h2>
                                        <span
                                            className="card-content">
                                            {post.status}
                                        </span>
                                        
                                            <p>{Date(Date.parse(post.created_at)) }</p>
                                        </div>
                                    </div>
                                </div>
                        )
                    }) : <h1>No posts yet</h1>}
                    </div>
                </section>

           

        </div>
    </div>
    )
}