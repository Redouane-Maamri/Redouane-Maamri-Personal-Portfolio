import React from "react";

export default function Formation() {
  const Formations = [
    {
      name: "Ofppt Ntic 1",
      year: "2021 - 2023",
      img: "https://media.licdn.com/dms/image/v2/C561BAQG9tciVXJZcdQ/company-background_10000/company-background_10000/0/1585488339216/istantic_cfmoti_cover?e=2147483647&v=beta&t=5GAgyROZr24Scz6xyHcw8G4Vm3FQg38UoEAuFeuvp9Q",
      description:
        "Formation technique orientée développement web et logiciel : algorithmique, programmation (C++, Java, PHP), conception de bases de données, et gestion de projets. Stage de fin d’études réalisé au Technopark pour appliquer les acquis en entreprise.",
    },
    {
      name: "EMSI Casablanca – Ingénierie en Informatique et Réseaux",
      year: "2023 - Présent",
      img: "https://lh3.googleusercontent.com/proxy/104yj1gR1pKEAH0G0PJf_kjTPMp0OfrfprRmbDnD0G6gBPGRlvhJ6ZFQKYuY1I4ynMHWSwQVjht7cgp6iTdiO5VfOFtvFI5ytJ8Pbh-LRQfKS9LZaGsVr5gIesiidA",
      description:
        "Formation d’ingénieur axée sur les systèmes informatiques, les réseaux, la cybersécurité et le développement logiciel. Approfondissement des compétences en programmation, architecture réseau, bases de données, et projets techniques en équipe.",
    },
    {
      name: "🎓 American Language Center (ALC) – Niveau Intermédiaire 5 (English)",
      year: "2024 - Présent",
      img: "https://media.licdn.com/dms/image/v2/C561BAQG9tciVXJZcdQ/company-background_10000/company-background_10000/0/1585488339216/istantic_cfmoti_cover?e=2147483647&v=beta&t=5GAgyROZr24Scz6xyHcw8G4Vm3FQg38UoEAuFeuvp9Q",
      description:
        "Cours d’anglais centrés sur la communication orale, la grammaire, le vocabulaire professionnel et les présentations orales, avec une progression continue vers un niveau avancé.",
    },
  ];

  return (
    <section id="formations" className="bg-gray-800 text-white py-10 px-10">
      <h2 className="text-4xl font-bold text-center mb-10">Formations</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Formations.map((formation, index) => (
          <div
            key={index}
            className="bg-gray-700 p-5 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={formation.img}
              alt={formation.name}
              className="h-40 w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{formation.name}</h3>
            <p className="text-sm text-gray-400 italic mb-2">{formation.year}</p>
            <p className="text-sm text-gray-300">{formation.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}