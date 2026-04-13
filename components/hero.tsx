'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Calendar, Download, Briefcase, Award, TrendingUp, Users, ChevronDown, CheckCircle2, Star } from 'lucide-react'

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const stats = [
    { value: '+8', label: "ans d'expérience", icon: Award, color: 'from-blue-500 to-blue-600', impact: 'Senior certifié' },
    { value: '11k', label: 'PC gérés', icon: TrendingUp, color: 'from-purple-500 to-purple-600', impact: 'À grande échelle' },
    { value: '100%', label: 'Satisfaction client', icon: Users, color: 'from-emerald-500 to-emerald-600', impact: '50+ missions' },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse [animation-delay:1000ms]" />
      </div>

      {/* ✅ FIX 1 : padding unifié sur ce seul container, plus de double padding */}
      <motion.div
        style={{ opacity }}
        className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-12"
      >
        {/* ✅ FIX 2 : sur mobile = colonne (image en bas), sur lg = 2 colonnes côte à côte */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* ─── Left Column ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 order-2 lg:order-1"
          >
            {/* Nom + badges */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="inline-block">
                  {/* ✅ FIX 3 : taille de police réduite sur xs pour éviter le débordement */}
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                    Henry-Claude GILLES
                  </span>
                  <div className="w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-transparent mt-2 rounded-full" />
                </div>

                {/* ✅ FIX 4 : flex-wrap pour que les badges passent à la ligne sur petit écran */}
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-700">
                    <Award className="w-3 h-3 shrink-0" />
                    Ingénieur Support IT Senior
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 rounded-full text-xs font-medium text-emerald-700">
                    <CheckCircle2 className="w-3 h-3 shrink-0" />
                    Disponible immédiatement
                  </span>
                </div>
              </motion.div>

              {/* Titre principal */}
              <div className="space-y-2 mt-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                    Infrastructure IT
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    sans friction
                  </span>
                </h1>

                {/* Pill résultats */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200/80 mt-2">
                  <div className="flex -space-x-1 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-300" />
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-600" />
                  </div>
                  <p className="text-xs font-medium text-slate-600">
                    <span className="font-bold text-slate-800">-40% de tickets IT</span>
                    {' • '}
                    <span className="font-bold text-slate-800">+30% productivité</span>
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">
                <span className="font-semibold text-slate-800">Vous perdez du temps avec vos problèmes IT ?</span>
                <br />
                Je transforme votre infrastructure en un véritable levier de performance.
                Résultats garantis : équipes productives, système fiable, sérénité totale.
              </p>
            </div>

            {/* ✅ FIX 5 : CTA en colonne sur mobile, en ligne à partir de sm */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2"
            >
              <motion.a
                href="https://calendly.com/henryclaudegilles/30min"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all duration-300 text-sm"
              >
                <Calendar className="w-4 h-4" />
                Réserver un créneau
              </motion.a>

              <motion.a
                href="/CV-Henry-Claude-GILLES.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-full hover:border-blue-300 hover:text-blue-600 hover:shadow-md transition-all duration-300 group text-sm"
              >
                <Download className="w-4 h-4 group-hover:rotate-6 transition-transform" />
                Télécharger mon CV
              </motion.a>

              <motion.a
                href="#experience"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-full hover:border-blue-300 hover:text-blue-600 hover:shadow-md transition-all duration-300 group text-sm"
              >
                <Briefcase className="w-4 h-4 group-hover:rotate-6 transition-transform" />
                Voir mes réalisations
              </motion.a>
            </motion.div>

            {/* ✅ FIX 6 : Stats — icônes cachées sur mobile pour gagner de la place */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-slate-200">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="text-center group cursor-pointer"
                >
                  {/* Icône masquée sur xs, visible à partir de sm */}
                  <div className="hidden sm:flex justify-center mb-2">
                    <div className={`p-2.5 bg-gradient-to-br ${stat.color} rounded-xl shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-medium leading-tight">{stat.label}</p>
                  <p className="hidden sm:block text-[10px] text-slate-400 mt-0.5">{stat.impact}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ─── Right Column — Image ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-xs lg:max-w-md">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-xl animate-pulse" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">

                {/* ✅ FIX 9 : aspect-ratio moins haut sur mobile */}
                <div className="relative aspect-[3/4] sm:aspect-[3/4] overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="Henry-Claude GILLES - Ingénieur Support IT Senior"
                    fill
                    className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                    priority
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 448px"
                  />
                </div>

                {/* Badge flottant */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg z-20 border border-white/20"
                >
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg shrink-0">
                      <Star className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-800">Client satisfaction</p>
                      <div className="flex items-center gap-0.5 mt-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="text-xs font-bold text-amber-600 ml-1">5.0</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-60 animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full blur-2xl opacity-60 animate-pulse [animation-delay:1000ms]" />
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Découvrir</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}