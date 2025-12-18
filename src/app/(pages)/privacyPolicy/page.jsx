'use client'

import React from 'react'
import { Container } from 'react-bootstrap'
import { ServicesHero } from '../../components/ServicesHero'
import { useLanguage } from '../../Context/LanguageContext'
import { privacyPolicyTranslations } from '../../translations/privacyPolicyTranslations'

const PrivacyPolicy = () => {
    const { language } = useLanguage()
    const t = privacyPolicyTranslations[language] || privacyPolicyTranslations.English

    return (
        <>
            <ServicesHero
                title={t.hero.title}
                description={t.hero.description}
            />

            <section className="privacy-wrapper">
                <Container>
                    <div className="privacy-content">

                        <div className="privacy-section">
                            <h3>{t.introduction.heading}</h3>
                            <p>{t.introduction.para1}</p>
                            <p>{t.introduction.para2}</p>
                        </div>

                        <div className="privacy-section">
                            <h3>{t.dataCollection.heading}</h3>
                            <p>{t.dataCollection.para}</p>
                            <ul>
                                {t.dataCollection.list.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            <p>{t.dataCollection.bottomPara}</p>
                        </div>

                        <div className="privacy-section">
                            <h3>{t.useOfData.heading}</h3>
                            <p>{t.useOfData.intro}</p>
                            <ul>
                                {t.useOfData.list.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="privacy-section">
                            <h3>{t.contact.heading}</h3>
                            <p><strong>Email:</strong> {t.contact.email}</p>
                            <p><strong>Phone:</strong> {t.contact.phone}</p>
                            <p><strong>Address:</strong> {t.contact.address}</p>
                            <p><strong>Hours:</strong> {t.contact.hours}</p>
                        </div>

                    </div>
                </Container>
            </section>
        </>
    )
}

export default PrivacyPolicy
