import { useState } from 'react'
import {
  ArrowDownRight, ArrowUpRight, Asterisk, BriefcaseBusiness, Check, Code2,
  ExternalLink, Globe2, Menu, MoveUpRight, Palette, Plus, Send, Settings2,
  Sparkles, X, Zap,
} from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  { number: '01', title: 'Website Development', description: 'Modern responsive websites built for businesses, brands and individuals.', icon: Globe2 },
  { number: '02', title: 'Full-Stack Development', description: 'Frontend + backend development with functional forms, APIs and database-ready architecture.', icon: Code2 },
  { number: '03', title: 'Business Websites', description: 'Professional websites designed to establish credibility and generate enquiries.', icon: BriefcaseBusiness },
  { number: '04', title: 'Landing Pages', description: 'High-converting landing pages designed around a specific goal.', icon: Zap },
  { number: '05', title: 'Website Redesign', description: 'Transform outdated websites into modern responsive experiences.', icon: Palette },
  { number: '06', title: 'Social Media Management', description: 'Content planning, management and digital presence support.', icon: Sparkles },
  { number: '07', title: 'Digital Marketing', description: 'Help businesses improve their online visibility and customer acquisition.', icon: MoveUpRight },
  { number: '08', title: 'Website Maintenance', description: 'Updates, improvements, fixes and ongoing support.', icon: Settings2 },
]

const projects = [
  { name: 'NOVA', category: 'Digital Experience', description: 'A sharp, editorial interface for a forward-thinking creative studio.', tech: ['React', 'Motion', 'Strategy'], tone: 'project-lime', mark: 'N', url: 'https://ashkhalid710-art.github.io/Nova-Website/' },
  { name: 'VÉRRE', category: 'Brand Website', description: 'A considered digital home for a new generation of independent makers.', tech: ['Design', 'Frontend', 'CMS'], tone: 'project-coral', mark: 'V', url: 'https://ashkhalid710-art.github.io/verre-architecture/' },
  { name: 'AURE', category: 'E-commerce Concept', description: 'Quiet luxury meets a frictionless product discovery experience.', tech: ['UX/UI', 'React', 'Commerce'], tone: 'project-blue', mark: 'A', url: 'https://ashkhalid710-art.github.io/Aure-Skincare/' },
  { name: 'Bugatti', category: 'Automotive Showcase', description: 'A high-performance visual system built around speed, detail and desire.', tech: ['WebGL', '3D', 'Development'], tone: 'project-sand', mark: 'B', url: 'https://ashkhalid710-art.github.io/Bugatti-Website/' },
]

function Logo() {
  return <a className="logo" href="#home" aria-label="Aiman home"><span>A</span><i>.</i></a>
}

