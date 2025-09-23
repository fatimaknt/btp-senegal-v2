import React from 'react'
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
  Person as PersonIcon,
  AccessTime as TimeIcon,
  Share as ShareIcon
} from '@mui/icons-material'
import PageTransition from '../../components/animations/PageTransition'

const ArticlePage: React.FC = () => {
  const { slug } = useParams()

  // Données mockées pour l'article
  const article = {
    id: 1,
    slug: 'tendances-construction-senegal-2024',
    title: 'Les tendances de la construction au Sénégal en 2024',
    excerpt: 'Découvrez les nouvelles tendances qui révolutionnent le secteur du BTP au Sénégal cette année.',
    content: `
      <h2>🏗️ Une révolution en marche</h2>
      <p>Le secteur du BTP au Sénégal connaît une transformation majeure en 2024. Les nouvelles technologies, les matériaux innovants et les méthodes de construction durables redéfinissent les standards de l'industrie.</p>
      
      <h3>📊 Les chiffres clés</h3>
      <ul>
        <li><strong>+25%</strong> d'augmentation des projets utilisant des matériaux locaux</li>
        <li><strong>60%</strong> des entreprises adoptent des technologies numériques</li>
        <li><strong>15 000</strong> emplois créés dans le secteur cette année</li>
      </ul>
      
      <h3>🌱 Construction durable</h3>
      <p>L'éco-construction devient une priorité. Les entreprises sénégalaises intègrent de plus en plus de matériaux recyclés et de techniques respectueuses de l'environnement.</p>
      
      <blockquote style="border-left: 4px solid #f97316; padding-left: 20px; margin: 20px 0; font-style: italic; background: rgba(249, 115, 22, 0.05); padding: 20px;">
        "L'avenir du BTP au Sénégal se construit aujourd'hui avec des solutions innovantes et durables." - Expert BTP
      </blockquote>
      
      <h3>🔧 Technologies émergentes</h3>
      <p>Les outils numériques transforment les chantiers :</p>
      <ul>
        <li>Modélisation 3D (BIM)</li>
        <li>Drones pour la surveillance</li>
        <li>Applications mobiles de gestion</li>
        <li>Réalité augmentée pour la formation</li>
      </ul>
      
      <h3>🎯 Perspectives d'avenir</h3>
      <p>Le secteur du BTP sénégalais s'oriente vers une modernisation accélérée. Les investissements dans la formation et l'innovation technologique positionnent le pays comme un leader régional.</p>
    `,
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
    author: 'Amadou Ba',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    date: '2024-01-20',
    readTime: '5 min',
    category: 'Tendances',
    tags: ['Construction', 'Innovation', 'Sénégal', 'Technologie', 'Durabilité']
  }

  const relatedArticles = [
    {
      id: 2,
      slug: 'materiaux-construction-locaux',
      title: 'Utiliser des matériaux de construction locaux',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300'
    },
    {
      id: 3,
      slug: 'technologies-construction-moderne',
      title: 'Technologies modernes dans la construction',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300'
    }
  ]

  return (
    <PageTransition>
      <Box sx={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
        <Container maxWidth="md" sx={{ py: 4 }}>
          {/* Bouton retour */}
          <Button
            component={Link}
            to="/blog"
            startIcon={<ArrowBackIcon />}
            sx={{
              mb: 4,
              color: '#f97316',
              '&:hover': {
                backgroundColor: 'rgba(249, 115, 22, 0.1)'
              }
            }}
          >
            Retour au blog
          </Button>

          {/* Article principal */}
          <Card sx={{ mb: 6 }}>
            {/* Image de couverture */}
            <Box
              sx={{
                height: 400,
                backgroundImage: `url(${article.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end'
              }}
            >
              <Box
                sx={{
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  width: '100%',
                  p: 4,
                  color: 'white'
                }}
              >
                <Chip
                  label={article.category}
                  sx={{
                    backgroundColor: '#f97316',
                    color: 'white',
                    fontWeight: 600,
                    mb: 2
                  }}
                />
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
                  {article.title}
                </Typography>
              </Box>
            </Box>

            <CardContent sx={{ p: 4 }}>
              {/* Métadonnées */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4, flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Avatar src={article.authorAvatar} sx={{ width: 32, height: 32 }} />
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {article.author}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <CalendarIcon sx={{ fontSize: 16, color: '#6b7280' }} />
                  <Typography variant="body2" color="text.secondary">
                    {new Date(article.date).toLocaleDateString('fr-FR')}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <TimeIcon sx={{ fontSize: 16, color: '#6b7280' }} />
                  <Typography variant="body2" color="text.secondary">
                    {article.readTime}
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
                    mt: 3,
                    mb: 2,
                    fontSize: '1.4rem'
                  },
                  '& p': {
                    lineHeight: 1.7,
                    mb: 2,
                    fontSize: '1.1rem'
                  },
                  '& ul': {
                    pl: 3,
                    mb: 2
                  },
                  '& li': {
                    mb: 1,
                    fontSize: '1.1rem'
                  },
                  '& blockquote': {
                    borderRadius: 1,
                    fontSize: '1.1rem'
                  },
                  '& strong': {
                    color: '#f97316'
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
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {article.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      variant="outlined"
                      sx={{
                        borderColor: '#f97316',
                        color: '#f97316',
                        '&:hover': {
                          backgroundColor: 'rgba(249, 115, 22, 0.1)'
                        }
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Articles connexes */}
          <Card>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#f97316' }}>
                📚 Articles connexes
              </Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 3 }}>
                {relatedArticles.map((relatedArticle) => (
                  <Card
                    key={relatedArticle.id}
                    component={Link}
                    to={`/blog/${relatedArticle.slug}`}
                    sx={{
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 16px rgba(249, 115, 22, 0.15)'
                      }
                    }}
                  >
                    <Box
                      sx={{
                        height: 150,
                        backgroundImage: `url(${relatedArticle.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#374151' }}>
                        {relatedArticle.title}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </PageTransition>
  )
}

export default ArticlePage