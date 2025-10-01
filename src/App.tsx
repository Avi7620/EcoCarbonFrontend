import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Admin from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import ScrollRestoration from './components/ScrollRestoration';
import ChatBot from './components/ChatBot';

import ChatBotButton from './components/ChatBotButton';


function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <Router>
      <ScrollRestoration />
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Chatbot Floating Button */}
        <ChatBotButton onClick={() => setIsChatOpen(true)} />
        <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/AdminLogin" element={<AdminLogin />} />
            <Route path="/ChatBot" element={<ChatBot isOpen={true} onClose={() => {}} />} />
           
          </Routes>
        </motion.main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
