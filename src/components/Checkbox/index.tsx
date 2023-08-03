import { InputHTMLAttributes } from 'react'

//styles
import styles from './Checkbox.module.scss'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string
}

const Checkbox: React.FC<CheckboxProps> = ({ title, ...props }) => {
    return (
        <div className={styles.checkbox}>
            <input type='checkbox' id={title} {...props} />
            <label htmlFor={title}>{title}</label>
        </div>
    )
}

export default Checkbox