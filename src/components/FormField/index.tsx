import { InputHTMLAttributes, forwardRef } from 'react'

//styles
import styles from './FormField.module.scss'

interface IFormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string
}

const FormField = forwardRef<HTMLInputElement, IFormFieldProps>(({ error, ...props }, ref) => {
    return (
        <div className={styles.field}>
            <input type='text' {...props} ref={ref} />
            {error && <span className={styles.field__error}>{error}</span>}
        </div>
    )
});

export default FormField