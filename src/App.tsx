import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calculator,
    LineChart,
    ArrowRight,
    CheckCircle2,
    Phone,
    Mail,
    MapPin,
    Menu,
    X,
    Briefcase,
    Building2,
    MessageCircle,
    Star,
    Quote,
    Sun,
    Moon,
    Globe
} from 'lucide-react';

const whatsappNumber = "5531999999999";
const getWhatsappLink = (message: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const BrandLogo = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center gap-3 ${className}`}>
        <div className="bg-brand-600 flex justify-center items-center w-12 h-12 rounded-[14px] shadow-sm flex-shrink-0 relative overflow-hidden">
            <div className="flex flex-col items-center justify-center mt-0.5">
                <span className="text-white font-extrabold text-[1.4rem] leading-none tracking-tight">C&G</span>
                <span className="text-white text-[0.4rem] font-medium leading-none mt-[2px] tracking-wide">Contabilidade®</span>
            </div>
        </div>
        <span className="text-2xl font-bold text-slate-900 dark:text-white hidden sm:block">
            Carmo & Gueiros
        </span>
    </div>
);

// --- Translations Dictionary ---
type Language = 'pt' | 'en';

const dict = {
    pt: {
        nav: { home: "Início", about: "Sobre Nós", services: "Serviços", clients: "Clientes", contact: "Fale Conosco" },
        hero: {
            badge: "Escritório de Contabilidade Especializado",
            title1: "Eficiência e ",
            titleHighlight: "inovação",
            title2: " pelo sucesso do seu negócio.",
            subtitle: "Combinamos a tradição contábil com inteligência de dados. A Carmo & Gueiros protege o seu patrimônio com excelência.",
            cta: "Agendar Consulta",
            ctaSub: "Nossos Serviços",
            featTitle: "Estratégia e Decisão",
            featDesc: "Sua contabilidade no caminho do crescimento."
        },
        about: {
            badge: "Nossa História",
            title: "Tradição, ética e contabilidade do futuro.",
            p1: "A <strong>Carmo & Gueiros Contabilidade</strong> nasceu com um propósito claro: desburocratizar a gestão empresarial e transformar dados fiscais em ferramentas estratégicas. Guiados pela nossa fundadora Carmo e equipe experiente, oferecemos soluções completas e seguras.",
            p2: "Nossos valores pilares englobam a transparência, inovação contínua e foco integral no sucesso do cliente. Cada parceiro que confia no nosso escritório recebe atendimento personalizado e tecnologia de ponta.",
            stat1Val: "10+", stat1Title: "Anos de Mercado", stat1Desc: "Experiência comprovada",
            stat2Val: "500+", stat2Title: "Clientes Ativos", stat2Desc: "Crescendo conosco"
        },
        services: {
            badge: "Nossas Soluções",
            title: "Tudo que sua empresa precisa, em um só lugar.",
            subtitle: "Oferecemos uma gama completa de serviços contábeis focados em resultados, projetados para aliviar o peso burocrático e potencializar seu crescimento.",
            s1: "Assessoria Contábil", d1: "Demonstrativos precisos, balancetes e total conformidade com a legislação para tomada de decisões seguras.",
            s2: "Planejamento Tributário", d2: "Análise profunda para identificar as melhores oportunidades legais de redução de carga tributária.",
            s3: "Abertura de Empresas", d3: "Processos ágeis do começo ao fim: contrato social, CNPJ, alvarás e enquadramento tributário ideal.",
            s4: "Departamento Pessoal", d4: "Gestão completa da folha de pagamento, férias, recisões e atendimento às obrigações trabalhistas.",
            s5: "Regularização Fiscal", d5: "Ajudamos empresas com pendências a se regularizarem perante a Receita Federal e demais órgãos.",
            s6: "Gestão Financeira", d6: "BPO Financeiro, emissão de notas fiscais e controle de fluxo de caixa diretamente integrados."
        },
        proof: {
            badge: "Prova Social",
            title: "O que dizem nossos clientes",
            subtitle: "O sucesso e a tranquilidade dos nossos parceiros são o maior reflexo da nossa expertise técnica.",
            q1: "A equipe da Carmo & Gueiros revolucionou a forma como olhamos pros nossos números. O planejamento tributário nos economizou muito este ano.",
            q2: "Eficiência e atendimento humanizado. Nunca me senti desamparada pelas rotinas trabalhistas e folhas de pagamento depois que firmamos a parceria.",
            q3: "Desburocratizaram toda a rotina da nossa startup no momento em que mais precisávamos escalar rápido. Indico de olhos fechados!"
        },
        location: {
            badge: "Onde Estamos",
            title: "Venha tomar um café com a gente.",
            subtitle: "Nossa sede está localizada em Belo Horizonte, com fácil acesso e excelente infraestrutura para receber você e entender as necessidades do seu negócio.",
            addrTitle: "Endereço Principal",
            addrDesc: "Avenida Delfino Francisco Xavier, 283<br/>Vale Jatobá - Belo Horizonte, MG",
            phoneTitle: "Atendimento",
            phoneDesc: "(31) 99999-9999 <br/>Segunda a Sexta, das 08h às 18h"
        },
        cta: {
            title: "Pronto para transformar a contabilidade da sua empresa?",
            subtitle: "Deixe a burocracia com a equipe especialista da Carmo & Gueiros e concentre-se no que você faz de melhor: <strong class='text-white'>crescer.</strong>",
            button: "Falar com um Especialista no WhatsApp"
        },
        footer: {
            desc: "Uma parceria sólida e transparente para o sucesso do seu negócio. Excelência em contabilidade e gestão.",
            navTitle: "Navegação Rápida",
            instTitle: "Institucional",
            blog: "Blog Contábil",
            work: "Trabalhe Conosco",
            terms: "Termos de Serviço",
            privacy: "Política de Privacidade",
            rights: "Carmo & Gueiros Contabilidade. Todos os direitos reservados."
        },
        cookies: {
            title: "Cookies & Privacidade 🍪",
            desc: "Utilizamos cookies para melhorar a sua experiência e personalizar conteúdo. Ao continuar navegando, você concorda com a nossa política.",
            accept: "Aceitar e Continuar",
            decline: "Recusar"
        },
        whatsapp: {
            tooltip: "Fale com um contador agora"
        }
    },
    en: {
        nav: { home: "Home", about: "About Us", services: "Services", clients: "Clients", contact: "Contact Us" },
        hero: {
            badge: "Specialized Accounting Firm",
            title1: "Efficiency and ",
            titleHighlight: "innovation",
            title2: " for your business success.",
            subtitle: "We combine traditional accounting with data intelligence. Carmo & Gueiros protects your assets with excellence.",
            cta: "Schedule Consultation",
            ctaSub: "Our Services",
            featTitle: "Strategy & Decision",
            featDesc: "Your accounting on the path to growth."
        },
        about: {
            badge: "Our History",
            title: "Tradition, ethics, and accounting of the future.",
            p1: "<strong>Carmo & Gueiros Accounting</strong> was born with a clear purpose: to streamline business management and turn tax data into strategic tools. Guided by our founder Carmo and an experienced team, we offer complete and secure solutions.",
            p2: "Our core values include transparency, continuous innovation, and an unwavering focus on client success. Every partner who trusts our firm receives personalized service and cutting-edge technology.",
            stat1Val: "10+", stat1Title: "Years in Market", stat1Desc: "Proven experience",
            stat2Val: "500+", stat2Title: "Active Clients", stat2Desc: "Growing with us"
        },
        services: {
            badge: "Our Solutions",
            title: "Everything your company needs, in one place.",
            subtitle: "We offer a complete range of results-focused accounting services designed to relieve administrative burdens and boost your growth.",
            s1: "Accounting Advisory", d1: "Accurate financial statements, trial balances, and full compliance with legislation for sound decision-making.",
            s2: "Tax Planning", d2: "In-depth analysis to identify the best legal opportunities to reduce your overall tax burden.",
            s3: "Company Setup", d3: "Agile processes from start to finish: articles of incorporation, EINs, permits, and ideal tax frameworks.",
            s4: "HR & Payroll", d4: "Complete management of payroll, vacations, terminations, and compliance with strict labor obligations.",
            s5: "Fiscal Regularization", d5: "We help companies with pending matters regularize their status before the IRS and other agencies.",
            s6: "Financial Management", d6: "Financial BPO, invoice issuance, and directly integrated seamless cash flow control."
        },
        proof: {
            badge: "Social Proof",
            title: "What our clients say",
            subtitle: "The success and peace of mind of our partners are the greatest reflection of our technical expertise.",
            q1: "The Carmo & Gueiros team revolutionized the way we look at our numbers. Their tax planning saved us a lot this year.",
            q2: "Efficiency and humanized service. I never felt unsupported by labor routines and payroll after we established our partnership.",
            q3: "They cut through all the red tape for our startup exactly when we needed to scale fast. I recommend them blindly!"
        },
        location: {
            badge: "Where We Are",
            title: "Come have coffee with us.",
            subtitle: "Our headquarters is located in Belo Horizonte, with easy access and an excellent infrastructure to welcome you and understand your business needs.",
            addrTitle: "Main Address",
            addrDesc: "Avenida Delfino Francisco Xavier, 283<br/>Vale Jatobá - Belo Horizonte, MG",
            phoneTitle: "Customer Service",
            phoneDesc: "+55 (31) 99999-9999 <br/>Monday to Friday, 08:00 AM - 06:00 PM"
        },
        cta: {
            title: "Ready to transform your company's accounting?",
            subtitle: "Leave the bureaucracy with the expert team at Carmo & Gueiros and focus on what you do best: <strong class='text-white'>growing.</strong>",
            button: "Speak with an Expert on WhatsApp"
        },
        footer: {
            desc: "A solid and transparent partnership for your business success. Excellence in accounting and management.",
            navTitle: "Quick Links",
            instTitle: "Institutional",
            blog: "Accounting Blog",
            work: "Work With Us",
            terms: "Terms of Service",
            privacy: "Privacy Policy",
            rights: "Carmo & Gueiros Accounting. All rights reserved."
        },
        cookies: {
            title: "Cookies & Privacy 🍪",
            desc: "We use cookies to enhance your experience and personalize content. By continuing to browse, you agree to our privacy policy.",
            accept: "Accept and Continue",
            decline: "Decline"
        },
        whatsapp: {
            tooltip: "Talk to an accountant now"
        }
    }
};

const CookieBanner = ({ t }: { t: typeof dict.pt.cookies }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasConsented = localStorage.getItem('cookieConsent');
        if (!hasConsented) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="fixed bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-auto lg:w-96 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xl p-6 rounded-2xl z-50"
                >
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">{t.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                        {t.desc}
                    </p>
                    <div className="flex gap-3">
                        <button onClick={handleAccept} className="bg-brand-600 text-white px-5 py-2.5 rounded-xl font-medium text-sm w-full hover:bg-brand-700 transition-colors">
                            {t.accept}
                        </button>
                        <button onClick={() => setIsVisible(false)} className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-5 py-2.5 rounded-xl font-medium text-sm w-full hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                            {t.decline}
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [lang, setLang] = useState<Language>('pt');
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const t = dict[lang];

    // Initialize theme from browser preference or local storage
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        } else {
            setTheme('light');
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (theme === 'light') {
            document.documentElement.classList.add('dark');
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    };

    const toggleLang = () => {
        setLang(lang === 'pt' ? 'en' : 'pt');
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300">
            <CookieBanner t={t.cookies} />

            {/* Floating WhatsApp Button */}
            <a
                href={getWhatsappLink('Olá! Estava no site da Carmo & Gueiros e gostaria de mais informações.')}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 group flex items-center justify-center"
                aria-label="Falar conosco no WhatsApp"
            >
                <MessageCircle className="w-8 h-8" />
                <span className="absolute right-full mr-4 bg-slate-900 dark:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-xl">
                    {t.whatsapp.tooltip}
                </span>
            </a>

            {/* Navigation */}
            <nav className="fixed w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md z-40 border-b border-slate-100 dark:border-slate-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <BrandLogo />

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#inicio" className="text-slate-600 dark:text-slate-300 hover:text-brand-600 font-medium transition-colors">{t.nav.home}</a>
                            <a href="#sobre" className="text-slate-600 dark:text-slate-300 hover:text-brand-600 font-medium transition-colors">{t.nav.about}</a>
                            <a href="#servicos" className="text-slate-600 dark:text-slate-300 hover:text-brand-600 font-medium transition-colors">{t.nav.services}</a>
                            <a href="#depoimentos" className="text-slate-600 dark:text-slate-300 hover:text-brand-600 font-medium transition-colors">{t.nav.clients}</a>
                            <a
                                href={getWhatsappLink('Olá! Gostaria de agendar uma conversa com um especialista.')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                            >
                                {t.nav.contact}
                            </a>

                            {/* Controls */}
                            <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-700">
                                <button onClick={toggleTheme} className="p-2 text-slate-600 dark:text-slate-300 hover:text-brand-600 transition-colors" aria-label="Toggle Theme">
                                    {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                                </button>
                                <button onClick={toggleLang} className="flex items-center gap-1 p-2 text-slate-600 dark:text-slate-300 hover:text-brand-600 font-medium text-sm transition-colors" aria-label="Toggle Language">
                                    <Globe className="w-4 h-4" />
                                    {lang.toUpperCase()}
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center gap-4">
                            {/* Controls for Mobile */}
                            <button onClick={toggleTheme} className="p-2 text-slate-600 dark:text-slate-300">
                                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                            </button>
                            <button onClick={toggleLang} className="text-slate-600 dark:text-slate-300 font-medium text-sm">
                                {lang.toUpperCase()}
                            </button>

                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-slate-600 dark:text-slate-300 hover:text-brand-600 p-2"
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 p-4 absolute w-full shadow-lg">
                        <div className="flex flex-col space-y-4">
                            <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 dark:text-slate-300 hover:text-brand-600 font-medium">{t.nav.home}</a>
                            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 dark:text-slate-300 hover:text-brand-600 font-medium">{t.nav.about}</a>
                            <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 dark:text-slate-300 hover:text-brand-600 font-medium">{t.nav.services}</a>
                            <a href="#depoimentos" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 dark:text-slate-300 hover:text-brand-600 font-medium">{t.nav.clients}</a>
                            <a
                                href={getWhatsappLink('Olá! Gostaria de agendar uma conversa com um especialista.')}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMenuOpen(false)}
                                className="inline-block bg-brand-600 text-white px-6 py-3 rounded-xl font-medium text-center"
                            >
                                {t.nav.contact}
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="inicio" className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="max-w-2xl"
                        >
                            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-800 text-brand-700 dark:text-brand-300 font-medium text-sm mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                                </span>
                                {t.hero.badge}
                            </motion.div>
                            <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6 tracking-tight">
                                {t.hero.title1}<span className="text-brand-600">{t.hero.titleHighlight}</span>{t.hero.title2}
                            </motion.h1>
                            <motion.p variants={fadeIn} className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-lg">
                                {t.hero.subtitle}
                            </motion.p>
                            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href={getWhatsappLink('Olá! Gostaria de agendar minha avaliação gratuita.')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex justify-center items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                                >
                                    {t.hero.cta}
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a href="#servicos" className="flex justify-center items-center gap-2 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-200 px-8 py-4 rounded-xl font-semibold text-lg transition-all">
                                    {t.hero.ctaSub}
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* Right Side Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative lg:h-[600px] flex justify-center items-center w-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-slate-50 dark:from-brand-900/40 dark:to-slate-900 rounded-[3rem] transform rotate-2 scale-105 -z-10"></div>
                            <div className="absolute inset-0 bg-white dark:bg-slate-800 shadow-2xl rounded-[3rem] border-4 border-white dark:border-slate-800 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000"
                                    alt="Consultoria Contábil"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-brand-50 dark:bg-brand-900/50 border border-brand-100 dark:border-brand-800 p-3 rounded-xl flex-shrink-0">
                                            <LineChart className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white text-lg">{t.hero.featTitle}</h3>
                                            <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">{t.hero.featDesc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Sobre Nós Section (NEW) */}
            <section id="sobre" className="py-24 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeIn}
                            className="relative rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000"
                                alt="Equipe Carmo & Gueiros"
                                className="w-full h-full object-cover aspect-[4/3] grayscale-[20%]"
                            />
                            <div className="absolute inset-0 border-8 border-brand-600/10 dark:border-brand-400/10 rounded-3xl pointer-events-none"></div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            <motion.h2 variants={fadeIn} className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">{t.about.badge}</motion.h2>
                            <motion.h3 variants={fadeIn} className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">{t.about.title}</motion.h3>
                            <motion.p variants={fadeIn} className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.p1 }} />
                            <motion.p variants={fadeIn} className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.p2 }} />

                            <motion.div variants={fadeIn} className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-100 dark:border-slate-700">
                                <div>
                                    <div className="text-4xl font-extrabold text-brand-600 mb-2">{t.about.stat1Val}</div>
                                    <div className="text-slate-800 dark:text-slate-200 font-semibold">{t.about.stat1Title}</div>
                                    <div className="text-slate-500 dark:text-slate-400 text-sm">{t.about.stat1Desc}</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-extrabold text-brand-600 mb-2">{t.about.stat2Val}</div>
                                    <div className="text-slate-800 dark:text-slate-200 font-semibold">{t.about.stat2Title}</div>
                                    <div className="text-slate-500 dark:text-slate-400 text-sm">{t.about.stat2Desc}</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="servicos" className="py-24 bg-slate-50 dark:bg-slate-900 relative border-t border-slate-100 dark:border-slate-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">{t.services.badge}</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">{t.services.title}</h3>
                        <p className="text-lg text-slate-600 dark:text-slate-300">{t.services.subtitle}</p>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            { icon: <Calculator className="w-8 h-8 text-brand-600" />, title: t.services.s1, desc: t.services.d1 },
                            { icon: <LineChart className="w-8 h-8 text-brand-600" />, title: t.services.s2, desc: t.services.d2 },
                            { icon: <Building2 className="w-8 h-8 text-brand-600" />, title: t.services.s3, desc: t.services.d3 },
                            { icon: <CheckCircle2 className="w-8 h-8 text-brand-600" />, title: t.services.s4, desc: t.services.d4 },
                            { icon: <Briefcase className="w-8 h-8 text-brand-600" />, title: t.services.s5, desc: t.services.d5 },
                            { icon: <LineChart className="w-8 h-8 text-brand-600" />, title: t.services.s6, desc: t.services.d6 }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 hover:border-brand-200 dark:hover:border-brand-500 hover:shadow-xl hover:shadow-brand-900/5 transition-all group"
                            >
                                <div className="bg-slate-50 dark:bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform border border-slate-100 dark:border-slate-700">
                                    {service.icon}
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h4>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Depoimentos Section */}
            <section id="depoimentos" className="py-24 bg-white dark:bg-slate-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">{t.proof.badge}</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">{t.proof.title}</h3>
                        <p className="text-lg text-slate-600 dark:text-slate-300">{t.proof.subtitle}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { quote: t.proof.q1, name: "Roberto Almeida", company: "Almeida Comercio Ltda" },
                            { quote: t.proof.q2, name: "Camila Fernandes", company: "Clínica Vida Saúde" },
                            { quote: t.proof.q3, name: "Lucas Moreira", company: "TechNexus Soluções" }
                        ].map((depoimento, idx) => (
                            <div key={idx} className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 relative">
                                <Quote className="absolute top-6 right-8 w-10 h-10 text-brand-100 dark:text-slate-800" />
                                <div className="flex gap-1 mb-6">
                                    {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 italic mb-8 relative z-10">"{depoimento.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        {depoimento.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-slate-900 dark:text-white">{depoimento.name}</h5>
                                        <span className="text-sm text-brand-600 dark:text-brand-400 font-medium">{depoimento.company}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900 relative border-t border-slate-100 dark:border-slate-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">{t.location.badge}</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">{t.location.title}</h3>
                            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">{t.location.subtitle}</p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white dark:bg-slate-800 p-3 rounded-xl flex-shrink-0 mt-1 shadow-sm border border-slate-100 dark:border-slate-700">
                                        <MapPin className="w-6 h-6 text-brand-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 dark:text-white text-lg">{t.location.addrTitle}</h4>
                                        <p className="text-slate-600 dark:text-slate-300 mt-1" dangerouslySetInnerHTML={{ __html: t.location.addrDesc }} />
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-white dark:bg-slate-800 p-3 rounded-xl flex-shrink-0 mt-1 shadow-sm border border-slate-100 dark:border-slate-700">
                                        <Phone className="w-6 h-6 text-brand-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 dark:text-white text-lg">{t.location.phoneTitle}</h4>
                                        <p className="text-slate-600 dark:text-slate-300 mt-1" dangerouslySetInnerHTML={{ __html: t.location.phoneDesc }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[400px] lg:h-[500px] w-full max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-700 ring-4 ring-white dark:ring-slate-800">
                            <iframe
                                src="https://www.google.com/maps?q=Avenida+Delfino+Francisco+Xavier,+283,+Vale+Jatobá,+Belo+Horizonte&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa da Localização Carmo & Gueiros"
                                className="absolute inset-0 grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-slate-900 dark:bg-black py-24 relative overflow-hidden transition-colors">
                <div className="absolute inset-0 bg-brand-600 opacity-20 transform -skew-y-12"></div>
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-500 blur-3xl rounded-full opacity-20"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">{t.cta.title}</h2>
                    <p className="text-xl text-slate-300 mb-10" dangerouslySetInnerHTML={{ __html: t.cta.subtitle }} />
                    <a
                        href={getWhatsappLink('Olá! Gostaria de transformar a contabilidade da minha empresa.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-brand-600/30"
                    >
                        {t.cta.button}
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>

            {/* Footer & Contact */}
            <footer id="contato" className="bg-slate-50 dark:bg-slate-900 pt-24 pb-12 border-t border-slate-200 dark:border-slate-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        <div className="lg:col-span-2">
                            <div className="mb-6">
                                <BrandLogo />
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-sm">
                                {t.footer.desc}
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                    <Phone className="w-5 h-5 text-brand-600" />
                                    <span dangerouslySetInnerHTML={{ __html: t.location.phoneDesc.split('<br/>')[0] }} />
                                </div>
                                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                    <Mail className="w-5 h-5 text-brand-600" />
                                    <span>contato@carmogueiros.com.br</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                    <MapPin className="w-6 h-6 text-brand-600 flex-shrink-0" />
                                    <span dangerouslySetInnerHTML={{ __html: t.location.addrDesc }} />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-6">{t.footer.navTitle}</h4>
                            <ul className="space-y-3">
                                <li><a href="#inicio" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 transition-colors">{t.nav.home}</a></li>
                                <li><a href="#sobre" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 transition-colors">{t.nav.about}</a></li>
                                <li><a href="#servicos" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 transition-colors">{t.nav.services}</a></li>
                                <li><a href="#depoimentos" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 transition-colors">{t.nav.clients}</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-6">{t.footer.instTitle}</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 transition-colors">{t.footer.blog}</a></li>
                                <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 transition-colors">{t.footer.work}</a></li>
                                <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 transition-colors">{t.footer.terms}</a></li>
                                <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 transition-colors">{t.footer.privacy}</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-center md:flex md:justify-between items-center">
                        <p className="text-slate-500 dark:text-slate-500 text-sm">
                            &copy; {new Date().getFullYear()} {t.footer.rights}
                        </p>
                        <div className="mt-4 md:mt-0 flex gap-4 justify-center">
                            <a href="#" className="text-slate-400 hover:text-brand-600"><span className="sr-only">LinkedIn</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
                            <a href="#" className="text-slate-400 hover:text-brand-600"><span className="sr-only">Instagram</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
