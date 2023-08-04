import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import { michroma } from '@/pages';

//styles
import styles from './ContactForm.module.scss'

//components
import FormField from '../FormField';
import ServiceRadio from '../ServicesRadio';
import AddIcon from '../Icons/add';
import Checkbox from '../Checkbox';
import Button from '../Button';
import Radio from '../Radio';

//dictionary
import { budgets, servicesForm } from '@/dictionary';


const schema = yup.object({
    name: yup.string().required("Name field is required"),
    company: yup.string().optional(),
    phone: yup.string().optional(),
    email: yup.string().nullable().email().required("Email field is required"),
    service: yup.boolean().oneOf([true]).required(),
    budget: yup.mixed().oneOf([true, "true"]).required(),
    acceptTerms: yup.boolean().oneOf([true]).required("Please accept the terms")
}).required();

type FormData = yup.InferType<typeof schema>;

const ContactForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    console.log(errors);

    const onSubmit = (data: FormData) => {
        console.log(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.form__wrapper}>
                <div className={styles.form__section}>
                    <h4 className={michroma.className}>Your Contacts</h4>
                    <div className={styles.form__section__fields}>
                        <FormField
                            type='text'
                            placeholder='Name*'
                            {...register("name", { required: true })}
                            error={errors.name?.message}
                        />
                        <FormField
                            type='text'
                            placeholder='Company'
                            {...register("company", { required: true })}
                            error={errors.company?.message}
                        />
                        <FormField
                            type='tel'
                            placeholder='Number phone'
                            {...register("phone", { required: true })}
                            error={errors.phone?.message}
                        />
                        <FormField
                            type='email'
                            placeholder='E-mail*'
                            {...register("email", { required: true })}
                            error={errors.email?.message}
                        />
                    </div>
                </div>
                <div className={styles.form__section}>
                    <h4 className={michroma.className}>Services</h4>
                    <ul className={styles.form__section__services}>
                        {servicesForm.map((service, index) => (
                            <li key={index}>
                                <ServiceRadio title={service} {...register("service")} defaultChecked={index === 0} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.form__section}>
                    <h4 className={michroma.className}>Budget</h4>
                    <ul className={styles.form__section__budget}>
                        {budgets.map((budget, index) => (
                            <li key={index}>
                                <Radio
                                    {...register("budget")}
                                    title={budget}
                                    defaultChecked={index === 0}
                                    onChange={(e) => {
                                        const selectedBudget = e.target.value === "true";
                                        setValue("budget", selectedBudget);
                                    }}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.form__section}>
                    <h4 className={michroma.className}>Tell us about your task</h4>
                    <div className={styles.form__section__task}>
                        {/* <textarea></textarea> */}
                        <button className={styles.form__section__task__attach} type='button'>
                            <AddIcon />
                            Attach files...
                        </button>
                        <Checkbox
                            {...register("acceptTerms")}
                            title='By clicking the "Hire us" button, you agree to the Privacy Policy.'
                        />
                        <Button type='submit'>Hire Us</Button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ContactForm