import { ButtonHTMLAttributes } from 'react'

//styles
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children }) => {
    return (
        <button className={styles.button}>{children}</button>
    )
}

export default Button