function Button({ children, href = '#contact', variant = 'primary', onClick }) {
  return <a className={`button button-${variant}`} href={href} onClick={onClick}>{children}<ArrowUpRight size={17} strokeWidth={2.2} /></a>
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <div className="container nav-wrap">
      <Logo />
      <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Main navigation">
        {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        <Button href="#contact">Start a Project</Button>
      </nav>
      <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
  </header>
}

function SectionHeading({ eyebrow, title, text, action }) {
  return <div className="section-heading">
    <div><p className="eyebrow"><Asterisk size={14} /> {eyebrow}</p><h2>{title}</h2></div>
    <div className="heading-side">{text && <p>{text}</p>}{action}</div>
  </div>
}

function Hero() {
  return <section className="hero" id="home">
    <div className="hero-grid" aria-hidden="true"></div>
    <div className="container hero-inner">
      <div className="hero-copy">
        <p className="eyebrow reveal"><Asterisk size={14} /> Independent digital practice</p>
        <h1 className="reveal delay-1">Build a digital<br /><em>presence</em> that<br />moves.</h1>
        <p className="hero-text reveal delay-2">I’m Aiman, a full-stack web developer building modern, responsive and high-performance websites for businesses, brands and individuals.</p>
        <div className="hero-actions reveal delay-3"><Button>Start a Project</Button><Button href="#work" variant="outline">View My Work</Button></div>
      </div>
      <div className="hero-visual reveal delay-2" aria-label="Abstract digital interface visualization">
        <div className="visual-orbit orbit-one"></div><div className="visual-orbit orbit-two"></div>
        <div className="visual-core"><span>AI</span><small>digital<br />solutions</small></div>
        <div className="visual-label label-top">AVAILABLE<br /><strong>FOR SELECT<br />PROJECTS</strong></div>
        <div className="visual-label label-bottom"><span>01</span><span>WEB / DIGITAL</span></div>
        <div className="visual-line line-one"></div><div className="visual-line line-two"></div>
      </div>
    </div>
    <div className="container hero-foot"><span>Scroll to explore</span><ArrowDownRight size={20} /><span className="hero-index">01 — 05</span></div>
  </section>
}

function Services() {
  const [expanded, setExpanded] = useState(null)
  return <section className="section services-section" id="services">
    <div className="container"><SectionHeading eyebrow="What I do" title={<>Digital work with<br /><em>direction.</em></>} text="From first idea to final launch, I make digital products feel clear, capable and unmistakably yours." />
      <div className="services-grid">{services.map((service, index) => { const Icon = service.icon; return <article className={`service-card ${expanded === index ? 'is-expanded' : ''}`} key={service.title} onClick={() => setExpanded(expanded === index ? null : index)}>
        <div className="service-top"><span>{service.number}</span><Icon size={23} strokeWidth={1.5} /></div><h3>{service.title}</h3><p>{service.description}</p><button className="learn-more" aria-expanded={expanded === index}>Learn more <span><Plus size={16} /></span></button>
      </article> })}</div>
    </div>
  </section>
}

function Projects() {
  return <section className="section projects-section" id="work"><div className="container"><SectionHeading eyebrow="Selected work" title={<>A few things I’ve<br /><em>made.</em></>} action={<Button href="#contact" variant="outline">Start a conversation</Button>} />
    <div className="projects-list">{projects.map((project, index) => <article className={`project-card ${project.tone}`} key={project.name}>
      <div className="project-preview"><div className="project-no">0{index + 1}</div><div className="project-mark">{project.mark}<span></span></div><div className="preview-ui"><span></span><span></span><span></span></div><div className="preview-word">{project.name}</div></div>
      <div className="project-info"><div><p className="project-category">{project.category}</p><h3>{project.name}</h3><p>{project.description}</p></div><div className="project-meta"><div className="tech-list">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div><a className="project-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.name} project`}>View project <ArrowUpRight size={18} /></a></div></div>
    </article>)}</div>
  </div></section>
}

function About() {
  return <section className="section about-section" id="about"><div className="container about-grid"><div><p className="eyebrow"><Asterisk size={14} /> A little about me</p><h2>Good work lives<br />between <em>logic</em><br />and feeling.</h2></div><div className="about-copy"><p className="about-lead">I’m focused on creating modern digital experiences that are as useful as they are considered. Every project is an opportunity to make something clearer, faster and more human.</p><p>My toolkit spans HTML, CSS, JavaScript, responsive design, frontend development, backend/API development and website deployment. I care about the details people feel but rarely name: a confident first impression, an effortless interaction, a page that works beautifully on every screen.</p><div className="skills-list">{['HTML / CSS', 'JavaScript', 'Responsive design', 'Frontend development', 'Backend / API', 'Deployment'].map((skill) => <span key={skill}><Check size={15} />{skill}</span>)}</div></div></div></section>
}

function Contact() {
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value })
  const submit = async (event) => {
    event.preventDefault(); const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Please enter a valid email.'
    if (!form.service) nextErrors.service = 'Please choose a service.'
    if (form.message.trim().length < 10) nextErrors.message = 'Tell me a little more about your project.'
    setErrors(nextErrors); if (Object.keys(nextErrors).length) return
    setStatus('loading')
    try { const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) }); if (!response.ok) throw new Error('Unable to send'); setStatus('success'); setForm({ name: '', email: '', service: '', message: '' }) } catch { setStatus('error') }
  }
  return <section className="section contact-section" id="contact"><div className="container contact-grid"><div className="contact-intro"><p className="eyebrow"><Asterisk size={14} /> Have a project in mind?</p><h2>Let’s make<br />something<br /><em>matter.</em></h2><p>Tell me what you’re building, where you’re stuck, or simply what you want to explore. I’ll get back to you with thoughtful next steps.</p><a className="email-link" href="mailto:ashkhalid710@gmail.com">ashkhalid710@gmail.com <ArrowUpRight size={18} /></a></div><form className="contact-form" onSubmit={submit} noValidate><div className="form-row"><label>Name<input name="name" value={form.name} onChange={update} placeholder="Your name" />{errors.name && <small>{errors.name}</small>}</label><label>Email<input type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" />{errors.email && <small>{errors.email}</small>}</label></div><label>What do you need?<select name="service" value={form.service} onChange={update}><option value="">Choose a service</option>{['Website Development', 'Full-Stack Development', 'Website Redesign', 'Landing Page', 'Social Media Management', 'Digital Marketing', 'Other'].map((option) => <option key={option}>{option}</option>)}</select>{errors.service && <small>{errors.service}</small>}</label><label>Tell me about it<textarea name="message" value={form.message} onChange={update} placeholder="A few words about your project, timeline or goals..." rows="5"></textarea>{errors.message && <small>{errors.message}</small>}</label>{status === 'success' && <p className="form-status success"><Check size={16} /> Message received. I’ll be in touch soon.</p>}{status === 'error' && <p className="form-status error">Something went wrong. Please try again or email me directly.</p>}<button className="button button-primary submit-button" disabled={status === 'loading'}>{status === 'loading' ? 'Sending...' : 'Send Message'}{status === 'loading' ? <span className="spinner"></span> : <Send size={17} />}</button></form></div></section>
}

function Footer() {
  return <footer className="site-footer"><div className="container"><div className="footer-main"><div><Logo /><p>Full-Stack Web Developer<br />& Digital Solutions</p></div><div className="footer-links"><div><span>Explore</span>{navItems.slice(0, 4).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div><div><span>Connect</span><a href="#contact">Email</a><a href="https://www.linkedin.com/in/aiman-k-10463527a/" target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={12} /></a><a href="https://github.com/ashkhalid710-art" target="_blank" rel="noreferrer">GitHub <ExternalLink size={12} /></a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Aiman. All rights reserved.</span><span>Built with care for the web.</span></div></div></footer>
}

export default function App() { return <><Navbar /><main><Hero /><Services /><Projects /><About /><Contact /></main><Footer /></> }
