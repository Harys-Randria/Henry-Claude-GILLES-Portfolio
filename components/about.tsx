'use client'

import { motion } from 'framer-motion'
import { Mail, Award, Calendar } from 'lucide-react'

export default function About() {
  return (
    // ✅ FIX 1 : padding retiré de la <section>, centralisé sur le container
    <section
      id="about"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/30"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl" />
      </div>

      {/* ✅ FIX 2 : padding horizontal unifié ici uniquement */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ✅ FIX 3 : gap réduit sur mobile, grid-cols-1 explicite */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* ─── Left Column — Titre ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                À propos
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-4" />
          </motion.div>

          {/* ─── Right Column — Contenu ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Bio */}
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
                Ingénieur Support IT freelance avec{' '}
                <span className="font-semibold text-blue-600">+8 ans d'expérience</span>,
                je transforme l'infrastructure IT des entreprises en avantage compétitif.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Spécialisé dans la gestion de parc à grande échelle (11 000+ postes)
                et le support VIP, j'interviens sur des missions à fort enjeu où la
                performance et la fiabilité sont critiques.
              </p>
            </div>

            {/* ✅ FIX 4 : valeurs clés en 3 colonnes dès xs — cartes compactes */}
            <div className="grid grid-cols-3 gap-3 py-2">
              {[
                { title: 'Disponibilité', value: '7j/7', icon: '⚡' },
                { title: 'SLA', value: 'Gold', icon: '🎯' },
                { title: 'Satisfaction', value: '100%', icon: '⭐' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-3 sm:p-4 bg-white rounded-xl border border-slate-200 hover:shadow-md transition-all duration-300"
                >
                  {/* ✅ emoji taille réduite sur mobile */}
                  <div className="text-xl sm:text-2xl mb-1.5">{item.icon}</div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-700">{item.title}</p>
                  <p className="text-xs text-slate-500">{item.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Expertises */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-600 shrink-0" />
                EXPERTISES
              </p>
              <div className="space-y-3">
                {[
                  { category: 'Infrastructure', skills: 'Windows, Azure AD, Intune, SCCM' },
                  { category: 'Support', skills: 'N1/N2/N3, VIP, ServiceNow' },
                  { category: 'Cloud', skills: 'Office 365, MDM, Migration' },
                ].map((item, i) => (
                  <motion.div
                    key={item.category}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    viewport={{ once: true }}
                    // ✅ FIX 5 : flex-col sur mobile pour éviter que le label
                    //   et les skills se chevauchent quand le texte est long
                    className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2"
                  >
                    <span className="text-xs font-semibold text-blue-600 sm:w-24 shrink-0">
                      {item.category}
                    </span>
                    <span className="text-sm text-slate-600">{item.skills}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact rapide */}
            {/* ✅ FIX 6 : flex-col sur mobile, flex-row à partir de sm */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 pt-4 border-t border-slate-200">
              <motion.a
                href="mailto:henryclaudegilles@outlook.fr"
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                {/* ✅ Email complet toujours visible — tronqué via CSS si trop long */}
                <span className="truncate">henryclaudegilles@outlook.fr</span>
              </motion.a>
              <motion.a
                href="https://calendly.com/henryclaudegilles/30min"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                Prendre RDV
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}