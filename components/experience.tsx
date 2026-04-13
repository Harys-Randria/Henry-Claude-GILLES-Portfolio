'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Calendar,
  MapPin,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      period: 'Janvier 2025 - à ce jour',
      role: 'Gestionnaire de parc informatique',
      company: 'SAFRAN',
      location: 'France',
      highlights: [
        'Traitement des demandes et incidents via ServiceNow',
        'Supervision du parc téléphonie via AirWatch : mises à jour, obsolescence, enrôlement, conformité sécurité, arbitrage des remplacements',
        "Participation au déploiement national de smartphones : création des procédures d'enrôlement, support aux équipes de proximité",
        'Administration MDM (Apple Business Manager)',
        'Gestion complète des lignes téléphoniques : activation eSIM, suivi des hors forfait, gestion des voyages',
        'Contribution à la gestion des coûts et à l\'identification de nouvelles solutions pour les déplacements collaborateurs',
        'Gestion du parc informatique (11 000 PC)',
        "Gestion des Comptes utilisateurs et droit d'accès application SAAS via Azure AD/Entra ID",
        'Gestion des accès SSO via Azure AD/Entra ID',
        "Suivi de l'inventaire et gestion du stock en coordination avec les Team Leaders et le support de proximité",
        'Supervision du parc via Nexthink',
        "Commandes de masse, réception et dispatch sur l'ensemble des sites",
        'Gestion des devis de réparation (Dell)',
        'Arbitrage des tickets request/incident liés aux postes de travail',
        'Participation au projet de migration Windows 10 vers Windows 11',
        'Support VIP (Directeurs & Comex) : Gestion dédiée des équipements spécifiques (laptops, smartphones, iPad), Gestion des lignes et forfaits adaptés aux voyages, Traitement prioritaire des incidents avec SLA renforcé',
        "Communication & coordination : Réunions hebdomadaires en anglais avec les équipes internationales (Inde) : suivi des activités, points bloquants, faits marquants",
      ],
      techs: ['ServiceNow', 'AirWatch', 'Apple Business Manager', 'Azure AD/Entra ID', 'Nexthink', 'Dell', 'eSIM', 'MDM', 'SSO', 'Windows 10', 'Windows 11'],
    },
    {
      period: 'Novembre 2023 - Décembre 2024',
      role: 'Technicien VIP Support Comex',
      company: 'GEODIS',
      location: 'Levallois Perret',
      highlights: [
        'Support aux membres du Comex (Niveau 1/2/3)',
        'Support Applicatif et fonctionnel niveau 1, 2 et 3 sur les applications métiers du groupe',
        'Suivi des postes & comptes utilisateurs quotidiens pour la pro activité',
        "Participation aux événements Comex (Création de salle de réunion éphémère, support divers)",
        'HP & Lenovo et Mac OS support/maintenance software and hardware',
        'Gestion Parc Via Intunes PC Azure AD/Entra ID/Active Roles / Mac mobile et tablette IOS / Android',
        'Gestion complète de la migration Windows 10 vers Windows 11 et de toutes les updates de packages 22H2 / 23H2',
        'Enrôlement MDM via KNOX',
        'Enrôlement MDM via APPLE Business manager',
        'Gestion à distance MDM via INTUNES',
        'Gestion achat IT (approvisionnement, commande, réception, stock)',
        'Suivi ligne téléphonique (suivi consommation)',
        'Gestion des forfait Orange Business / Bouygues Entreprise / SIM et E-Sim Data pour les Membres du Comex et Assistantes',
        'Gestion de ticket via Services now KPI/SLA',
        "Gestion du Park déploiement d'applications prise en main à distance et masterisation via SCCM",
        "Administration d'office 365 / SharePoint / Active Directory",
        'Gestion complète et maintenance et visite proactive des salles de réunion MTR (Microsoft Team Rooms) (Crestron/Yealink) pour assurer réunion sans problème',
      ],
      techs: ['Intunes', 'Azure AD/Entra ID', 'Active Roles', 'KNOX', 'Apple Business Manager', 'SCCM', 'ServiceNow', 'Office 365', 'SharePoint', 'Active Directory', 'HP', 'Lenovo', 'Mac OS', 'iOS', 'Android', 'Windows 10', 'Windows 11', 'Orange Business', 'Bouygues Entreprise', 'eSIM', 'MTR', 'Crestron', 'Yealink'],
    },
    {
      period: 'Août - Octobre 2023',
      role: 'Support informatique et applicatif N1/N2',
      company: 'VOODOO',
      location: 'Paris',
      highlights: [
        'Gestion du parc IT : Administration des Macs, Windows via Azure AD, et appareils mobiles via MDM',
        'Support utilisateur et VIP : Assistance via Zendesk/Jira et support dédié aux VIP',
        "Onboarding/offboarding : Gestion des processus d'intégration et de départ des collaborateurs",
        "Gestion des applications : Support Office 365, configuration des applications métier accès SSO, et gestion des API",
        'Maintenance des équipements : Gestion du matériel et des Zoom Rooms pour les réunions',
      ],
      techs: ['Azure AD', 'MDM', 'Zendesk', 'Jira', 'Slack', 'Office 365', 'SSO', 'API', 'Zoom Rooms', 'Mac', 'Windows'],
    },
    {
      period: 'Juin 2019 - Août 2023',
      role: 'Request Management - Support Proximité',
      company: 'ENGIE FRANCE',
      location: 'Paris',
      highlights: [
        "Assistance régulière des administrateurs du système - support niveau 1, 2, 3",
        "Déploiement MDM sur AirWatch avec migration vers iTunes",
        "Gestion des appels et mails urgence VIP sur ligne dédié",
        "Gestion des accès aux applications des données sensibles Engie (security central, Varonis, et outils internes)",
        "Projet Migration Windows 7 vers Windows 10 de tous les Laptops et Desktops Paris - Belgique et Europe",
        "Gestion des accès aux serveurs, lecteurs partagés, boîtes mail pour les traders",
        "Gestion des incidents techniques via Security Central et Service Now (informatique et téléphonie)",
        "Animation de meeting des projets hebdomadaires, daily meeting teams",
        "Réorganisation et refonte totale de la mail-box sur la gestion des mails, des appels et prise en charge de tickets",
        "Projet migration de gestion de ticket Security central vers Service Now",
        "Service Delivery Manageur d'un projet d'automatisation des tâches Helpdesk",
        "Gestion des appareils mobiles iOS/Android (Intunes)",
        "Gestion des comptes (windows, accès physique) pour donner suite au départ/arrivée du personnel du groupe",
        "Administration des comptes personnels, techniques et fonctionnels dans l'Active Directory",
        "Masterisation et configuration des postes Windows 7 - 10, Mac OS",
        "Gestion de déploiement et de la maintenance des applications via SCCM",
      ],
      techs: ['AirWatch', 'iTunes', 'Intunes', 'Security Central', 'ServiceNow', 'Varonis', 'Active Directory', 'SCCM', 'Windows 7', 'Windows 10', 'Mac OS', 'iOS', 'Android', 'Teams'],
    },
    {
      period: 'Août 2018 - 2019',
      role: 'Technicien Support - Intérim',
      company: 'KPMG',
      location: 'Paris la Défense',
      highlights: [
        'Déploiement de nouveaux postes de travail via SCCM 150-300 postes/j',
        'Déploiement MDM sur AirWatch avec migration vers Intunes',
        'Masterisation 150 à 300 machines/j - 100 provinces - 50 tour echo',
        'Administration Active Directory Migration Cloud vers Azure AD et Intunes',
        'Intégration et suppression de machines via SCCM',
        "Gestion de tickets et d'incidents niveau 1 et 2 via Service Now",
        'Formation des utilisateurs aux nouveaux équipements',
        'Support Physique aux utilisateurs VIP',
        'Administrations des accès Microsoft Office 365',
      ],
      techs: ['SCCM', 'AirWatch', 'Intunes', 'Active Directory', 'Azure AD', 'ServiceNow', 'Windows 7', 'Windows 10', 'Office 365'],
    },
    {
      period: 'Septembre 2016 - Août 2017',
      role: 'IT Specialist - Alternance',
      company: 'NXO FRANCE',
      location: 'France',
      highlights: [
        'Support système et gestion de tickets niveau 1 et 2',
        'Rédaction des documentations et amélioration des process pour le responsable de projet',
        'Administration d\'infrastructure virtuelle (vSphere, vCenter Server)',
        'Installation d\'un gestionnaire de base de données IPV4, IPV6',
        'Installation d\'un gestionnaire de centralisation de log (Graylog)',
        'Réunion - reporting hebdomadaire sur les différents projets en cours et les tâches hebdomadaires ainsi que les incidents rencontrés',
        'Escalade des incidents niveau 3, gestion des équipements des clients sous vSphere en production et pré production',
      ],
      techs: ['vSphere', 'vCenter Server', 'VMware', 'ESXi', 'Graylog', 'Linux', 'Debian 7', 'Ubuntu Serveur', 'Windows 7', 'Windows 10', 'Putty', 'FileZilla', 'Win SCP', 'Microsoft Outlook', 'Mozilla Thunderbird', 'iPOP3', 'IMAP'],
    },
  ]

  const [expandedCards, setExpandedCards] = useState<{ [key: number]: boolean }>({})
  const toggleCard = (index: number) => {
    setExpandedCards(prev => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    // ✅ FIX 1 : padding retiré de la section
    <section
      id="experience"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/30"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl" />
      </div>

      {/* ✅ FIX 2 : padding unifié ici */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Expériences
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              professionnelles
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-6 sm:space-y-8">
          {/* Ligne timeline — visible md+ seulement */}
          <div className="absolute left-[27px] top-4 bottom-0 w-px bg-gradient-to-b from-blue-400 via-purple-400 to-transparent hidden md:block" />

          {experiences.map((exp, cardIndex) => {
            const isExpanded = expandedCards[cardIndex] || false
            const visibleHighlights = isExpanded ? exp.highlights : exp.highlights.slice(0, 5)
            const hasMore = exp.highlights.length > 5

            return (
              <motion.div
                key={exp.company + cardIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: cardIndex * 0.08 }}
                viewport={{ once: true }}
                className="relative pl-0 md:pl-16"
              >
                {/* Dot timeline desktop */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: cardIndex * 0.08 + 0.2 }}
                  viewport={{ once: true }}
                  className="hidden md:block absolute left-[19px] top-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-md shadow-blue-500/30 z-10"
                >
                  <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-40" />
                </motion.div>

                {/* Card */}
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="p-5 sm:p-6 md:p-8">

                    {/* ✅ FIX 3 : indicateur mobile — barre colorée en haut de la carte */}
                    <div className="md:hidden absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl" />

                    {/* Header carte */}
                    <div className="flex flex-col gap-3 mb-5">

                      {/* Période */}
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                        <span className="text-slate-600 font-medium">{exp.period}</span>
                      </div>

                      {/* ✅ FIX 4 : titre rôle — taille adaptée mobile */}
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 leading-snug">
                        {exp.role}
                      </h3>

                      {/* ✅ FIX 5 : company + location en colonne sur mobile
                                   pour éviter le chevauchement sur noms longs */}
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                          <span className="font-semibold text-sm">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2 mb-4">
                      {visibleHighlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: i * 0.02 }}
                          className="flex items-start gap-2 text-slate-600"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                          <p className="text-sm leading-relaxed">{highlight}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Voir plus / moins */}
                    {hasMore && (
                      <motion.button
                        onClick={() => toggleCard(cardIndex)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 mb-4 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        {isExpanded ? (
                          <><ChevronUp className="w-4 h-4" /> Voir moins</>
                        ) : (
                          <><ChevronDown className="w-4 h-4" /> Voir plus ({exp.highlights.length - 5} autres)</>
                        )}
                      </motion.button>
                    )}

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                      {exp.techs.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.01 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          className="px-2.5 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-medium rounded-full hover:border-blue-300 hover:text-blue-600 hover:shadow-sm transition-all duration-200"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}