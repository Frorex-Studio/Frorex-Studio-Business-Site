import { Michroma } from 'next/font/google'
import Image from 'next/image'

//styles
import styles from './ProjectCard.module.scss'

type ProjectCardProps = {
    title: string,
    date: string,
    imageUrl: string,
    tags: string[]
}

const michroma = Michroma({ subsets: ['latin'], weight: ['400'] })

const ProjectCard: React.FC<ProjectCardProps> = ({ title, date, imageUrl, tags }) => {
    return (
        <article className={styles.card}>
            <Image
                width={700}
                height={700}
                src={imageUrl}
                alt={title}
            />
            <div className={styles.card__wrapper}>
                <div className={styles.card__content}>
                    <div className={styles.card__content__head}>
                        <p>{date}</p>
                        <h4 className={michroma.className}>{title}</h4>
                    </div>
                    <ul className={styles.card__content__tags}>
                        {tags.map((tag, index) => (
                            <li key={index}>
                                <span>{tag}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </article>
    )
}

export default ProjectCard