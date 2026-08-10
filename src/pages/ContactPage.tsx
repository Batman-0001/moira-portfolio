import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter, CheckCircle2 } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { ParallaxBg } from '@/components/Parallax';
import { IMAGES } from '@/data/images';
import { PROFILE } from '@/data/portfolio';

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <div>
      <PageHeader title="Contact" subtitle="// let's make something great" icon={<Mail size={32} />} accent="bg-accent-cyan" />
      <ParallaxBg image={IMAGES.typewriter1} height="min-h-[34vh]" overlay="rgba(88, 28, 135, 0.8)">
        <div className="mx-auto flex min-h-[34vh] max-w-5xl items-center px-4 md:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-sm uppercase text-accent-yellow">Have a project in mind?</p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase text-white md:text-6xl">Drop me a line.</h2>
          </div>
        </div>
      </ParallaxBg>
      <section className="bg-purple-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[0.8fr_1.2fr] md:px-8">
          <div>
            <div className="brutal-border-4 bg-accent-yellow p-6 shadow-brutal-lg">
              <p className="font-mono text-sm uppercase text-gray-900">Quick facts</p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase">Open to interesting problems.</h2>
              <p className="mt-4 leading-relaxed text-gray-800">Whether you need a technical lead, a platform thinker, or someone to make a complicated product feel simple, I would love to hear about it.</p>
            </div>
            <div className="mt-8 space-y-4">
              <a href={`mailto:${PROFILE.email}`} className="brutal-card flex items-center gap-4 p-4 shadow-brutal-purple"><span className="flex h-11 w-11 items-center justify-center border-2 border-gray-900 bg-accent-pink"><Mail size={20} /></span><span><span className="block font-mono text-xs uppercase text-gray-500">Email</span><span className="font-bold text-gray-900">{PROFILE.email}</span></span></a>
              <div className="brutal-card flex items-center gap-4 p-4 shadow-brutal-purple"><span className="flex h-11 w-11 items-center justify-center border-2 border-gray-900 bg-accent-cyan"><MapPin size={20} /></span><span><span className="block font-mono text-xs uppercase text-gray-500">Based in</span><span className="font-bold text-gray-900">{PROFILE.location}</span></span></div>
            </div>
            <div className="mt-8 flex gap-3"><a href={`https://${PROFILE.social.github}`} target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center border-2 border-gray-900 bg-gray-900 text-white shadow-brutal-sm hover:bg-purple-700"><Github size={20} /></a><a href={`https://${PROFILE.social.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center border-2 border-gray-900 bg-white shadow-brutal-sm hover:bg-accent-yellow"><Linkedin size={20} /></a><a href={`https://${PROFILE.social.twitter}`} target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center border-2 border-gray-900 bg-white shadow-brutal-sm hover:bg-accent-yellow"><Twitter size={20} /></a></div>
          </div>
          <div className="brutal-border-4 bg-white p-6 shadow-brutal-lg md:p-8">
            {sent ? <div className="flex min-h-[420px] flex-col items-center justify-center text-center"><div className="flex h-20 w-20 items-center justify-center border-4 border-gray-900 bg-accent-lime shadow-brutal"><CheckCircle2 size={40} /></div><h2 className="mt-8 font-display text-3xl font-bold uppercase">Message received.</h2><p className="mt-3 max-w-md text-gray-600">Thanks for reaching out. Dishaditya will get back to you soon.</p><button onClick={() => setSent(false)} className="mt-6 brutal-btn bg-purple-600 text-white">Send another</button></div> : <form onSubmit={handleSubmit} className="space-y-6"><div><label htmlFor="name" className="mb-2 block font-mono text-sm font-bold uppercase">Your name</label><input id="name" required value={name} onChange={(event) => setName(event.target.value)} className="w-full border-2 border-gray-900 bg-purple-50 px-4 py-3 outline-none focus:bg-accent-yellow" placeholder="Ada Lovelace" /></div><div><label htmlFor="email" className="mb-2 block font-mono text-sm font-bold uppercase">Email address</label><input id="email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} className="w-full border-2 border-gray-900 bg-purple-50 px-4 py-3 outline-none focus:bg-accent-yellow" placeholder="ada@example.com" /></div><div><label htmlFor="message" className="mb-2 block font-mono text-sm font-bold uppercase">Tell me about it</label><textarea id="message" required value={message} onChange={(event) => setMessage(event.target.value)} className="min-h-40 w-full resize-y border-2 border-gray-900 bg-purple-50 px-4 py-3 outline-none focus:bg-accent-yellow" placeholder="What are you building?" /></div><button type="submit" className="brutal-btn w-full bg-purple-600 text-white md:w-auto"><Send size={18} className="mr-2 inline" />Send message</button></form>}
          </div>
        </div>
      </section>
    </div>
  );
}
