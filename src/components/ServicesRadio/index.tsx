import { InputHTMLAttributes, forwardRef } from 'react'

//styles
import styles from './ServiceRadio.module.scss'

interface IServiceRadioProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string
}

const ServiceRadio = forwardRef<HTMLInputElement, IServiceRadioProps>(({ title, ...props }, ref) => {
    return (
        <label htmlFor={title} className={styles.radio}>
            <input id={title} type="radio" ref={ref} {...props} />
            <span>{title}</span>
        </label>
    )
})

export default ServiceRadio