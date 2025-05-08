import react from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact(){

    return(

        <section id="contact" className="bg-gray-900 text-white py-20 px-6 " >
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
            <div>
                <h2 className="text-4xl font-bold text-lime-400 mb-5">Get<span className="text-green-400 "> In Touch</span></h2>

                <p className="text-gray-400 mb-2 font-bold">📍 Casablanca</p>
                <p className="text-gray-400 mb-2 font-bold">✉️ maamriredouane9@gmail.com</p>
                <p className="text-gray-400 mb-6 font-bold">📞 +212628464290</p>
                <div className="flex gap-4 text-3xl">
                <a href="https://github.com/Redouane-Maamri" className="text-white hover:text-green-400"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/redouane-maamri-487895292/" className="text-white hover:text-green-400"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
            </div>

            <form className="space-y-4" action="https://formspree.io/f/mldbbrro" method="POST">

                <input name="email" className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded " type="email" placeholder="You're Email" /><br></br>
                <input  name="phone" className="w-full px-4 bg-gray-800 text-white border border-gray-700 rounded" type="number" placeholder="+212......." /><br></br>
                <textarea name="message" className="w-full px-4 bg-gray-800 text-white border border-gray-700 rounded"  id="" cols="30" rows="10" placeholder="You're Message"></textarea><br></br>

                <input             className="bg-gradient-to-r from-lime-500 to-green-400 text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition"
 type="submit" value="submit" name="" id="" />
            </form>
            </div>
        </section>
    )
}