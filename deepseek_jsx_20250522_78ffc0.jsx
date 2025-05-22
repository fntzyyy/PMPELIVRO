import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/Header";

const sections = [
  {
    title: "Português",
    icon: "📚",
    path: "/portugues",
    description: "Gramática, interpretação de textos e redação oficial."
  },
  // ... outras matérias (mesmo formato)
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0f1b] to-[#1a2030]">
      <Header />
      
      <section className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">
            Prepare-se para o Concurso PMPE
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Materiais completos, flashcards e técnicas de estudo eficientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <Card key={section.title} className="bg-[#1c2333] border-yellow-400">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{section.icon}</span>
                  <h2 className="text-xl font-bold">{section.title}</h2>
                </div>
                <p className="text-gray-300 mb-6">{section.description}</p>
                <Link href={section.path}>
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">
                    Acessar Matéria
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}