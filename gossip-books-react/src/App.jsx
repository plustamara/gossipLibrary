import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Features from './components/Features';
import Quiz from './components/Quiz';
import Books from './components/Books';
import Mishkat from './components/Mishkat';
import Packages from './components/Packages';
import MandalaCTA from './components/MandalaCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Hero />
      <Concept />
      <Features />
      <Quiz />
      <Books />
      <Mishkat />
      <Packages />
      <MandalaCTA />
      <Contact />
      <Footer />
    </LanguageProvider>
  );
}
