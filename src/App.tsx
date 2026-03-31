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
    Quote
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
        transition: {
            staggerChildren: 0.2
        }
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
        <span className="text-2xl font-bold text-slate-900 hidden sm:block">
            Carmo & Gueiros
        </span>
    </div>
);

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasConsented = localStorage.getItem('cookieConsent');
        if (!hasConsented) {
            // Delaying the banner slightly for better UX
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
                    className="fixed bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-auto lg:w-96 bg-white border border-slate-200 shadow-2xl p-6 rounded-2xl z-50"
                >
                    <h4 className="font-bold text-slate-900 mb-2">Cookies & Privacidade 🍪</h4>
                    <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                        Utilizamos cookies para melhorar a sua experiência e personalizar conteúdo. Ao continuar navegando, você concorda com a nossa política.
                    </p>
                    <div className="flex gap-3">
                        <button onClick={handleAccept} className="bg-brand-600 text-white px-5 py-2.5 rounded-xl font-medium text-sm w-full hover:bg-brand-700 transition-colors">
                            Aceitar e Continuar
                        </button>
                        <button onClick={() => setIsVisible(false)} className="bg-slate-100 text-slate-700 px-5 py-2.5 rounded-xl font-medium text-sm w-full hover:bg-slate-200 transition-colors">
                            Recusar
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            <CookieBanner />

            {/* Floating WhatsApp Button */}
            <a
                href={getWhatsappLink('Olá! Estava no site da Carmo & Gueiros e gostaria de mais informações.')}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 group flex items-center justify-center"
                aria-label="Falar conosco no WhatsApp"
            >
                <MessageCircle className="w-8 h-8" />
                <span className="absolute right-full mr-4 bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-xl">
                    Fale com um contador agora
                </span>
            </a>

            {/* Navigation */}
            <nav className="fixed w-full bg-white/95 backdrop-blur-md z-40 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <BrandLogo />

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#inicio" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Início</a>
                            <a href="#sobre" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Sobre Nós</a>
                            <a href="#servicos" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Serviços</a>
                            <a href="#depoimentos" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Clientes</a>
                            <a
                                href={getWhatsappLink('Olá! Gostaria de agendar uma conversa com um especialista.')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                            >
                                Fale Conosco
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-slate-600 hover:text-brand-600 p-2"
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-slate-100 p-4 absolute w-full shadow-lg">
                        <div className="flex flex-col space-y-4">
                            <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 hover:text-brand-600 font-medium">Início</a>
                            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 hover:text-brand-600 font-medium">Sobre Nós</a>
                            <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 hover:text-brand-600 font-medium">Serviços</a>
                            <a href="#depoimentos" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 hover:text-brand-600 font-medium">Clientes</a>
                            <a
                                href={getWhatsappLink('Olá! Gostaria de agendar uma conversa com um especialista.')}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMenuOpen(false)}
                                className="inline-block bg-brand-600 text-white px-6 py-3 rounded-xl font-medium text-center"
                            >
                                Fale Conosco
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="inicio" className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="max-w-2xl"
                        >
                            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-medium text-sm mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                                </span>
                                Escritório de Contabilidade Especializado
                            </motion.div>
                            <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
                                Eficiência e <span className="text-brand-600">inovação</span> pelo sucesso do seu negócio.
                            </motion.h1>
                            <motion.p variants={fadeIn} className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                                Combinamos a tradição contábil com inteligência de dados. A Carmo & Gueiros protege o seu patrimônio com excelência.
                            </motion.p>
                            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href={getWhatsappLink('Olá! Gostaria de agendar minha avaliação gratuita.')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex justify-center items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                                >
                                    Agendar Consulta
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a href="#servicos" className="flex justify-center items-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all">
                                    Nossos Serviços
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
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-slate-50 rounded-[3rem] transform rotate-2 scale-105 -z-10"></div>
                            <div className="absolute inset-0 bg-white shadow-2xl rounded-[3rem] border-4 border-white overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000"
                                    alt="Consultoria Contábil"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-brand-50 border border-brand-100 p-3 rounded-xl flex-shrink-0">
                                            <LineChart className="w-6 h-6 text-brand-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg">Estratégia e Decisão</h3>
                                            <p className="text-sm text-slate-600 font-medium">Sua contabilidade no caminho do crescimento.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Sobre Nós Section (NEW) */}
            <section id="sobre" className="py-24 bg-white border-t border-slate-100">
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
                            <div className="absolute inset-0 border-8 border-brand-600/10 rounded-3xl pointer-events-none"></div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            <motion.h2 variants={fadeIn} className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Nossa História</motion.h2>
                            <motion.h3 variants={fadeIn} className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Tradição, ética e contabilidade do futuro.</motion.h3>
                            <motion.p variants={fadeIn} className="text-lg text-slate-600 mb-6 leading-relaxed">
                                A <strong>Carmo & Gueiros Contabilidade</strong> nasceu com um propósito claro: desburocratizar a gestão empresarial e transformar dados fiscais em ferramentas estratégicas. Guiados pela nossa fundadora Carmo e equipe experiente, oferecemos soluções completas e seguras.
                            </motion.p>
                            <motion.p variants={fadeIn} className="text-lg text-slate-600 mb-10 leading-relaxed">
                                Nossos valores pilares englobam a transparência, inovação contínua e foco integral no sucesso do cliente. Cada parceiro que confia no nosso escritório recebe atendimento personalizado e tecnologia de ponta.
                            </motion.p>

                            <motion.div variants={fadeIn} className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                                <div>
                                    <div className="text-4xl font-extrabold text-brand-600 mb-2">10+</div>
                                    <div className="text-slate-800 font-semibold">Anos de Mercado</div>
                                    <div className="text-slate-500 text-sm">Experiência comprovada</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-extrabold text-brand-600 mb-2">500+</div>
                                    <div className="text-slate-800 font-semibold">Clientes Ativos</div>
                                    <div className="text-slate-500 text-sm">Crescendo conosco</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="servicos" className="py-24 bg-slate-50 relative border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Nossas Soluções</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Tudo que sua empresa precisa, em um só lugar.</h3>
                        <p className="text-lg text-slate-600">Oferecemos uma gama completa de serviços contábeis focados em resultados, projetados para aliviar o peso burocrático e potencializar seu crescimento.</p>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                icon: <Calculator className="w-8 h-8 text-brand-600" />,
                                title: "Assessoria Contábil",
                                desc: "Demonstrativos precisos, balancetes e total conformidade com a legislação para tomada de decisões seguras."
                            },
                            {
                                icon: <LineChart className="w-8 h-8 text-brand-600" />,
                                title: "Planejamento Tributário",
                                desc: "Análise profunda para identificar as melhores oportunidades legais de redução de carga tributária."
                            },
                            {
                                icon: <Building2 className="w-8 h-8 text-brand-600" />,
                                title: "Abertura de Empresas",
                                desc: "Processos ágeis do começo ao fim: contrato social, CNPJ, alvarás e enquadramento tributário ideal."
                            },
                            {
                                icon: <CheckCircle2 className="w-8 h-8 text-brand-600" />,
                                title: "Departamento Pessoal",
                                desc: "Gestão completa da folha de pagamento, férias, recisões e atendimento às obrigações trabalhistas."
                            },
                            {
                                icon: <Briefcase className="w-8 h-8 text-brand-600" />,
                                title: "Regularização Fiscal",
                                desc: "Ajudamos empresas com pendências a se regularizarem perante a Receita Federal e demais órgãos."
                            },
                            {
                                icon: <LineChart className="w-8 h-8 text-brand-600" />,
                                title: "Gestão Financeira",
                                desc: "BPO Financeiro, emissão de notas fiscais e controle de fluxo de caixa diretamente integrados."
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 transition-all group"
                            >
                                <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform border border-slate-100">
                                    {service.icon}
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Depoimentos Section (Social Proof) */}
            <section id="depoimentos" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Prova Social</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">O que dizem nossos clientes</h3>
                        <p className="text-lg text-slate-600">O sucesso e a tranquilidade dos nossos parceiros são o maior reflexo da nossa expertise técnica.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "A equipe da Carmo & Gueiros revolucionou a forma como olhamos pros nossos números. O planejamento tributário nos economizou muito este ano.",
                                name: "Roberto Almeida",
                                company: "Almeida Comercio Ltda"
                            },
                            {
                                quote: "Eficiência e atendimento humanizado. Nunca me senti desamparada pelas rotinas trabalhistas e folhas de pagamento depois que firmamos a parceria.",
                                name: "Camila Fernandes",
                                company: "Clínica Vida Saúde"
                            },
                            {
                                quote: "Desburocratizaram toda a rotina da nossa startup no momento em que mais precisávamos escalar rápido. Indico de olhos fechados!",
                                name: "Lucas Moreira",
                                company: "TechNexus Soluções"
                            }
                        ].map((depoimento, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
                                <Quote className="absolute top-6 right-8 w-10 h-10 text-brand-100" />
                                <div className="flex gap-1 mb-6">
                                    {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                                </div>
                                <p className="text-slate-700 italic mb-8 relative z-10">"{depoimento.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        {depoimento.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-slate-900">{depoimento.name}</h5>
                                        <span className="text-sm text-brand-600 font-medium">{depoimento.company}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="py-24 bg-slate-50 relative border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Onde Estamos</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Venha tomar um café com a gente.</h3>
                            <p className="text-lg text-slate-600 mb-8">Nossa sede está localizada em Belo Horizonte, com fácil acesso e excelente infraestrutura para receber você e entender as necessidades do seu negócio.</p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-xl flex-shrink-0 mt-1 shadow-sm border border-slate-100">
                                        <MapPin className="w-6 h-6 text-brand-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 text-lg">Endereço Principal</h4>
                                        <p className="text-slate-600 mt-1">Avenida Delfino Francisco Xavier, 283<br />Vale Jatobá - Belo Horizonte, MG</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-xl flex-shrink-0 mt-1 shadow-sm border border-slate-100">
                                        <Phone className="w-6 h-6 text-brand-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 text-lg">Atendimento</h4>
                                        <p className="text-slate-600 mt-1">(31) 99223-3388 / (31) 99144-4134 <br />Segunda a Sexta, das 08h às 18h</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[400px] lg:h-[500px] w-full max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-100 ring-4 ring-white">
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
            <section className="bg-slate-900 py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-600 opacity-20 transform -skew-y-12"></div>
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-500 blur-3xl rounded-full opacity-20"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Pronto para transformar a contabilidade da sua empresa?</h2>
                    <p className="text-xl text-slate-300 mb-10">Deixe a burocracia com a equipe especialista da Carmo & Gueiros e concentre-se no que você faz de melhor: <strong className="text-white">crescer.</strong></p>
                    <a
                        href={getWhatsappLink('Olá! Gostaria de transformar a contabilidade da minha empresa.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-brand-600/30"
                    >
                        Falar com um Especialista no WhatsApp
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>

            {/* Footer & Contact */}
            <footer id="contato" className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        <div className="lg:col-span-2">
                            <div className="mb-6">
                                <BrandLogo />
                            </div>
                            <p className="text-slate-600 mb-8 max-w-sm">
                                Uma parceria sólida e transparente para o sucesso do seu negócio. Excelência em contabilidade e gestão.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-slate-600">
                                    <Phone className="w-5 h-5 text-brand-600" />
                                    <span>(31) 99999-9999</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-600">
                                    <Mail className="w-5 h-5 text-brand-600" />
                                    <span>contato@carmogueiros.com.br</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-600">
                                    <MapPin className="w-6 h-6 text-brand-600 flex-shrink-0" />
                                    <span>Avenida Delfino Francisco Xavier<br />Vale Jatobá, 283 - Belo Horizonte</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold text-slate-900 mb-6">Navegação Rápida</h4>
                            <ul className="space-y-3">
                                <li><a href="#inicio" className="text-slate-600 hover:text-brand-600 transition-colors">Início</a></li>
                                <li><a href="#sobre" className="text-slate-600 hover:text-brand-600 transition-colors">Sobre Nós</a></li>
                                <li><a href="#servicos" className="text-slate-600 hover:text-brand-600 transition-colors">Nossos Serviços</a></li>
                                <li><a href="#depoimentos" className="text-slate-600 hover:text-brand-600 transition-colors">Clientes e Prova Social</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-slate-900 mb-6">Institucional</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-slate-600 hover:text-brand-600 transition-colors">Blog Contábil</a></li>
                                <li><a href="#" className="text-slate-600 hover:text-brand-600 transition-colors">Trabalhe Conosco</a></li>
                                <li><a href="#" className="text-slate-600 hover:text-brand-600 transition-colors">Termos de Serviço</a></li>
                                <li><a href="#" className="text-slate-600 hover:text-brand-600 transition-colors">Política de Privacidade</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-slate-200 text-center md:flex md:justify-between items-center">
                        <p className="text-slate-500 text-sm">
                            &copy; {new Date().getFullYear()} Carmo & Gueiros Contabilidade. Todos os direitos reservados.
                        </p>
                        <div className="mt-4 md:mt-0 flex gap-4 justify-center">
                            <a href="#" className="text-slate-400 hover:text-brand-600"><span className="sr-only">LinkedIn</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
