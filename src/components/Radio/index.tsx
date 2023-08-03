import { InputHTMLAttributes } from 'react'

//styles
import styles from './Radio.module.scss'

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string
}

const Radio: React.FC<RadioProps> = ({ title, ...props }) => {
    return (
        <div className={styles.radio}>
            <input type="radio" id={title} {...props} />
            <label htmlFor={title}>{title}</label>
        </div>
    )
}

export default Radio