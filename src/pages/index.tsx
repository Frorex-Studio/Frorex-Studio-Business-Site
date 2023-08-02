import { Michroma } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

//styles
import styles from '@/styles/Home.module.scss'

//components
import Header from '@/components/Header'
import Tab from '@/components/Tab'

//dictionary
import { services, achievements, audiences } from '@/dictionary'

//icons
import ArrowRight from '@/assets/icons/arrow-right.svg'

const michroma = Michroma({ subsets: ['latin'], weight: ['400'] })

const Home: React.FC = () => {
    const sidebarMenu = [
        'All', 'Website', 'Mobile App',
        'UX / UI', 'Poster', 'Social Media'
    ];

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className={styles.home}>
            <Header
                variant='primary'
                title={
                    <h1>
                        We are <span>Digital product design</span> studio
                    </h1>
                }
            />
            <div className="container">
                <section className={styles.home__studio}>
                    <div className={styles.home__studio__wrapper}>
                        <div className={styles.home__studio__left}>
                            <h2>About Us</h2>
                            <p>
                                We specialize in creating remarkable digital experiences that
                                captivate audiences and drive business growth. With our team of talented designers,
                                developers, and strategists, we transform ideas into stunning realities.
                                Discover how our expertise and passion can elevate your brand and propel you towards success.
                            </p>
                        </div>
                        <div className={styles.home__studio__right}>
                            <h3 className={michroma.className}>
                                Welcome to our Digital Product Design Studio, where innovation meets craftsmanship.
                            </h3>
                            <div className={styles.home__studio__right__achievements}>
                                <ul>
                                    {achievements.map((achievement, index) => (
                                        <li key={index}>
                                            <div>
                                                <span>{achievement.value}</span>
                                                <p>{achievement.title}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.home__video}>
                    <Image src={'/video.jpg'} width={1800} height={900} alt='video' />
                </section>
                <section className={styles.home__services}>
                    <div className={styles.home__services__wrapper}>
                        <div className={styles.home__services__head}>
                            <h2>Services</h2>
                            <div className={styles.home__services__head__main}>
                                <h3 className={michroma.className}>Cutting-Edge Services to Elevate Your Digital Presence</h3>
                                <div className={styles.home__services__head__main__text}>
                                    <p>
                                        Our Digital Product Design Studio offers a comprehensive range
                                        of services designed to transform your ideas into exceptional digital experiences.
                                        With our expert team of designers, developers, and strategists, we deliver innovative
                                        solutions tailored to your unique needs.
                                    </p>
                                    <p>
                                        From user-centric design to mobile app development and UX/UI optimization,
                                        we have the expertise to help you stand out in the digital landscape.
                                        Explore our services below and unlock the full potential of your brand.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <ul className={styles.home__services__list}>
                            {services.map((service, index) => (
                                <li key={index} className={michroma.className}>
                                    <div className={styles.home__services__list__item}>
                                        <span>{index + 1}</span>
                                        <h4>{service.title}</h4>
                                        <p>{service.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.home__services__hireUs}>
                            <Link href='#' className={michroma.className}>
                                <span>
                                    Hire Us
                                </span>
                                <ArrowRight />
                            </Link>
                        </div>
                    </div>
                </section>
                <section className={styles.home__experiences}>
                    <div className={styles.home__experiences__wrapper}>
                        <h3 className={michroma.className}>
                            We specialize in creating remarkable digital experiences
                            that captivate audiences and drive business growth.
                        </h3>
                        <div className={styles.home__experiences__audiences}>
                            <p>
                                With our team of talented designers, developers, and strategists,
                                we transform ideas into stunning realities.
                                Discover how our expertise and passion can elevate your brand
                                and propel you towards success.
                            </p>
                            <ul>
                                {audiences.map((audience, index) => (
                                    <li key={index}>
                                        <Link href={audience.href}>
                                            {audience.icon}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
                <section className={styles.home__projects}>
                    <div className={styles.home__projects__wrapper}>
                        <div className={styles.home__projects__head}>
                            <h2>Our Projects</h2>
                            <div className={styles.home__projects__head__text}>
                                <h3 className={michroma.className}>
                                    At our Digital Product Design Studio,
                                    we take pride in our portfolio of successful projects across different industries.
                                </h3>
                                <p>
                                    We are passionate about delivering outstanding results that exceed client expectations.
                                    Contact us today to discuss your project and join our list of satisfied clients.
                                </p>
                            </div>
                        </div>
                        <div className={styles.home__projects__main}>
                            <ul>
                                {sidebarMenu.map((item, index) => (
                                    <li key={index}>
                                        <Tab
                                            title={item}
                                            active={index === activeTab}
                                            onClick={() => setActiveTab(index)}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home