import React from 'react';
import Image from 'next/image';
import logo from '../../public/images/logo.jpeg';

export function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="relative h-12 w-12 mr-3">
            <Image
              src={logo}
              alt="MITUKI Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
              onError={(e) => {
                // Fallback en cas d'erreur de chargement du logo
                e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23003366"/><text x="50%" y="50%" font-family="Arial" font-size="14" fill="white" text-anchor="middle" dominant-baseline="middle">MITUKI</text></svg>';
              }}
            />
          </div>
          <h1 className="text-xl font-bold">QR Badge Dashboard</h1>
        </div>
        <div className="flex space-x-4">
          <a href="/dashboard" className="hover:text-blue-400">Tableau de bord</a>
          <a href="/dashboard/users" className="hover:text-blue-400">Utilisateurs</a>
          <a href="/dashboard/settings" className="hover:text-blue-400">Paramètres</a>
        </div>
      </div>
    </nav>
  );
}
