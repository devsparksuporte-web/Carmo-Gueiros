import React from 'react';
import { motion } from 'framer-motion';
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
    Building2
} from 'lucide-react';

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

function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            {/* Navigation */}
            <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <BrandLogo />

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#inicio" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Início</a>
                            <a href="#servicos" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Serviços</a>
                            <a href="#sobre" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Sobre Nós</a>
                            <a href="#contato" className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
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
                            <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 hover:text-brand-600 font-medium">Serviços</a>
                            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 hover:text-brand-600 font-medium">Sobre Nós</a>
                            <a href="#contato" onClick={() => setIsMenuOpen(false)} className="inline-block bg-brand-600 text-white px-6 py-3 rounded-xl font-medium text-center">
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
                                <a href="#contato" className="group flex justify-center items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
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

            {/* Services Section */}
            <section id="servicos" className="py-24 bg-white relative">
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
                                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 transition-all group"
                            >
                                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Location Section */}
            <section className="py-24 bg-slate-50 relative">
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
                                        <p className="text-slate-600 mt-1">(31) 99999-9999 <br />Segunda a Sexta, das 08h às 18h</p>
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
                    <a href="#contato" className="inline-flex justify-center items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-brand-600/30">
                        Falar com um Especialista
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
                                    <span>(31) 99223-3388 / (31) 99144-4134</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-600">
                                    <Mail className="w-5 h-5 text-brand-600" />
                                    <span>contabilidadecarmoegueiros@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-600">
                                    <MapPin className="w-6 h-6 text-brand-600 flex-shrink-0" />
                                    <span>Avenida Delfino Francisco Xavier<br />Vale Jatobá, 283 - Belo Horizonte</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold text-slate-900 mb-6">Serviços Rápidos</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-slate-600 hover:text-brand-600 transition-colors">Abertura de Empresa</a></li>
                                <li><a href="#" className="text-slate-600 hover:text-brand-600 transition-colors">Troca de Contador</a></li>
                                <li><a href="#" className="text-slate-600 hover:text-brand-600 transition-colors">Emissão de Certidões</a></li>
                                <li><a href="#" className="text-slate-600 hover:text-brand-600 transition-colors">Planejamento Financeiro</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-slate-900 mb-6">Institucional</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-slate-600 hover:text-brand-600 transition-colors">Sobre Nós</a></li>
                                <li><a href="#" className="text-slate-600 hover:text-brand-600 transition-colors">Blog Contábil</a></li>
                                <li><a href="#" className="text-slate-600 hover:text-brand-600 transition-colors">Trabalhe Conosco</a></li>
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
                            <a href="#" className="text-slate-400 hover:text-brand-600"><span className="sr-only">Instagram</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
