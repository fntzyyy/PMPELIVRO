import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#0a0f1b] border-b border-yellow-400">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-yellow-400">PMPE ESTUDO</span>
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          <Link href="/sobre" className="text-white hover:text-yellow-400">
            Sobre
          </Link>
          <Link href="/contato" className="text-white hover:text-yellow-400">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}