import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import type { AuthState, LoginCredentials, RegisterData } from '../types/user'

export function useAuth() {
    const [authState, setAuthState] = useState<AuthState>({
        user: null,
        isLoading: true,
        isAuthenticated: false
    })

    useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            async (_event, session) => {
                if (session?.user) {
                    const { data: profile } = await supabase
                        .from('profiles')
                        .select('*')
                        .eq('id', session.user.id)
                        .single()

                    setAuthState({
                        user: profile ? {
                            id: session.user.id,
                            email: session.user.email!,
                            name: profile.name || session.user.email!,
                            avatar_url: profile.avatar_url,
                            role: profile.role || 'user',
                            created_at: session.user.created_at,
                            updated_at: profile.updated_at || session.user.created_at
                        } : null,
                        isLoading: false,
                        isAuthenticated: !!session.user
                    })
                } else {
                    setAuthState({
                        user: null,
                        isLoading: false,
                        isAuthenticated: false
                    })
                }
            }
        )

        return () => subscription.unsubscribe()
    }, [])

    const signIn = async (credentials: LoginCredentials) => {
        const { data, error } = await supabase.auth.signInWithPassword(credentials)
        if (error) throw error
        return data
    }

    const signUp = async (userData: RegisterData) => {
        const { data, error } = await supabase.auth.signUp({
            email: userData.email,
            password: userData.password,
            options: {
                data: {
                    name: userData.name,
                    role: userData.role || 'user'
                }
            }
        })
        if (error) throw error
        return data
    }

    const signOut = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
    }

    const updateProfile = async (updates: Partial<{
        name: string
        avatar_url: string
        phone: string
        address: string
        city: string
    }>) => {
        if (!authState.user) throw new Error('Not authenticated')

        const { error } = await supabase
            .from('profiles')
            .update(updates)
            .eq('id', authState.user.id)

        if (error) throw error
    }

    const resetPassword = async (email: string) => {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/reset-password`
        })
        if (error) throw error
    }

    return {
        ...authState,
        signIn,
        signUp,
        signOut,
        updateProfile,
        resetPassword
    }
}
