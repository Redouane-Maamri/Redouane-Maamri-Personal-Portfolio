import React from "react";

export default function Formation() {
  const Formations = [
    {
      name: "Ofppt Ntic 1",
      year: "2022 - 2024",
      img: "OFPPT.jpeg",
      description:
        "Formation technique orientée développement web et logiciel : algorithmique, programmation (C++, Java, PHP), conception de bases de données, et gestion de projets. Stage de fin d’études réalisé au Technopark pour appliquer les acquis en entreprise.",
    },
    {
      name: "EMSI Casablanca – Ingénierie en Informatique et Réseaux",
      year: "2024 - Présent",
      img: "EMSI.jpeg",
      description:
        "Formation d’ingénieur axée sur les systèmes informatiques, les réseaux, la cybersécurité et le développement logiciel. Approfondissement des compétences en programmation, architecture réseau, bases de données, et projets techniques en équipe.",
    },
    {
      name: "🎓 American Language Center (ALC) – Niveau Intermédiaire 5 (English)",
      year: "2024 - Présent",
      img: "ALC.jpeg",
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