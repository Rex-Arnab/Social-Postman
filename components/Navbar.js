import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="tabs is-center">
            <Link href="/dashboard">
                    <a >Home</a>
                </Link>
                <Link href="/setting">
                    <a >Setting</a>
                </Link>
                <Link href="/">
                    <a >Logout</a>
                </Link>
        </nav>
    )
}
