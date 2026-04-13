'use client'

import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  Calendar,
  ExternalLink,
  ChevronRight,
} from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const navigation = [
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#expertise' },
    { name: 'Expériences', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const platforms = [
    { name: 'Collective', href: 'https://collective.work/profile/henryclaude-gilles', icon: '/collective.png', isImage: true },
    { name: 'Malt', href: 'https://www.malt.fr/profile/henryclaudegilles', icon: '/malt.png', isImage: true },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/henry-claude-gilles/', icon: '/linkedin.png', isImage: true },
    { name: 'Calendly', href: 'https://calendly.com/henryclaudegilles/30min', icon: Calendar, isImage: false },
  ]

  return (
    // ✅ FIX 1 : padding retiré du footer, centralisé sur le container
    <footer className="relative bg-white/50 backdrop-blur-sm border-t border-slate-200 py-12">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ✅ FIX 2 : grille 2 colonnes sur mobile → 4 sur md
                     Brand prend toute la largeur sur xs, puis 1 colonne sur md */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">

          {/* Brand — pleine largeur sur mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-1"
          >
            <h3 className="text-base sm:text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">
              Henry-Claude GILLES
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Ingénieur Support IT Freelance avec 8+ ans d'expérience en gestion de parc et support VIP.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navigation.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-blue-600 transition-colors group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 shrink-0" />
                    <span className="group-hover:translate-x-0.5 transition-transform">{item.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Plateformes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3">
              Plateformes
            </h4>
            <ul className="space-y-2">
              {platforms.map((platform, index) => (
                <motion.li
                  key={platform.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors group"
                  >
                    {platform.isImage ? (
                      <div className="relative w-4 h-4 shrink-0">
                        <Image
                          src={platform.icon as string}
                          alt={platform.name}
                          width={16}
                          height={16}
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <platform.icon className="w-4 h-4 shrink-0" />
                    )}
                    <span>{platform.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all shrink-0" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Direct */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            // ✅ FIX 3 : pleine largeur sur mobile pour donner de la place à l'email
            className="col-span-2 md:col-span-1"
          >
            <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3">
              Contact Direct
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:henryclaudegilles@outlook.fr"
                  className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors group"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  {/* ✅ FIX 4 : email tronqué sur mobile avec version courte visible */}
                  <span className="group-hover:underline hidden sm:inline">
                    henryclaudegilles@outlook.fr
                  </span>
                  <span className="group-hover:underline sm:hidden">
                    henryclaudegilles<wbr />@outlook.fr
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+33647226769"
                  className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors group"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span className="group-hover:underline">06 47 22 67 69</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-slate-200 pt-8"
        >
          <p className="text-center text-xs text-slate-400">
            © {new Date().getFullYear()} Henry-Claude GILLES • Ingénieur Support IT Freelance
          </p>
        </motion.div>
      </div>
    </footer>
  )
}