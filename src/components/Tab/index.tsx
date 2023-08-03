import { ButtonHTMLAttributes } from 'react'

//styles
import styles from './Tab.module.scss'

interface ITabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string,
    active: boolean
}

const Tab: React.FC<ITabProps> = ({ title, active, ...props }) => {
    return (
        <button className={`${styles.tab} ${active && styles.tab__active}`} {...props}>
            {title}
        </button>
    )
}

export default Tab