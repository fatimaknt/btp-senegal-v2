import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    MapPin,
    Phone,
    Star,
    Clock,
    CheckCircle,
    ExternalLink,
    Mail
} from 'lucide-react'
import type { Enterprise } from '../../types/enterprise'
import { Card, CardContent } from '../ui/Card'
import Button from '../ui/Button'
import { formatPhoneNumber, formatRating } from '../../lib/utils'

interface EnterpriseCardProps {
    enterprise: Enterprise
    showDistance?: boolean
    distance?: number
    compact?: boolean
}

const EnterpriseCard: React.FC<EnterpriseCardProps> = ({
    enterprise,
    showDistance = false,
    distance,
    compact = false
}) => {
    const isOpen = () => {
        const now = new Date()
        const currentDay = now.toLocaleDateString('en', { weekday: 'long' }).toLowerCase() as keyof typeof enterprise.working_hours
        const daySchedule = enterprise.working_hours[currentDay]

        if (!daySchedule.isOpen) return false

        const currentTime = now.getHours() * 60 + now.getMinutes()
        const openTime = daySchedule.openTime ?
            parseInt(daySchedule.openTime.split(':')[0]) * 60 + parseInt(daySchedule.openTime.split(':')[1]) : 0
        const closeTime = daySchedule.closeTime ?
            parseInt(daySchedule.closeTime.split(':')[0]) * 60 + parseInt(daySchedule.closeTime.split(':')[1]) : 0

        return currentTime >= openTime && currentTime <= closeTime
    }

    const renderRating = () => (
        <div className="flex items-center space-x-1">
            <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(enterprise.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                            }`}
                    />
                ))}
            </div>
            <span className="text-sm font-medium text-gray-700">
                {formatRating(enterprise.rating)}
            </span>
            <span className="text-sm text-gray-500">
                ({enterprise.review_count} avis)
            </span>
        </div>
    )

    if (compact) {
        return (
            <Card hover className="enterprise-card">
                <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                        {enterprise.logo_url && (
                            <img
                                src={enterprise.logo_url}
                                alt={`Logo ${enterprise.name}`}
                                className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                            />
                        )}

                        <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="font-semibold text-gray-900 truncate">
                                        {enterprise.name}
                                    </h3>
                                    <p className="text-sm text-primary font-medium">
                                        {enterprise.category.name}
                                    </p>
                                </div>

                                {enterprise.is_verified && (
                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                )}
                            </div>

                            <div className="flex items-center space-x-2 mt-1 text-sm text-gray-600">
                                <MapPin className="h-4 w-4" />
                                <span className="truncate">{enterprise.city}</span>
                                {showDistance && distance && (
                                    <>
                                        <span>•</span>
                                        <span>{distance < 1000 ? `${Math.round(distance)}m` : `${(distance / 1000).toFixed(1)}km`}</span>
                                    </>
                                )}
                            </div>

                            {renderRating()}
                        </div>
                    </div>
                </CardContent>
            </Card>
        )
    }

    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
        >
            <Card className="enterprise-card overflow-hidden">
                {/* Image de couverture */}
                {enterprise.images.length > 0 && (
                    <div className="relative h-48 overflow-hidden">
                        <img
                            src={enterprise.images[0]}
                            alt={enterprise.name}
                            className="w-full h-full object-cover"
                        />
                        {enterprise.is_verified && (
                            <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                                <CheckCircle className="h-3 w-3" />
                                <span>Certifié</span>
                            </div>
                        )}

                        {/* Statut ouvert/fermé */}
                        <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${isOpen()
                            ? 'bg-green-500 text-white'
                            : 'bg-red-500 text-white'
                            }`}>
                            <Clock className="h-3 w-3" />
                            <span>{isOpen() ? 'Ouvert' : 'Fermé'}</span>
                        </div>
                    </div>
                )}

                <CardContent className="p-6">
                    {/* En-tête avec logo et nom */}
                    <div className="flex items-start space-x-3 mb-4">
                        {enterprise.logo_url && (
                            <img
                                src={enterprise.logo_url}
                                alt={`Logo ${enterprise.name}`}
                                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                            />
                        )}

                        <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                {enterprise.name}
                            </h3>
                            <p className="text-primary font-medium mb-2">
                                {enterprise.category.name}
                            </p>
                            {renderRating()}
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {enterprise.description}
                    </p>

                    {/* Informations de contact */}
                    <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                            <span>{enterprise.address}, {enterprise.city}</span>
                            {showDistance && distance && (
                                <span className="ml-2 text-primary font-medium">
                                    ({distance < 1000 ? `${Math.round(distance)}m` : `${(distance / 1000).toFixed(1)}km`})
                                </span>
                            )}
                        </div>

                        <div className="flex items-center text-sm text-gray-600">
                            <Phone className="h-4 w-4 mr-2 text-gray-400" />
                            <span>{formatPhoneNumber(enterprise.phone)}</span>
                        </div>

                        {enterprise.email && (
                            <div className="flex items-center text-sm text-gray-600">
                                <Mail className="h-4 w-4 mr-2 text-gray-400" />
                                <span>{enterprise.email}</span>
                            </div>
                        )}
                    </div>

                    {/* Services */}
                    {enterprise.services.length > 0 && (
                        <div className="mb-4">
                            <div className="flex flex-wrap gap-1">
                                {enterprise.services.slice(0, 3).map((service, index) => (
                                    <span
                                        key={index}
                                        className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                                    >
                                        {service}
                                    </span>
                                ))}
                                {enterprise.services.length > 3 && (
                                    <span className="inline-block bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">
                                        +{enterprise.services.length - 3} autres
                                    </span>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex space-x-2">
                        <Link to={`/entreprise/${enterprise.id}`} className="flex-1">
                            <Button className="w-full" size="sm">
                                Voir le profil
                            </Button>
                        </Link>

                        {enterprise.website && (
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => window.open(enterprise.website, '_blank')}
                                rightIcon={ExternalLink}
                            >
                                Site web
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default EnterpriseCard
