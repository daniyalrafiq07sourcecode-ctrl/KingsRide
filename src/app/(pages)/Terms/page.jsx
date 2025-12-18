'use client'

import React from 'react'
import { Container } from 'react-bootstrap'
import { ServicesHero } from '../../components/ServicesHero'
import { useLanguage } from '../../Context/LanguageContext'
import { termsConditionsTranslations } from '../../translations/termsConditionsTranslations'

const TermsConditions = () => {
    const { language } = useLanguage()
    const t = termsConditionsTranslations[language] || termsConditionsTranslations.English

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
                            <h3>{t.cookies.heading}</h3>
                            <p>{t.cookies.para}</p>
                            <p className="privacy-subtitle">{t.cookies.subtitle}</p>
                            <ul>
                                {t.cookies.list.map((item, i) => (
                                    <li key={i}>
                                        <strong>{item.title}:</strong> {item.desc}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="privacy-section">
                            <h3>{t.thirdParty.heading}</h3>
                            <p>{t.thirdParty.para}</p>
                            <ul>
                                {t.thirdParty.list.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="privacy-section">
                            <h3>{t.rights.heading}</h3>
                            <p>{t.rights.para}</p>
                            <ul>
                                {t.rights.list.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="privacy-section no-border">
                            <h3>{t.contact.heading}</h3>
                            <p><strong>Email:</strong> {t.contact.email}</p>
                            <p><strong>Phone:</strong> {t.contact.phone}</p>
                            <p><strong>Address:</strong> {t.contact.address}</p>
                            <p><strong>Business Hours:</strong> {t.contact.hours}</p>
                        </div>

                    </div>
                </Container>
            </section>
        </>
    )
}

export default TermsConditions
