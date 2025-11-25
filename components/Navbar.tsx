import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
             <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
             </div>
             <span className="font-bold text-2xl text-gray-900 tracking-tight">열린 입 치과</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-primary font-bold'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1 text-primary font-bold mr-2">
                <Phone size={18} />
                <span>02-123-4567</span>
            </div>
            <Button variant="accent" size="sm" onClick={() => window.location.href = '#/contact'}>
              예약하기
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 px-3">
                <Button fullWidth variant="accent" onClick={() => {
                    setIsOpen(false);
                    window.location.href = '#/contact';
                }}>
                    실시간 예약하기
                </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;