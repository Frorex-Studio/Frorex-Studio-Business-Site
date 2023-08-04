import { InputHTMLAttributes, forwardRef } from 'react'

//styles
import styles from './Checkbox.module.scss'

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string
}

const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(({ title, ...props }, ref) => {
    return (
        <div className={styles.checkbox}>
            <input type='checkbox' id={title} ref={ref} {...props} />
            <label htmlFor={title}>{title}</label>
        </div>
    )
})

export default Checkbox