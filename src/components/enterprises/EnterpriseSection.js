import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, Chip, Rating, Paper, Divider } from '@mui/material';
import { Business as BusinessIcon, LocationOn as LocationIcon, Phone as PhoneIcon, Email as EmailIcon, Language as WebsiteIcon } from '@mui/icons-material';
import { supabase } from '../../lib/supabase';
const EnterpriseSection = ({ title = "Annuaire des Entreprises BTP", maxEnterprises = 6, showTitle = true }) => {
    const [enterprises, setEnterprises] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        loadEnterprises();
    }, []);
    const loadEnterprises = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('enterprises')
                .select('*')
                .eq('is_active', true)
                .order('created_at', { ascending: false })
                .limit(maxEnterprises);
            if (error) {
                console.error('Error loading enterprises:', error);
            }
            else {
                setEnterprises(data || []);
            }
        }
        catch (err) {
            console.error('Error in loadEnterprises:', err);
        }
        finally {
            setLoading(false);
        }
    };
    const displayEnterprises = enterprises.slice(0, maxEnterprises);
    return (_jsxs(Box, { sx: { mb: 4 }, children: [showTitle && (_jsxs(Typography, { variant: "h4", sx: {
                    fontWeight: 700,
                    color: '#1f2937',
                    mb: 4,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    textAlign: 'center'
                }, children: [_jsx(BusinessIcon, { sx: { fontSize: 32, color: '#f97316' } }), title] })), _jsx(Grid, { container: true, spacing: 3, children: displayEnterprises.map((enterprise) => (_jsx(Grid, { item: true, xs: 12, md: 6, lg: 4, children: _jsxs(Paper, { elevation: 2, sx: {
                            border: '1px solid #e5e7eb',
                            borderRadius: 3,
                            overflow: 'hidden',
                            transition: 'all 0.3s ease',
                            backgroundColor: 'white',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                            }
                        }, children: [_jsxs(Box, { sx: {
                                    p: 3,
                                    pb: 2,
                                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                                    color: '#374151'
                                }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', mb: 1 }, children: [_jsx(BusinessIcon, { sx: {
                                                    fontSize: 28,
                                                    mr: 2,
                                                    color: '#6b7280'
                                                } }), _jsx(Typography, { variant: "h6", sx: {
                                                    fontWeight: 700,
                                                    fontSize: '1.1rem',
                                                    lineHeight: 1.2
                                                }, children: enterprise.name })] }), _jsx(Chip, { label: enterprise.category, size: "small", sx: {
                                            backgroundColor: 'rgba(249, 115, 22, 0.1)',
                                            color: '#f97316',
                                            fontWeight: 600,
                                            fontSize: '0.75rem'
                                        } })] }), _jsxs(Box, { sx: { p: 3, flex: 1, display: 'flex', flexDirection: 'column' }, children: [_jsx(Box, { sx: { mb: 2 }, children: _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1, mb: 1 }, children: [_jsx(Rating, { value: enterprise.rating, precision: 0.1, size: "small", readOnly: true }), _jsxs(Typography, { variant: "body2", color: "text.secondary", sx: { fontWeight: 500 }, children: [enterprise.rating, " (", enterprise.reviews, " avis)"] })] }) }), _jsx(Typography, { variant: "body2", sx: {
                                            color: '#374151',
                                            lineHeight: 1.6,
                                            mb: 2,
                                            flex: 1
                                        }, children: enterprise.description }), _jsx(Divider, { sx: { my: 2, borderColor: '#e5e7eb' } }), _jsxs(Box, { sx: { mb: 2 }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', mb: 1 }, children: [_jsx(LocationIcon, { sx: { fontSize: 18, color: '#f97316', mr: 1 } }), _jsx(Typography, { variant: "body2", sx: { color: '#374151', fontWeight: 500 }, children: enterprise.location })] }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', mb: 1 }, children: [_jsx(PhoneIcon, { sx: { fontSize: 18, color: '#f97316', mr: 1 } }), _jsx(Typography, { variant: "body2", sx: { color: '#374151', fontWeight: 500 }, children: enterprise.phone })] }), enterprise.email && (_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', mb: 1 }, children: [_jsx(EmailIcon, { sx: { fontSize: 18, color: '#f97316', mr: 1 } }), _jsx(Typography, { variant: "body2", sx: { color: '#374151', fontWeight: 500 }, children: enterprise.email })] })), enterprise.website && (_jsxs(Box, { sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(WebsiteIcon, { sx: { fontSize: 18, color: '#f97316', mr: 1 } }), _jsx(Typography, { variant: "body2", sx: { color: '#374151', fontWeight: 500 }, children: enterprise.website })] }))] }), _jsx(Button, { variant: "contained", fullWidth: true, sx: {
                                            background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                                            '&:hover': {
                                                background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)',
                                                transform: 'translateY(-2px)',
                                                boxShadow: '0 8px 20px rgba(249, 115, 22, 0.4)'
                                            },
                                            color: 'white',
                                            fontWeight: 600,
                                            py: 1.5,
                                            borderRadius: 2,
                                            textTransform: 'none',
                                            fontSize: '0.9rem',
                                            letterSpacing: '0.5px'
                                        }, children: "Voir l'entreprise" })] })] }) }, enterprise.id))) })] }));
};
export default EnterpriseSection;
