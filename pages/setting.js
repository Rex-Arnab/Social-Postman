import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Navbar from '../components/Navbar'

export default function setting() {
    const  [show, setShow] = useState('')
    return (
        <div>
            <div className="container">
                <Head>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="stylesheet" href="https://unpkg.com/chota@latest" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css" />
      </Head>
        <div className="hero is-full-screen">
            <Navbar />
            <section>
                <h2>Select a Platform</h2>
                <div className="card">
                    <div className="social-media-choice">
                        <div><i className="fab fa-facebook fa-5x facebook" onClick={() => setShow('facebook')}></i></div>
                        <div><i className="fab fa-instagram fa-5x instagram" onClick={() => setShow('instagram')}></i></div>
                        <div><i className="fab fa-linkedin fa-5x linkedin" onClick={() => setShow('linkedin')}></i></div>
                        <div><i className="fab fa-twitter fa-5x twitter" onClick={() => setShow('twitter')}></i></div>
                        <div><i className="fab fa-reddit fa-5x reddit" onClick={() => setShow('reddit')}></i></div>
                    </div>
                </div>
                    </section>
                    
                    {show && (
                    <section id="config" className="">
                        <h2 id="platformName">Config {show[0].toUpperCase() + show.substring(1)}</h2>
                        <div className="addNew" onClick="addNewAccount()"></div>
                        <form action="/setup" method="post" id="account_forum" className="hide">
                            <input type="hidden" id="platformType" name="type"/>
                            <div className="row is-center">
                                <div className="col-10 row">
                                <input type="hidden" name="content_type" value="1"/>
                                <label>Username</label>
                                <input type="text" placeholder="title" name="username"/>
                                <label>Password</label>
                                <input type="password" placeholder="title" name="password"/>
                                <div className="col-9">
                                    <button className="button dark" style={{"marginTop": "2rem", "width": "100%"}} type="submit">Save</button>
                                </div>
                                <div className="col-3">
                                    <a className="button dark" style={{"marginTop": "2rem", "width": "100%"}} onClick="testCred">▶️</a>
                                </div>
                                </div>
                            </div>
                        </form>
                    </section>
                )}
        </div>
    </div>
        </div>
    )
}