import { useState } from "react";
import { activitiesData } from "./dataActivities";
import { Divs } from "./divs";

export default function Main({ infoData }) {
  const [selectedActivity, setSelectedActivity] = useState("Krav Maga");

  const activity = activitiesData.find((a) => a.key === selectedActivity);

  return (
    <main>
      <section className="seccion1">
        <div className="div-pasion">
          <h1 className="h1-conoce" id="conoce">
            Conoce nuestra
          </h1>
          <h1 className="h1-pasion">Pasión y Compromiso</h1>
          <h3 className="h3-seccion1">
            Sumérgete en el apasionante mundo de las artes marciales y descubre
            los valores que nos definen. Conócenos y vive experiencias únicas e
            inolvidables.{" "}
            <span className="span-esperamos">Te esperamos!</span>
          </h3>
        </div>

        <div className="div-info">
          <div className="div-imagenes">
            <img
              className="img-muay"
              src="images/muay_thay1.jpeg"
              alt="Clase de Muay Thai"
            />
            <img className="img-bjj" src="images/brazilianjj.jpg" alt="" />
          </div>
          <div className="section1-info">
            <div className="div-section-1">
              <h1 className="h1-flexible title-bold">Horario Flexible</h1>
              <h3 className="subtitle-light">
                Tenemos actividades todos los días de la semana, con un horario
                diverso creado para que se ajuste a tu agenda
              </h3>
            </div>
            <div className="div-all subtitle-light">
              <h1 className="title-bold">Inscripciones</h1>
              <h3 className="subtitle-light">
                Tenemos varios planes para inscripciones, desde todos los días
                hasta un día a la semana, también te ofrecemos clases
                particulares si lo deseas
              </h3>
            </div>
            <div className="div-all">
              <h1 className="title-bold">Contamos con las mejores Instalaciones</h1>
              <h3 className="subtitle-light">
                Tenemos dos áreas para clases: una de 150 m2 y otra de 120m2, en
                pisos sepaarados para mayor privacidad. También hay baños con
                ducha, vestuarios y una zona de descanso con monitores para que
                los acompañantes puedan ver las clases
              </h3>
            </div>
            <div className="div-all">
              <h1 className="title-bold">Haz crecer tu Academia</h1>
              <h3 className="subtitle-light">
                ¿Te apasiona las artes marciales? Te ofrecemos apoyo continuo
                para hacer crecer tu academia, abarcando logística,
                administración, redes sociales, y soporte para eventos, entre
                otros
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="paraTodos" id="paraTodos">
        <div>
          <h1 className="titulo-sec2 title-bold titulo-sec2-h1">
            Artes Marciales para Todos
          </h1>
          <h2 className="titulo-sec2 subtitle-light">
            El mejor espacio en Montevideo para aprender y entrenar artes
            marciales
          </h2>
          <div className="div-render">
            {infoData.map((item) => (
              <Divs key={item.id} img={item.img} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="div-horizontal">
          {activity && (
            <div className="div_presentation">
              <img className="ag-pic" src={activity.img} alt={activity.title} />
              <div className="div-information">
                <h1 className="h1-kravmaga">{activity.title}</h1>
                <h3 className="h3-kravmaga">{activity.subtitle}</h3>

                {activity.instructor && (
                  <div className="div-verde">
                    <h1>Instructor: {activity.instructor}</h1>
                    {activity.description.map((line, idx) => (
                      <h3 key={idx}>{line}</h3>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="contendor-actividades" id="actividades">
            <div>
              <h1 className="titulo-actividades">Nuestras Actividades:</h1>
            </div>
            <div className="div-actividades">
              {activitiesData.map((act) => (
                <h1
                  key={act.id}
                  className="h1-actividades"
                  onClick={() => setSelectedActivity(act.key)}
                  style={{
                    cursor: "pointer",
                    color: selectedActivity === act.key ? "green" : "white",
                  }}
                >
                  {act.key}
                </h1>
              ))}

              <h1 className="h1-actividades">Funcional</h1>
              <h1 className="h1-actividades">Yoga</h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="imagen-free">
          <h1>
            Adquiere una clase de prueba <span className="span-gratis">GRATIS</span>
          </h1>
          <h2>Válido para cualquiera de nuestras acividades</h2>
          <button className="btn-header btn-quieroEmpezar" onClick={() => window.open("https://wa.me/59899008018", "_blank")}>Quiero empezar!</button>
        </div>
      </section>

      <section>
        <div className="div-futuro" id="lugar">
          <h1 className="h1-futuro">
            ¡Ven y Conoce el Lugar donde tu <span className="span-futuro">Futuro Comienza!</span>
          </h1>
        </div>
        <h3 className="h3-futuro">
          ¡Descubre nuestras instalaciones de vanguardia, diseñadas para brindar a
          nuestros estudiantes la mejor experiencia posible! Cada rincón está pensado
          para inspirar, motivar y ofrecer un entorno óptimo para el aprendizaje y desarrollo
        </h3>
        <div className="imagenes-gym">
          <img
            className="gym-pictures"
            src="images/imagenes-gimnasio-1.png"
            alt=""
          />
          <img
            className="gym-pictures"
            src="images/imagenes-gimnasio-2.png"
            alt=""
          />
        </div>
      </section>

      <section className="contacto">
        <div className="div-contacto" id="div-contacto">
          <img
            className="logo-contacto"
            src="images/Logo-Version-completa-sin-fondo-2-1.png"
            alt=""
          />
          <h1>Somos el mejor lugar para aprender de artes marciales en Montevideo</h1>
          <h3>Contáctanos:</h3>
          <div className="div-logos" id="contacto">
            <div className="contacto-logos">
              <img className="logos" src="images/whatsapp-icon-1.png" alt="" />
              <img className="logos" src="images/email-icon.png" alt="" />
              <img className="logos" src="images/instagram-icon.png" alt="" />
            </div>
            <div>
              <h3 className="h3-cont">WhatsApp</h3>
              <p className="parrafo-contacto">099002018</p>
              <h3 className="h3-cont">Email</h3>
              <p className="parrafo-contacto">adgaribaldi@gmail.com</p>
              <h3 className="h3-cont">Instagram</h3>
              <p className="parrafo-contacto">espaciomarcial_uy</p>
            </div>
          </div>
        </div>
        <div className="div-mapa">
          <h1>Ubicación:</h1>
          <div className="direccion">
            <img
              className="marcador"
              src="images/map-pin-svgrepo-com.svg"
              alt=""
            />{" "}
            <span>Comercio 2082, entre Ricaldoni y Lombardini</span>
          </div>
          <iframe
            title="Ubicación Espacio Marcial"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.914156699426!2d-56.13643362519597!3d-34.88350187232641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f8191f0aedf0f%3A0x3e0d32124ecab309!2sEspacio%20Marcial%20Montevideo!5e0!3m2!1ses!2suy!4v1746585121010!5m2!1ses!2suy"
            width="500"
            height="350"
            style={{ border: 0, borderRadius: "10px", marginTop: "1rem" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}