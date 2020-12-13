import React from 'react';
import {Link} from 'react-router-dom';
import './About.css';

function About() {
    return (
        <div className="about">
            <h1>About</h1>
            <h2>Despre aplicatie</h2>
            <p> Aplicatia contine un formular cu input-urile name si email, plus un checkbox pentru clientii Gold. Formularul inainte de a fi adaugat va fi validat, si anume: sa nu contina campuri goale iar input-ul de email sa contina caracterele "@'' si respectiv "."
                Datele din formular vor fi adaugate intr-o lista de utilizatori. Lista pentru fiecare utilizator in parte va contine un buton de stergere utilizator.
                Aplicatia are posibilitatea schimbarii culorii fundalului prin accesarea unui input de tip color.
            </p>

            <p>
                Proiectul are 3 rute:
                <ul>
                    <li>/ - afișează formularul de adăugare a user-ilor, lista user-ilor si butonul de schimbare al culorii de fundal. Toate acestea se gasesc in pagina Home. In subsolul acesteia este un link catre pagina de About.</li>
                
                
                <li>/about - este o pagina separata, ce contine descrierea aplicatiei.</li>
                <li>In cazul in care utilizatorul introduce o ruta inexistenta se va afisa o pagina 404.</li>
                </ul>

            </p>

            <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, totam quasi. Earum explicabo, sapiente similique facere iusto suscipit, consectetur laborum ut expedita dolorem ab! Veritatis in molestias eveniet consequatur at dolores porro ipsam iste eius quibusdam magni accusamus, omnis voluptate.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fuga omnis nihil autem doloremque similique assumenda! Laborum alias nobis recusandae consequatur quos quo laboriosam dolor harum eligendi vero quis explicabo sequi, quia provident accusantium inventore molestiae beatae tempore ratione dolore, quaerat veritatis voluptatem perferendis. Laboriosam aliquam distinctio esse itaque voluptatem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eos repellendus sapiente recusandae ipsa, dicta, dignissimos similique impedit deserunt mollitia, iste ratione illum deleniti reprehenderit natus beatae obcaecati omnis officia incidunt sed eum atque maxime molestiae. Totam, explicabo rerum fuga quas, nobis laudantium, voluptatibus ducimus quam a laborum neque debitis.
            </p>
            <Link to='/' className="link-btn">Go Back to Home</Link>      
        </div>
    )
}

export default About