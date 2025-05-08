import react from "react"

export default function Project(){

    const projects=[
        {img:'/laravel.png',name:'Gestion de Bibliotheques '},
        {img:'/symfony.jpeg',name:'Gestion de Posts '},
        {img:'/projetHTML.png',name:'Landing page About Emsi '},
        {img:'/crudJs.png',name:'Simple Crud gestion des produits ' , src: 'https://redouane-maamri.github.io/Crud-Java-Script/crud.html'
    }
    ]
    return(

        <section id="Projects" className="bg-gray-900 text-white py-20 px-6">

            <div className="text-center mb-16">
                <h2 className="text-4xl text-white font-extrabold text-3xl">💼 My Works :</h2>
                <p class="text-gray-500 font-semibold py-5">
    Welcome! I'm always open to exciting opportunities. Whether you're looking for someone to develop your project, build a custom web application, or need help with a freelance task — I’m here to help bring your ideas to life with dedication and creativity.
</p>
            </div>

            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">

                {projects.map((projet,index)=>(
                    <div key={index}>
                        <p><a href={projet.src} target="_blank"><img src={projet.img} alt={projet.name}  className="rounded-xl w-full h-64 object-cover shadow-lg  hover:scale-105 transition-transform duration-300" /></a></p>

                        <h4 className=" text-center mt-4 text-gray-200 font-bold text-gray200">{projet.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    )
}