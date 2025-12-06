import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import {  Link, useLocation } from "react-router-dom";
import ButtonWhatsapp from "../components/ButtonWhatsapp/ButtonWhatsapp";

const AvisoPrivacidad = () => {
          const [loading, setLoading] = React.useState(true);
  
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setLoading(false), 500); // Simulación de carga


  }, [pathname]);
  return (
    <div>
  <Navbar/>
  {loading ? (
                    <div className="text-center">
                    
                            <Spinner  animation="border" role="status" style={{ color: "#023b6d" }} className="my-5">
                              <span className="visually-hidden">Loading...</span>
                            </Spinner>
                    </div>
                  
                          ) : (
                            <>
    <Container className="py-5" data-aos="fade-up">
      <Row>
        <Col>
          <h1 className="text-center">Aviso de Privacidad</h1>
          <p className="text-muted text-center">Última actualización: <strong>[MARZO 2025]</strong></p>
          <p>
            En <strong>WWW.MITESISMÉXICO.COM</strong>, respetamos tu privacidad y nos comprometemos a proteger la información personal que nos proporcionas. Este Aviso de Privacidad tiene como objetivo informarte sobre cómo recopilamos, utilizamos, almacenamos, compartimos y protegemos tus datos personales cuando interactúas con nuestro sitio web <strong>WWW.MITESISMÉXICO.COM</strong> o utilizas nuestros servicios.
          </p>
          <h2>1. Responsable del tratamiento de los datos personales</h2>
          <p>
            El responsable del tratamiento de tus datos personales es MI TESIS MÉXICO. Para cualquier duda, solicitud o ejercicio de derechos relacionados con tus datos personales, puedes contactarnos a través del correo electrónico <a href="mailto:info@mitesismexico.com">info@mitesismexico.com</a> o al teléfono (+52) 55 6472 7323.
          </p>
          <h2>2. Datos personales que recopilamos</h2>
          <p>Recopilamos los siguientes tipos de datos personales cuando visitas nuestro sitio web o utilizas nuestros servicios:</p>
          <ul>
            <li><strong>Datos de identificación:</strong> Nombre, apellidos, correo electrónico, número de teléfono.</li>
            <li><strong>Datos de navegación:</strong> Dirección IP, tipo de navegador, sistema operativo, páginas visitadas, tiempo de permanencia en el sitio y preferencias de idioma.</li>
            <li><strong>Datos de pago:</strong> En caso de compras, recopilamos información relacionada con tu método de pago (por ejemplo, números de tarjeta de crédito/débito) a través de plataformas de pago seguras.</li>
            <li><strong>Cookies y tecnologías similares:</strong> Utilizamos cookies para mejorar tu experiencia de navegación. Puedes gestionar su uso a través de la configuración de tu navegador.</li>
          </ul>
          <h2>3. Finalidad del tratamiento de tus datos personales</h2>
          <p>Tus datos personales son recopilados y tratados para las siguientes finalidades:</p>
          <ul>
            <li>Prestación de servicios: Gestionar tus compras, procesar pagos y entregar productos o servicios solicitados.</li>
            <li>Mejora de la experiencia: Personalizar el contenido del sitio y optimizar tu navegación.</li>
            <li>Comunicaciones comerciales: Enviarte información sobre productos, promociones o novedades, siempre que hayas dado tu consentimiento.</li>
            <li>Atención al cliente: Responder a tus consultas, solicitudes o reclamaciones.</li>
            <li>Cumplimiento legal: Cumplir con obligaciones legales o regulatorias aplicables.</li>
          </ul>
          <h2>4. Base legal para el tratamiento de tus datos personales</h2>
          <p>El tratamiento de tus datos personales se basa en las siguientes bases legales:</p>
          <ul>
            <li><strong>Consentimiento:</strong> Cuando nos autorizas expresamente, por ejemplo, al suscribirte a nuestro boletín o aceptar el uso de cookies.</li>
            <li><strong>Ejecución de un contrato:</strong> Para gestionar tus compras o la prestación de servicios contratados.</li>
            <li><strong>Intereses legítimos:</strong> Para mejorar nuestros servicios, garantizar la seguridad del sitio y realizar análisis de uso.</li>
            <li><strong>Cumplimiento de obligaciones legales:</strong> Cuando sea necesario para cumplir con leyes o regulaciones aplicables.</li>
          </ul>
          <h2>5. Transferencia de datos personales</h2>
          <p>Tus datos personales podrán ser compartidos con terceros en los siguientes casos:</p>
          <ul>
            <li>Proveedores de servicios: Para el procesamiento de pagos, envío de productos, soporte técnico u otros servicios necesarios para la operación del sitio.</li>
            <li>Autoridades competentes: Cuando sea requerido por ley o para proteger nuestros derechos legales.</li>
            <li>Cesión a terceros: En caso de fusión, adquisición o venta de activos, tus datos podrían transferirse al nuevo responsable.</li>
          </ul>
          <p>En caso de transferencias internacionales, garantizamos que se aplicarán las medidas de seguridad adecuadas para proteger tu información.</p>
          <h2>6. Medidas de seguridad</h2>
          <p> Con fundamento en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares en los artículos 6, 7, 8, 9, 11 y 15.  
          </p>
          <h2>7. Derechos de los usuarios</h2>
          <p>Tienes derecho a:</p>
          <ul>
            <li><strong>Acceso:</strong> Solicitar una copia de los datos personales que tenemos sobre ti.</li>
            <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos.</li>
            <li><strong>Cancelación:</strong> Solicitar la eliminación de tus datos cuando ya no sean necesarios para las finalidades descritas.</li>
            <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos en ciertos casos, como el envío de comunicaciones comerciales.</li>
            <li><strong>Portabilidad:</strong> Solicitar que tus datos sean transferidos a otro responsable del tratamiento.</li>
            <li><strong>Revocación del consentimiento:</strong> Retirar tu consentimiento en cualquier momento, sin afectar la legalidad del tratamiento previo.</li>
          </ul>
          <p>Para ejercer estos derechos, contáctanos a través de <a href="mailto:info@mitesismexico.com">info@mitesismexico.com</a>.</p>
          <h2>8. Conservación de los datos</h2>
          <p>Tus datos personales serán conservados durante el tiempo necesario para cumplir con las finalidades descritas en este aviso, así como para cumplir con obligaciones legales o contractuales. Una vez finalizado este plazo, tus datos serán eliminados o anonimizados.</p>
          <h2>9. Cookies y tecnologías similares</h2>
          <p>Utilizamos cookies para mejorar tu experiencia en el sitio. Puedes gestionar o desactivar las cookies a través de la configuración de tu navegador, aunque esto podría afectar algunas funcionalidades del sitio. Para más información, consulta nuestra <Link to="/política-cookies"> Política de Cookies</Link>.</p>
          <h2>10. Modificaciones al Aviso de Privacidad</h2>
          <p>Nos reservamos el derecho de actualizar este Aviso de Privacidad en cualquier momento. Cualquier cambio será publicado en esta página, indicando la fecha de la última actualización. Te recomendamos revisar periódicamente este aviso para estar informado sobre cómo protegemos tus datos.</p>
          <h2>11. Contacto</h2>
          <p>Si tienes preguntas, comentarios o deseas ejercer tus derechos relacionados con este Aviso de Privacidad, no dudes en contactarnos:</p>
          <p><strong>Correo electrónico:</strong> <a href="mailto:info@mitesismexico.com">info@mitesismexico.com</a>
          </p>
          <p><strong>Teléfono:</strong>  (+52) 55 6472 7323</p>
        </Col>
      </Row>

    </Container>
    <ButtonWhatsapp/>
    <Footer/>
</>
        )}

    </div>

  );
};

export default AvisoPrivacidad;