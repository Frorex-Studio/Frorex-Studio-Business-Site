import Link from 'next/link'
import { michroma } from '@/pages'

//styles
import styles from './Header.module.scss'

//components
import Navbar from '../Navbar'


export type THeaderProps = {
    variant: 'primary' | 'secondary',
    title: React.ReactNode,
    text?: string,
    tags?: string[]
}


const Header: React.FC<THeaderProps> = ({ variant, title, text, tags }) => {
    return (
        <header className={styles.header}>
            <Navbar />
            <div className='container'>
                <div className={styles.header__main}>
                    <div className={styles.header__main__left}>
                        <div className={michroma.className}>{title}</div>
                        {text && <p>{text}</p>}
                        {tags &&
                            <ul className={styles.header__main__left__tags}>
                                {tags.map((tag, index) => (
                                    <li key={index}>
                                        <span className={styles.header__main__left__tags__item}>
                                            {tag}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        }
                    </div>
                    {variant === 'primary' &&
                        <div className={styles.header__main__right}>
                            <p>We build high quality web and apps design for 3+ years</p>
                            <Link href='#'>Hire us</Link>
                        </div>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header