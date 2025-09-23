import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  InputAdornment,
  Avatar,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton
} from '@mui/material'
import {
  Search as SearchIcon,
  Menu as MenuIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  AccountCircle as AccountCircleIcon,
  PersonAdd as PersonAddIcon,
  Login as LoginIcon
} from '@mui/icons-material'

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userMenuAnchor, setUserMenuAnchor] = useState<null | HTMLElement>(null)

  const location = useLocation()
  const navigate = useNavigate()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const navigation = [
    { name: 'Accueil', href: '/', icon: '🏠' },
    { name: 'Annuaire', href: '/annuaire', icon: '📋' },
    { name: 'Blog', href: '/blog', icon: '📝' },
    { name: 'À propos', href: '/about', icon: '📖' },
    { name: 'Contact', href: '/contact', icon: '📞' }
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/annuaire?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  const handleUserMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuAnchor(event.currentTarget)
  }

  const handleUserMenuClose = () => {
    setUserMenuAnchor(null)
  }

  const isActivePage = (href: string) => {
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(href)
  }

  return (
    <>
      {/* Top contact bar moderne */}
      <Box sx={{
        background: 'linear-gradient(135deg, #f97316 0%, #fb923c 50%, #ea580c 100%)',
        color: 'white',
        py: 1.5,
        display: { xs: 'none', md: 'block' },
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
        }
      }}>
        <Box sx={{
          maxWidth: 'lg',
          mx: 'auto',
          px: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.9rem'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              background: 'rgba(255, 255, 255, 0.1)',
              px: 2,
              py: 0.5,
              borderRadius: 2,
              backdropFilter: 'blur(10px)'
            }}>
              <PhoneIcon sx={{ fontSize: 18, filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' }} />
              <Typography variant="body2" sx={{ fontWeight: 500, textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                +221 33 XXX XX XX
              </Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              background: 'rgba(255, 255, 255, 0.1)',
              px: 2,
              py: 0.5,
              borderRadius: 2,
              backdropFilter: 'blur(10px)'
            }}>
              <EmailIcon sx={{ fontSize: 18, filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' }} />
              <Typography variant="body2" sx={{ fontWeight: 500, textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                contact@btp-senegal.sn
              </Typography>
            </Box>
          </Box>
          <Typography variant="body2" sx={{
            fontWeight: 600,
            textShadow: '0 1px 2px rgba(0,0,0,0.2)',
            background: 'rgba(255, 255, 255, 0.1)',
            px: 3,
            py: 1,
            borderRadius: 3,
            backdropFilter: 'blur(10px)'
          }}>
            🇸🇳 Annuaire BTP Sénégal - Votre partenaire construction
          </Typography>
        </Box>
      </Box>

      {/* Main navigation moderne */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          color: 'primary.main',
          boxShadow: '0 8px 32px rgba(249, 115, 22, 0.15)',
          borderBottom: '1px solid rgba(249, 115, 22, 0.1)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, #f97316, #fb923c, #ea580c)'
          }
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 64, md: 80 } }}>
          {/* Logo moderne */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
              mr: 4,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)'
              }
            }}
          >
            <Avatar
              src="/images/logos/logo.jpeg"
              sx={{
                width: { xs: 45, md: 55 },
                height: { xs: 45, md: 55 },
                mr: 2,
                background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1) rotate(5deg)',
                  boxShadow: '0 8px 25px rgba(249, 115, 22, 0.4)',
                }
              }}
            >
              🏗️
            </Avatar>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 800,
                  background: 'linear-gradient(45deg, #f97316 0%, #fb923c 50%, #ea580c 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 2px 4px rgba(249, 115, 22, 0.1)'
                }}
              >
                BTP Sénégal
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                Annuaire professionnel
              </Typography>
            </Box>
          </Box>

          {/* Search bar moderne (desktop) */}
          {!isMobile && (
            <Box sx={{ flexGrow: 1, maxWidth: 450, mx: 3 }}>
              <form onSubmit={handleSearch}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Rechercher une entreprise, un service..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{
                          color: 'primary.main',
                          fontSize: 20,
                          filter: 'drop-shadow(0 1px 2px rgba(249, 115, 22, 0.3))'
                        }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: '45px',
                      borderRadius: 4,
                      backgroundColor: 'rgba(249, 115, 22, 0.05)',
                      border: '2px solid rgba(249, 115, 22, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(249, 115, 22, 0.08)',
                        border: '2px solid rgba(249, 115, 22, 0.2)',
                        transform: 'translateY(-1px)',
                        boxShadow: '0 4px 12px rgba(249, 115, 22, 0.15)'
                      },
                      '&.Mui-focused': {
                        backgroundColor: 'white',
                        border: '2px solid #f97316',
                        boxShadow: '0 6px 20px rgba(249, 115, 22, 0.2)',
                        transform: 'translateY(-2px)'
                      }
                    },
                    '& input': {
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      '&::placeholder': {
                        color: 'rgba(107, 114, 128, 0.7)',
                        fontWeight: 400
                      }
                    }
                  }}
                />
              </form>
            </Box>
          )}

          {/* Desktop navigation moderne */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  to={item.href}
                  sx={{
                    color: isActivePage(item.href) ? 'white' : 'text.primary',
                    fontWeight: isActivePage(item.href) ? 700 : 600,
                    background: isActivePage(item.href)
                      ? 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)'
                      : 'transparent',
                    borderRadius: 3,
                    px: 2.5,
                    py: 1.5,
                    minWidth: 'auto',
                    transition: 'all 0.3s ease',
                    boxShadow: isActivePage(item.href)
                      ? '0 4px 15px rgba(249, 115, 22, 0.3)'
                      : 'none',
                    '&:hover': {
                      backgroundColor: isActivePage(item.href)
                        ? 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)'
                        : 'rgba(249, 115, 22, 0.1)',
                      color: isActivePage(item.href) ? 'white' : 'primary.main',
                      transform: 'translateY(-2px)',
                      boxShadow: isActivePage(item.href)
                        ? '0 6px 20px rgba(249, 115, 22, 0.4)'
                        : '0 4px 12px rgba(249, 115, 22, 0.15)'
                    }
                  }}
                >
                  {item.icon} {item.name}
                </Button>
              ))}
            </Box>
          )}

          {/* User actions */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, ml: 'auto' }}>
            {/* Desktop auth buttons modernes */}
            {!isMobile && (
              <>
                <Button
                  component={Link}
                  to="/auth/login"
                  variant="outlined"
                  size="small"
                  sx={{
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    borderRadius: 3,
                    px: 3,
                    py: 1.5,
                    fontWeight: 600,
                    borderWidth: '2px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      color: 'white',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(249, 115, 22, 0.3)',
                      borderWidth: '2px'
                    }
                  }}
                >
                  <LoginIcon sx={{ mr: 1, fontSize: 18 }} />
                  Connexion
                </Button>
                <Button
                  component={Link}
                  to="/auth/register"
                  variant="contained"
                  size="small"
                  sx={{
                    background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                    borderRadius: 3,
                    px: 3,
                    py: 1.5,
                    fontWeight: 700,
                    boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(249, 115, 22, 0.4)'
                    }
                  }}
                >
                  <PersonAddIcon sx={{ mr: 1, fontSize: 18 }} />
                  Inscription
                </Button>
              </>
            )}

            {/* Mobile menu button */}
            {isMobile && (
              <IconButton
                onClick={() => setMobileMenuOpen(true)}
                sx={{ color: 'primary.main' }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>

        {/* Mobile search bar */}
        {isMobile && (
          <Box sx={{ px: 2, pb: 2 }}>
            <form onSubmit={handleSearch}>
              <TextField
                fullWidth
                size="small"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: 'primary.main' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 3,
                    '&:hover fieldset': { borderColor: 'primary.main' },
                    '&.Mui-focused fieldset': { borderColor: 'primary.main' }
                  }
                }}
              />
            </form>
          </Box>
        )}
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            backgroundColor: 'background.paper'
          }
        }}
      >
        <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
            🏗️ BTP Sénégal
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Navigation
          </Typography>
        </Box>

        <List>
          {navigation.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                component={Link}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                sx={{
                  backgroundColor: isActivePage(item.href) ? 'rgba(249, 115, 22, 0.1)' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(249, 115, 22, 0.1)'
                  }
                }}
              >
                <ListItemText
                  primary={`${item.icon} ${item.name}`}
                  sx={{
                    '& .MuiListItemText-primary': {
                      color: isActivePage(item.href) ? 'primary.main' : 'text.primary',
                      fontWeight: isActivePage(item.href) ? 600 : 400
                    }
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ p: 2, mt: 'auto', borderTop: '1px solid', borderColor: 'divider' }}>
          <Button
            component={Link}
            to="/auth/login"
            fullWidth
            variant="outlined"
            sx={{
              mb: 1,
              borderColor: 'primary.main',
              color: 'primary.main'
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <LoginIcon sx={{ mr: 1, fontSize: 18 }} />
            Connexion
          </Button>
          <Button
            component={Link}
            to="/auth/register"
            fullWidth
            variant="contained"
            sx={{
              background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)'
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <PersonAddIcon sx={{ mr: 1, fontSize: 18 }} />
            Inscription
          </Button>
        </Box>
      </Drawer>
    </>
  )
}

export default Header