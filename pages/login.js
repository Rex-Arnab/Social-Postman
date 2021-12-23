import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import axios from 'axios'

export function login() {
    const router = useRouter()
    const [data, setData] = useState({
        username: '',
        password: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const checkLogin = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(async () => {
             const res = await axios.post('http://localhost:4000/auth/login', data)
            if (res.status === 200) {
                localStorage.setItem('token', res.data.token)
                router.push('/dashboard')
            }
            setIsLoading(false)
        }, 2000);
    }

    return (
        <div className="container">
        <Head>
                <link rel="stylesheet" href="https://unpkg.com/chota@latest" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css" />
      </Head>
        <div className="hero is-full-screen">
                <nav className="tabs is-center">
                    <Link href='/login'>
                        <a>Login</a>
                    </Link>
                    <Link href='/register'>
                        <a>Signup</a>
                    </Link>
            </nav>
            <div className="logo is-center is-vertical-align">
               <Image src="/logo.png" alt="logo" width={1200} height={200} />
            <h3>A Social Media Scheduler.</h3>
                <h3>Login Now</h3>
                <form action="login" method="post">
                    <div className="field">
                        <label className="label">Username</label>
                        <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    value={data.username}
                                    onChange={(e) => setData({ ...data, username: e.target.value })}
                                />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input
                                className="input"
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={data.password}
                                onChange={(e) => setData({ ...data, password: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="field is-center" style={{ "margin": "2rem"}}>
                        <div className="control">
                                <button className="button secondary is-primary" onClick={checkLogin}>
                                    {isLoading ? <i className="fas fa-spinner fa-spin"></i> : "Login"}
                                </button>
                        </div>
                    </div>
                </form>
            </div>
           
        </div>
    </div>
    )
}

export default login
