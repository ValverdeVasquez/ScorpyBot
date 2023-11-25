import React from "react"
import { SECTION_NAMES } from "../vars"
import RandomRobotGif from "../pagePartials/RandomRobotGif"

import MyImage0 from "../../media/ScorpyBot.png"
import MyImage1 from "../../media/Parts.png"
import MyImage2 from "../../media/Pata.png"
import MyImage3 from "../../media/Pinza.png"
import MyImage4 from "../../media/Mando.png"
import MyImage5 from "../../media/V1.png"

class LandingPage extends React.Component {
    pageName = SECTION_NAMES.landingPage

    componentDidMount = () => this.props.onMount(this.pageName)

    render = () => (
        <>
            <div id="landing">
                <RandomRobotGif />
                <h1>Simulador de robot hexapodo ScorpyBot - Valverde👨🏻‍💻🤖</h1>
                <p style={{fontSize: '6em'}}>
                    ¡Bienvenido a la emocionante aventura de la robótica! Mientras te sumerges en el fascinante mundo de
                    nuestro Robot Escorpión, ten en cuenta que nuestra página web está trabajando arduamente para
                    brindarte una experiencia 3D inmersiva. Aunque puede parecer un poco lenta al principio, ¡no te
                    preocupes! Ya puedes explorar los enlaces que se encuentran a continuación, incluso si la carga
		    completa aún está en proceso. Te recomendamos que no esperes y comiences a descubrir todo lo que
		    tenemos para ofrecerte. ¡Disfruta del viaje!
                </p>
                <p style={{fontSize: '6em'}}>
                    ¡Esta aplicación funciona sin conexión! No olvides compartirlo con tus amigos. ¡Disfruta de tu estancia!😎😎😎
                </p>
		
		<img src={MyImage0} alt="Descripción de la imagen" style={{width: '30%', height: 'auto'}} />
		<img src={MyImage5} alt="Descripción de la imagen" style={{width: '30%', height: 'auto'}} />
		<img src={MyImage4} alt="Descripción de la imagen" style={{width: '30%', height: 'auto'}} />
		<img src={MyImage3} alt="Descripción de la imagen" style={{width: '30%', height: 'auto'}} />
		<img src={MyImage1} alt="Descripción de la imagen" style={{width: '30%', height: 'auto'}} />
		<img src={MyImage2} alt="Descripción de la imagen" style={{width: '30%', height: 'auto'}} />


            </div>
        </>
    )
}

export default LandingPage
