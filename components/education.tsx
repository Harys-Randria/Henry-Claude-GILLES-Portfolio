'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react'

export default function Education() {
  const education = [
    {
      year: '2018',
      degree: 'Bachelor Responsable de projets informatiques',
      specialty: 'Spécialité système réseaux et sécurité',
      icon: GraduationCap,
    },
    {
      year: '2014',
      degree: 'BTS Services Informatiques aux organisations',
      specialty: "Option SISR (Solutions d'infrastructure, systèmes et réseaux)",
      icon: BookOpen,
    },
    {
      year: '2011',
      degree: 'Baccalauréat Professionnel SEN',
      specialty: 'Option électronique industriel embarqué',
      icon: Award,
    },
  ]

  return (
    // ✅ FIX 1 : padding retiré de la section
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl" />
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
              Formation
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              & certifications
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
        </motion.div>

        {/* ✅ FIX 3 : grid-cols-1 explicite sur mobile, 3 colonnes à partir de md */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
          {education.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* ✅ FIX 4 : padding réduit sur mobile p-5 sm:p-8, layout horizontal sur mobile */}
              <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* ✅ Sur mobile : layout horizontal (icône à gauche, contenu à droite) */}
                {/* ✅ Sur md+  : layout vertical centré comme avant */}
                <div className="relative flex flex-row md:flex-col items-start md:items-center gap-4 p-5 sm:p-6 md:p-8 md:text-center">

                  {/* Icône */}
                  <div className="shrink-0 p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>

                  {/* Contenu */}
                  <div className="flex-1 md:flex md:flex-col md:items-center">
                    {/* Année */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-2">
                      <Calendar className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span className="text-sm font-semibold text-blue-700">{item.year}</span>
                    </div>

                    {/* Diplôme */}
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-800 mb-1 leading-snug">
                      {item.degree}
                    </h3>

                    {/* Spécialité */}
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {item.specialty}
                    </p>
                  </div>
                </div>

                {/* Ligne décorative hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note additionnelle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-sm text-slate-500">
            Formations continues et certifications en cours
          </p>
        </motion.div>
      </div>
    </section>
  )
}