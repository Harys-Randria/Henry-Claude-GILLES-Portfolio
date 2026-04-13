'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Calendar,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Clock,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'henryclaudegilles@outlook.fr',
      href: 'mailto:henryclaudegilles@outlook.fr',
      isImage: false,
      shortValue: 'Envoyer un email',
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '06.47.22.67.69',
      href: 'tel:+33647226769',
      isImage: false,
      shortValue: 'Appeler maintenant',
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Limay (78) — Île-de-France',
      href: null,
      isImage: false,
      shortValue: 'Île-de-France',
    },
    {
      icon: '/linkedin.png',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/henry-claude-gilles/',
      isImage: true,
      shortValue: 'Profil professionnel',
    },
    {
      icon: '/malt.png',
      label: 'Malt',
      href: 'https://www.malt.fr/profile/henryclaudegilles',
      isImage: true,
      shortValue: 'Voir mon profil',
    },
    {
      icon: '/collective.png',
      label: 'Collective',
      href: 'https://collective.work/profile/henryclaude-gilles',
      isImage: true,
      shortValue: 'Découvrir',
    },
  ]

  return (
    // ✅ FIX 1 : padding retiré de la section
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/30"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl" />
      </div>

      {/* ✅ FIX 2 : padding unifié ici */}
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Discutons de
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              votre projet
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
        </motion.div>

        {/* Bloc Calendly */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative mb-12 sm:mb-16"
        >
          <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/20 rounded-full blur-3xl" />

            {/* ✅ FIX 3 : padding réduit sur mobile */}
            <div className="relative p-6 sm:p-8 md:p-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-5">
                <Clock className="w-4 h-4 text-white shrink-0" />
                <span className="text-sm font-medium text-white">Réponse sous 24h</span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
                Prenez rendez-vous directement
              </h3>
              <p className="text-blue-100 mb-6 max-w-lg mx-auto text-sm sm:text-base">
                Un créneau qui vous convient ? Réservez en quelques clics et je vous recontacterai immédiatement.
              </p>

              <motion.a
                href="https://calendly.com/henryclaudegilles/30min"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-800 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group text-sm sm:text-base"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 shrink-0" />
                Réserver un créneau
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </motion.a>

              {/* ✅ FIX 4 : badges en flex-wrap + colonne sur très petit écran */}
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-5">
                {['Gratuit', 'Sans engagement', 'Visio ou présentiel'].map((label) => (
                  <div key={label} className="flex items-center gap-1.5 text-xs text-blue-100">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact cards */}
        {/* ✅ FIX 5 : 2 colonnes sur mobile (au lieu de 1), 3 colonnes à partir de md */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.isImage ? '_blank' : undefined}
                  rel={item.isImage ? 'noopener noreferrer' : undefined}
                  className="flex flex-col items-center text-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/80 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group h-full"
                >
                  {/* Icône */}
                  <div className="p-2.5 sm:p-3 rounded-xl bg-slate-100 shadow-md group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300 mb-2.5">
                    {item.isImage ? (
                      <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                        <Image
                          src={item.icon as string}
                          alt={item.label}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-500 group-hover:text-blue-600 transition-colors" />
                    )}
                  </div>

                  <h3 className="text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                    {item.label}
                  </h3>
                  <div className="flex items-center gap-1 text-[10px] sm:text-xs text-slate-400 group-hover:text-blue-600 transition-colors">
                    <span className="line-clamp-1">{item.shortValue}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all shrink-0" />
                  </div>
                </a>
              ) : (
                <div className="flex flex-col items-center text-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/80 group h-full">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-slate-100 shadow-md mb-2.5">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-500" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                    {item.label}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-500 line-clamp-1">{item.shortValue}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Note disponibilité */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-10 pt-8 border-t border-slate-200"
        >
          <p className="text-sm text-slate-500">
            📍 Basé en Île-de-France • Disponible en remote
          </p>
        </motion.div>
      </div>
    </section>
  )
}