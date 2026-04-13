'use client'

import { motion } from 'framer-motion'
import {
  Cpu, Shield, Smartphone, Server, Ticket, Mail,
  FileText, Wrench, Wifi, Activity, Network, Phone,
  Router, Database, Video, Laptop, Cloud
} from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      category: "Systèmes d'exploitation",
      icon: Cpu,
      gradient: 'from-blue-500 to-cyan-500',
      skills: ['Windows Server 2003/2008/2012r2/2018', 'Windows XP/Vista/Seven/8/10/11', 'DOS', 'Debian', 'Ubuntu', 'Arch', 'KALI Linux', 'MAC OS', 'iOS/Android'],
    },
    {
      category: 'Administration & Gestion',
      icon: Shield,
      gradient: 'from-purple-500 to-pink-500',
      skills: ['Active Directory', 'Azure AD/Entra ID', 'Active Roles', 'SCCM', 'Intunes', 'Apple Business Manager', 'AirWatch', 'KNOX'],
    },
    {
      category: 'MDM',
      icon: Smartphone,
      gradient: 'from-emerald-500 to-teal-500',
      skills: ['Intunes', 'AirWatch', 'Apple Business Manager', 'KNOX', 'Gestion iOS/Android'],
    },
    {
      category: 'Virtualisation',
      icon: Server,
      gradient: 'from-orange-500 to-red-500',
      skills: ['VMware vSphere', 'vCenter Server', 'ESXi', 'Virtual Box', 'Hyper-V', 'Citrix'],
    },
    {
      category: 'Gestion de tickets & ITSM',
      icon: Ticket,
      gradient: 'from-indigo-500 to-blue-500',
      skills: ['ServiceNow', 'Security Central', 'Zendesk', 'Jira', 'KPI/SLA'],
    },
    {
      category: 'Messagerie',
      icon: Mail,
      gradient: 'from-rose-500 to-pink-500',
      skills: ['Office 365', 'MS Outlook', 'Exchange', 'Mozilla Thunderbird', 'iPOP3', 'IMAP'],
    },
    {
      category: 'Bureautique',
      icon: FileText,
      gradient: 'from-green-500 to-emerald-500',
      skills: ['MS Office (2003 à Office 365)', 'Libre Office', 'SharePoint'],
    },
    {
      category: 'Maintenance & Outils',
      icon: Wrench,
      gradient: 'from-slate-500 to-gray-500',
      skills: ['GHOST', 'Gparted', 'Symantec', 'VNC', 'SSH', 'Citrix'],
    },
    {
      category: 'Accès à distance',
      icon: Wifi,
      gradient: 'from-cyan-500 to-blue-500',
      skills: ['RDP', 'SCCM', 'TeamViewer', 'Putty', 'Anydesk', 'Teams', 'FileZilla', 'Win SCP'],
    },
    {
      category: 'Monitoring & Supervision',
      icon: Activity,
      gradient: 'from-red-500 to-orange-500',
      skills: ['Centreon', 'NAGIOS', 'Graylog', 'Nexthink'],
    },
    {
      category: 'Réseaux',
      icon: Network,
      gradient: 'from-blue-600 to-indigo-600',
      skills: ['Windows Server', 'NAS', 'LAN', 'DHCP', 'FTP', 'HTTP/HTTPS', 'VPN', 'DNS', 'TCP-IP'],
    },
    {
      category: 'Télécommunications',
      icon: Phone,
      gradient: 'from-teal-500 to-cyan-500',
      skills: ['ADSL', 'Ethernet', 'GSM', 'CPL', 'VOIP', 'WIFI', 'TCP-IP', 'LAN', 'MAN', 'WAN', 'CISCO IOS'],
    },
    {
      category: 'Équipements réseau',
      icon: Router,
      gradient: 'from-slate-600 to-gray-600',
      skills: ['CISCO', 'Routeurs', 'Switches'],
    },
    {
      category: 'Bases de données',
      icon: Database,
      gradient: 'from-yellow-500 to-amber-500',
      skills: ['IPv4', 'IPv6'],
    },
    {
      category: 'Téléphonie mobile',
      icon: Phone,
      gradient: 'from-lime-500 to-green-500',
      skills: ['Orange Business', 'Bouygues Entreprise', 'eSIM', 'SIM Data'],
    },
    {
      category: 'Salles de réunion',
      icon: Video,
      gradient: 'from-violet-500 to-purple-500',
      skills: ['Microsoft Team Rooms (MTR)', 'Crestron', 'Yealink', 'Zoom Rooms'],
    },
    {
      category: 'Hardware',
      icon: Laptop,
      gradient: 'from-zinc-500 to-slate-500',
      skills: ['HP', 'Lenovo', 'Dell', 'Mac'],
    },
    {
      category: 'Applications SAAS',
      icon: Cloud,
      gradient: 'from-sky-500 to-blue-500',
      skills: ['Slack', 'Varonis', 'SSO'],
    },
  ]

  return (
    // ✅ FIX 1 : padding retiré de la section
    <section
      id="skills"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/30"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl" />
      </div>

      {/* ✅ FIX 2 : padding unifié sur le container */}
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
              Compétences
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              techniques
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
        </motion.div>

        {/* ✅ FIX 3 : 2 colonnes dès mobile (évite 18 cartes empilées),
                        3 colonnes à partir de lg */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {skillCategories.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (index % 9) * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              <div className="relative h-full p-3 sm:p-5 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                {/* Gradient hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Header carte */}
                {/* ✅ FIX 4 : icône plus petite sur mobile, titre taille réduite + line-clamp */}
                <div className="flex items-start gap-2 sm:gap-3 mb-3">
                  <div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-br ${item.gradient} shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                    <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-800 leading-tight mt-0.5">
                    {item.category}
                  </h3>
                </div>

                {/* Skills Tags */}
                {/* ✅ FIX 5 : tags plus petits sur mobile pour tenir dans 2 colonnes */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {item.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 + skillIndex * 0.01 }}
                      viewport={{ once: true }}
                      className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 bg-white border border-slate-200 text-slate-600 text-[10px] sm:text-xs font-medium rounded-full hover:border-blue-300 hover:text-blue-600 transition-all duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Ligne décorative hover */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}