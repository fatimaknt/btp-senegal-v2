import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState(null);
    useEffect(() => {
        // Récupérer la session depuis localStorage d'abord
        const getSession = async () => {
            try {
                // Vérifier localStorage d'abord
                const storedSession = localStorage.getItem('supabase_session');
                const storedUser = localStorage.getItem('supabase_user');
                if (storedSession && storedUser) {
                    const sessionData = JSON.parse(storedSession);
                    const userData = JSON.parse(storedUser);
                    setSession(sessionData);
                    setUser(userData);
                    if (userData) {
                        await fetchUserProfile(userData.id);
                    }
                    setLoading(false);
                    return;
                }
                // Sinon, essayer Supabase
                const { data: { session } } = await supabase.auth.getSession();
                setSession(session);
                setUser(session?.user ?? null);
                if (session?.user) {
                    await fetchUserProfile(session.user.id);
                }
                setLoading(false);
            }
            catch (error) {
                console.error('Error getting session:', error);
                setLoading(false);
            }
        };
        getSession();
        // Écouter les changements d'authentification
        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
            setSession(session);
            setUser(session?.user ?? null);
            if (session?.user) {
                await fetchUserProfile(session.user.id);
            }
            else {
                setProfile(null);
            }
            setLoading(false);
        });
        return () => subscription.unsubscribe();
    }, []);
    const fetchUserProfile = async (userId) => {
        try {
            console.log('Fetching profile for user:', userId);
            const { data, error } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', userId)
                .single();
            if (error) {
                console.error('Error fetching profile:', error);
                return;
            }
            console.log('Profile fetched successfully:', data);
            setProfile(data);
        }
        catch (error) {
            console.error('Error fetching profile:', error);
        }
    };
    const signUp = async (email, password, fullName) => {
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: fullName
                    }
                }
            });
            if (error)
                throw error;
            // Créer le profil utilisateur
            if (data.user) {
                const { error: profileError } = await supabase
                    .from('profiles')
                    .insert({
                    id: data.user.id,
                    email: data.user.email,
                    full_name: fullName,
                    role: 'user'
                });
                if (profileError) {
                    console.error('Error creating profile:', profileError);
                }
            }
            // Vérifier si l'email doit être confirmé
            if (data.user && !data.user.email_confirmed_at) {
                return {
                    data: {
                        ...data,
                        message: 'Veuillez vérifier votre email et cliquer sur le lien de confirmation.'
                    },
                    error: null
                };
            }
            return { data, error: null };
        }
        catch (error) {
            return { data: null, error };
        }
    };
    const signIn = async (email, password) => {
        try {
            // Utiliser l'API REST directement
            const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/auth/v1/token?grant_type=password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error signing in:', errorData);
                return { data: null, error: { message: errorData.error_description || 'Login failed' } };
            }
            const data = await response.json();
            console.log('Login successful:', data);
            // Mettre à jour la session avec la structure correcte
            const sessionData = {
                access_token: data.access_token,
                token_type: data.token_type,
                expires_in: data.expires_in,
                expires_at: data.expires_at,
                refresh_token: data.refresh_token,
                user: data.user
            };
            setSession(sessionData);
            setUser(data.user);
            // Persister la session dans localStorage
            localStorage.setItem('supabase_session', JSON.stringify(sessionData));
            localStorage.setItem('supabase_user', JSON.stringify(data.user));
            if (data.user) {
                await fetchUserProfile(data.user.id);
            }
            return { data, error: null };
        }
        catch (error) {
            console.error('Error signing in:', error);
            return { data: null, error };
        }
    };
    const signOut = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error)
                throw error;
        }
        catch (error) {
            console.error('Error signing out:', error);
        }
    };
    const isAdmin = () => {
        return profile?.role === 'admin';
    };
    const isAuthenticated = () => {
        return !!user && !!profile;
    };
    return {
        user,
        profile,
        session,
        loading,
        signUp,
        signIn,
        signOut,
        isAdmin,
        isAuthenticated
    };
};
