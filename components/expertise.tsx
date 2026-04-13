'use client'

import { motion } from 'framer-motion'
import { Computer, Shield, Cloud } from 'lucide-react'

export default function Expertise() {
  const expertiseAreas = [
    {
      title: 'Gestion de Parc Informatique & MDM',
      icon: Computer,
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Expertise en gestion de parc informatique de grande envergure (11 000 PC) avec supervision via Nexthink. Maîtrise complète de l\'administration MDM (Mobile Device Management) via AirWatch, Intunes, Apple Business Manager, et KNOX pour la gestion des appareils iOS/Android. Gestion du parc téléphonie mobile : enrôlement, mises à jour, obsolescence, conformité sécurité, activation eSIM, suivi des hors forfait, gestion des voyages et des forfaits Orange Business/Bouygues Entreprise. Participation aux déploiements nationaux de smartphones avec création de procédures d\'enrôlement et support aux équipes de proximité. Suivi de l\'inventaire, gestion du stock, commandes de masse, réception et dispatch multi-sites.'
    },
    {
      title: 'Administration & Support Multi-Niveaux',
      icon: Shield,
      gradient: 'from-purple-500 to-pink-500',
      description: 'Support technique multi-niveaux (N1/N2/N3) avec expertise en administration Active Directory, Azure AD/Entra ID, et gestion des comptes utilisateurs et droits d\'accès applications SAAS. Gestion des accès SSO (Single Sign-On) via Azure AD/Entra ID. Maîtrise de SCCM pour le déploiement d\'applications, prise en main à distance et masterisation de postes. Administration Office 365, SharePoint, Exchange et gestion de tickets via ServiceNow avec respect des KPI/SLA. Support VIP dédié (Directeurs & Comex) avec traitement prioritaire des incidents et SLA renforcé. Participation aux projets de migration Windows 10 vers Windows 11 avec gestion complète des updates de packages.'
    },
    {
      title: 'Virtualisation, Réseaux & Télécommunications',
      icon: Cloud,
      gradient: 'from-emerald-500 to-teal-500',
      description: 'Solide expertise en virtualisation avec vSphere, VMware ESXi, vCenter Server, Virtual Box, Hyper-V et Citrix. Compétences réseau : Windows Server, NAS, LAN, DHCP, FTP, HTTP/HTTPS, VPN, et télécommunications (ADSL, Ethernet, GSM, CPL, VOIP, WIFI, TCP-IP, LAN/MAN/WAN, CISCO). Gestion et maintenance proactive des salles de réunion MTR (Microsoft Team Rooms) Crestron/Yealink et Zoom Rooms. Manipulation à distance via RDP, SCCM, TeamViewer, Putty, Anydesk, Teams. Monitoring et supervision avec Centreon, NAGIOS, Graylog. Onboarding/offboarding complet des collaborateurs avec gestion des processus d\'intégration et de départ.'
    }
  ]

  return (
    // ✅ FIX : padding retiré de la <section>, centralisé uniquement sur le container intérieur
    // Avant : px-4 sm:px-8 lg:px-16 xl:px-24 sur section ET container → double padding sur mobile
    <section
      id="expertise"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/30"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl" />
      </div>

      {/* ✅ Tout le padding horizontal est ici, une seule fois */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Domaines de
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              compétences
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
        </motion.div>

        {/* Cards Grid */}
        {/* ✅ grid-cols-1 explicite sur mobile, puis 3 colonnes à partir de md */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative h-full p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Gradient background au hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Icon */}
                <div className="relative mb-5">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${area.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br ${area.gradient} rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 mb-4 leading-tight">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {area.description}
                </p>

                {/* Ligne décorative au hover */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${area.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}