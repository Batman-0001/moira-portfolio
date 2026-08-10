import { useEffect, useState } from 'react';
import { Footer } from '@/components/Footer';
import { Navbar, type PageId } from '@/components/Navbar';
import { HomePage } from '@/pages/HomePage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { ExperiencePage } from '@/pages/ExperiencePage';
import { CertificationsPage } from '@/pages/CertificationsPage';
import { AchievementsPage } from '@/pages/AchievementsPage';
import { ContactPage } from '@/pages/ContactPage';

function getPageFromHash(): PageId {
  const page = window.location.hash.replace('#/', '') as PageId;
  return ['home', 'projects', 'experience', 'certifications', 'achievements', 'contact'].includes(page) ? page : 'home';
}

function App() {
  const [page, setPage] = useState<PageId>(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => setPage(getPageFromHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (nextPage: PageId) => {
    window.location.hash = `/${nextPage}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPage(nextPage);
  };

  const pageContent = {
    home: <HomePage onNavigate={navigate} />,
    projects: <ProjectsPage />,
    experience: <ExperiencePage />,
    certifications: <CertificationsPage />,
    achievements: <AchievementsPage />,
    contact: <ContactPage />,
  }[page];

  return (
    <div className="min-h-screen bg-purple-50">
      <Navbar current={page} onNavigate={navigate} />
      <main>{pageContent}</main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
