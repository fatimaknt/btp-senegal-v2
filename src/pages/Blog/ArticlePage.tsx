import React, { useState, useEffect, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  Divider,
  Avatar
} from '@mui/material'
import {
  ArrowBack as ArrowBackIcon,
  CalendarToday as CalendarIcon,
  AccessTime as TimeIcon,
  Share as ShareIcon
} from '@mui/icons-material'
import PageTransition from '../../components/animations/PageTransition'

interface Article {
  id: string
  title: string
  content: string
  excerpt?: string
  image_url?: string
  category?: string
  author?: string
  created_at: string
  read_time?: string
}

const ArticlePage: React.FC = () => {
  const { id } = useParams()
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)

  const loadArticle = useCallback(() => {
    try {
      setLoading(true)
      const stored = localStorage.getItem('btp_articles')
      console.log('Loading article with ID:', id)
      console.log('Stored articles:', stored)

      if (stored) {
        const articles = JSON.parse(stored)
        console.log('Parsed articles:', articles)
        console.log('Looking for article with ID:', id)

        // Chercher l'article par ID
        const foundArticle = articles.find((art: Article) => art.id === id)
        console.log('Found article:', foundArticle)

        if (foundArticle) {
          console.log('Article found:', foundArticle)
          console.log('Article image_url:', foundArticle.image_url)
          setArticle(foundArticle)
        } else {
          console.log('Article not found. Available IDs:', articles.map((art: Article) => art.id))
        }
      } else {
        console.log('No articles found in localStorage')
      }
    } catch (error) {
      console.error('Error loading article:', error)
    } finally {
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    loadArticle()
  }, [loadArticle])

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography>Chargement...</Typography>
      </Box>
    )
  }

  if (!article) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Article non trouvé
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            L'article avec l'ID "{id}" n'existe pas ou a été supprimé.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Vérifiez la console pour plus de détails sur les articles disponibles.
          </Typography>
          <Button component={Link} to="/actualites" variant="contained">
            Retour aux actualités
          </Button>
        </Box>
      </Container>
    )
  }



  return (
    <PageTransition>
      <Box sx={{
        backgroundColor: '#f8fafc',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      }}>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          {/* Bouton retour */}
          <Button
            component={Link}
            to="/actualites"
            startIcon={<ArrowBackIcon />}
            sx={{
              mb: 4,
              color: '#f97316',
              fontWeight: 600,
              px: 3,
              py: 1.5,
              borderRadius: '8px',
              border: '2px solid #f97316',
              '&:hover': {
                backgroundColor: '#f97316',
                color: 'white',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 16px rgba(249, 115, 22, 0.3)'
              }
            }}
          >
            Retour au blog
          </Button>

          {/* Article principal */}
          <Card sx={{
            mb: 6,
            borderRadius: '16px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            border: '1px solid rgba(249, 115, 22, 0.1)'
          }}>
            {/* Image de couverture */}
            <Box
              sx={{
                height: 500,
                backgroundImage: article.image_url && article.image_url.trim() !== ''
                  ? `url(${article.image_url})`
                  : 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
                borderRadius: '12px 12px 0 0',
                overflow: 'hidden'
              }}
            >
              <Box
                sx={{
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  width: '100%',
                  p: 4,
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center'
                }}
              >
                {(!article.image_url || article.image_url.trim() === '') && (
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h1" sx={{ fontSize: '4rem', mb: 2 }}>
                      📰
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.8, mb: 2 }}>
                      Article d'actualité
                    </Typography>
                  </Box>
                )}
                <Chip
                  label={article.category || 'Actualités'}
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    fontWeight: 600,
                    mb: 2
                  }}
                />
                <Typography variant="h2" sx={{
                  fontWeight: 800,
                  mb: 2,
                  fontSize: { xs: '2rem', md: '3rem' },
                  lineHeight: 1.2,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}>
                  {article.title}
                </Typography>
              </Box>
            </Box>

            <CardContent sx={{ p: 4 }}>
              {/* Métadonnées */}
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                mb: 6,
                flexWrap: 'wrap',
                p: 3,
                backgroundColor: 'rgba(249, 115, 22, 0.05)',
                borderRadius: '12px',
                border: '1px solid rgba(249, 115, 22, 0.1)'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Avatar sx={{ width: 32, height: 32, backgroundColor: '#f97316' }}>
                    {article.author?.charAt(0) || 'A'}
                  </Avatar>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {article.author}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <CalendarIcon sx={{ fontSize: 16, color: '#6b7280' }} />
                  <Typography variant="body2" color="text.secondary">
                    {new Date(article.created_at).toLocaleDateString('fr-FR')}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <TimeIcon sx={{ fontSize: 16, color: '#6b7280' }} />
                  <Typography variant="body2" color="text.secondary">
                    {article.read_time || '5 min'}
                  </Typography>
                </Box>
                <Button
                  startIcon={<ShareIcon />}
                  size="small"
                  sx={{
                    color: '#f97316',
                    '&:hover': {
                      backgroundColor: 'rgba(249, 115, 22, 0.1)'
                    }
                  }}
                >
                  Partager
                </Button>
              </Box>

              {/* Résumé */}
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  fontStyle: 'italic',
                  color: '#6b7280',
                  borderLeft: '4px solid #f97316',
                  pl: 2,
                  backgroundColor: 'rgba(249, 115, 22, 0.05)',
                  p: 2,
                  borderRadius: 1
                }}
              >
                {article.excerpt}
              </Typography>

              {/* Contenu */}
              <Box
                sx={{
                  '& h2': {
                    color: '#f97316',
                    fontWeight: 700,
                    mt: 4,
                    mb: 2,
                    fontSize: '1.8rem'
                  },
                  '& h3': {
                    color: '#374151',
                    fontWeight: 600,
                    mt: 4,
                    mb: 2,
                    fontSize: '1.6rem'
                  },
                  '& p': {
                    lineHeight: 1.8,
                    mb: 3,
                    fontSize: '1.2rem',
                    textAlign: 'justify',
                    color: '#4b5563'
                  },
                  '& ul': {
                    pl: 4,
                    mb: 3
                  },
                  '& li': {
                    mb: 1,
                    fontSize: '1.2rem',
                    color: '#4b5563'
                  },
                  '& blockquote': {
                    borderRadius: '8px',
                    fontSize: '1.3rem',
                    borderLeft: '6px solid #f97316',
                    pl: 4,
                    py: 3,
                    backgroundColor: 'rgba(249, 115, 22, 0.08)',
                    fontStyle: 'italic',
                    color: '#374151',
                    mb: 4
                  },
                  '& strong': {
                    color: '#f97316',
                    fontWeight: 700
                  }
                }}
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              <Divider sx={{ my: 4 }} />

              {/* Tags */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  🏷️ Tags
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Chip
                    label={article.category || 'Actualités'}
                    sx={{
                      backgroundColor: '#f97316',
                      color: 'white',
                      fontWeight: 600,
                      px: 2,
                      py: 1,
                      fontSize: '1rem',
                      '&:hover': {
                        backgroundColor: '#ea580c',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 8px rgba(249, 115, 22, 0.3)'
                      }
                    }}
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>

        </Container>
      </Box>
    </PageTransition>
  )
}

export default ArticlePage