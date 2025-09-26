import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Pages imports
import HomePage from './pages/Home/HomePage'
import DirectoryPage from './pages/Directory/DirectoryPage'
import EnterprisePage from './pages/Enterprise/EnterprisePage'
import BlogPage from './pages/Blog/BlogPage'
import ArticlePage from './pages/Blog/ArticlePage'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import ResultsPage from './pages/Results/ResultsPage'
import CompanyProfilePage from './pages/CompanyProfile/CompanyProfilePage'
import ServicesPage from './pages/Services/ServicesPage'

const Router: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    {/* Page d'accueil */}
                    <Route path="/" element={<HomePage />} />

                    {/* Pages principales */}
                    <Route path="/annuaire" element={<DirectoryPage />} />
                    <Route path="/resultats" element={<ResultsPage />} />
                    <Route path="/entreprise/:companyId" element={<CompanyProfilePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/entreprise/:id" element={<EnterprisePage />} />

                    {/* Blog */}
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/blog/:slug" element={<ArticlePage />} />

                    {/* Authentification */}
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/auth/register" element={<Register />} />

                    {/* Pages statiques */}
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/about" element={<AboutPage />} />

                    {/* 404 */}
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

// Composants de pages simples
const ContactPage: React.FC = () => (
    <div style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8fafc',
        padding: '4rem 1rem'
    }}>
        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
            <h1 style={{
                fontSize: '3rem',
                fontWeight: 800,
                color: '#f97316',
                marginBottom: '1rem',
                background: 'linear-gradient(45deg, #f97316 0%, #fb923c 50%, #ea580c 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}>
                📞 Contact
            </h1>
            <p style={{
                fontSize: '1.2rem',
                color: '#6b7280',
                marginBottom: '2rem'
            }}>
                Contactez-nous pour toute question sur notre annuaire BTP au Sénégal
            </p>
            <div style={{
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(249, 115, 22, 0.1)'
            }}>
                <div style={{ marginBottom: '1rem' }}>
                    <strong style={{ color: '#f97316' }}>📧 Email:</strong> contact@btpsenegal.com
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <strong style={{ color: '#f97316' }}>📞 Téléphone:</strong> +221774424223
                </div>
                <div>
                    <strong style={{ color: '#f97316' }}>📍 Adresse:</strong> Dakar, Sénégal
                </div>
            </div>
        </div>
    </div>
)

const AboutPage: React.FC = () => (
    <div style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8fafc',
        padding: '4rem 1rem'
    }}>
        <div style={{ textAlign: 'center', maxWidth: '800px' }}>
            <h1 style={{
                fontSize: '3rem',
                fontWeight: 800,
                color: '#f97316',
                marginBottom: '1rem',
                background: 'linear-gradient(45deg, #f97316 0%, #fb923c 50%, #ea580c 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}>
                🏗️ À propos
            </h1>
            <div style={{
                padding: '3rem',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(249, 115, 22, 0.1)',
                textAlign: 'left'
            }}>
                <p style={{
                    fontSize: '1.2rem',
                    color: '#4b5563',
                    lineHeight: '1.7',
                    marginBottom: '2rem'
                }}>
                    <strong style={{ color: '#f97316' }}>BTP Sénégal</strong> est la plateforme de référence
                    pour trouver les meilleurs professionnels du bâtiment et des travaux publics au Sénégal.
                </p>
                <p style={{
                    fontSize: '1.1rem',
                    color: '#6b7280',
                    lineHeight: '1.6',
                    marginBottom: '2rem'
                }}>
                    Notre mission est de connecter les particuliers et entreprises avec des professionnels
                    qualifiés et certifiés dans tout le pays. Plus de 1000 entreprises nous font confiance
                    pour développer leur activité.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
                        <h3 style={{ color: '#f97316', marginBottom: '0.5rem' }}>Notre Vision</h3>
                        <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                            Être la référence BTP au Sénégal
                        </p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
                        <h3 style={{ color: '#f97316', marginBottom: '0.5rem' }}>Nos Valeurs</h3>
                        <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                            Confiance, qualité et transparence
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

const NotFoundPage: React.FC = () => (
    <div style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8fafc',
        padding: '4rem 1rem'
    }}>
        <div style={{ textAlign: 'center' }}>
            <h1 style={{
                fontSize: '6rem',
                fontWeight: 800,
                color: '#f97316',
                marginBottom: '1rem'
            }}>
                404
            </h1>
            <h2 style={{
                fontSize: '2rem',
                color: '#4b5563',
                marginBottom: '1rem'
            }}>
                Page non trouvée
            </h2>
            <p style={{
                fontSize: '1.1rem',
                color: '#6b7280',
                marginBottom: '2rem'
            }}>
                La page que vous cherchez n'existe pas ou a été déplacée.
            </p>
            <a
                href="/"
                style={{
                    display: 'inline-block',
                    padding: '1rem 2rem',
                    backgroundColor: '#f97316',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: 600,
                    transition: 'all 0.3s ease'
                }}
            >
                🏠 Retour à l'accueil
            </a>
        </div>
    </div>
)

export default Router
