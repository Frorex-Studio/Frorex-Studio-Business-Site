import Link from 'next/link'

//styles
import styles from './Navbar.module.scss'

//icons
import LogoIcon from '@/assets/icons/logo.svg'
import EditIcon from '@/assets/icons/edit.svg'

const Navbar: React.FC = () => {
    const menu = [
        { title: 'Projects', href: '#' },
        { title: 'Services', href: '#' },
        { title: 'Process', href: '#' },
        { title: 'About', href: '#' },
        { title: 'Contact', href: '#' },
    ];

    return (
        <nav className={styles.navbar}>
            <div className='container'>
                <div className={styles.navbar__wrapper}>
                    <Link href='/' className={styles.navbar__logo}>
                        <LogoIcon />
                        <span>Frorex</span>
                    </Link>
                    <ul className={styles.navbar__menu}>
                        {menu.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <Link href='#' className={styles.navbar__talk}>
                        <span>Let's talk</span>
                        <div className={styles.navbar__talk__circle}>
                            <EditIcon />
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar