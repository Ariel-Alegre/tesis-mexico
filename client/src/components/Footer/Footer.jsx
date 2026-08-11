import { Link } from "react-router-dom";

export default function Footer() {


    return (
        <footer id="footer" class="footer position-relative light-background">

        <div class="container footer-top">
          <div class="row gy-4">
            <div class="col-lg-4 col-md-6 footer-about">
              <Link to="/" class="logo d-flex align-items-center" style={{textDecoration: "none"}}>
      <img src={require("../../assets/img/Logo.png")} alt=""/> 

              </Link>
              <div class="footer-contact pt-3">
                <p>Ciudad de Mexico, CDMX.</p>
                <p class="mt-3"><strong>Teléfono:</strong> <a href="tel:+525564727323"  target="_blank" rel="noopener noreferrer">(+52) 55 6472 7323</a></p>
                <p><strong>Correo electrónico:</strong>  <a href="mailto:info@mitesismexico.com"  target="_blank" rel="noopener noreferrer">info@mitesismexico.com </a></p>
              </div>
              <div class="social-links d-flex mt-4">
               {/*  <a href="https://www.instagram.com/mitesismexico" target="_blank" rel="noopener noreferrer"><i class="bi bi-twitter-x"></i></a> */}
                <a href=""><i class="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/mitesismexico" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a>
          {/*       <a href=""><i class="bi bi-linkedin"></i></a> */}
              </div>
            </div>
    
            <div class="col-lg-2 col-md-3 footer-links">
              <h4>Links</h4>
              <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/sobre-nosotros">¿Quienes somos? </Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/contáctanos">Contáctanos</Link></li>
                <li><Link to="/métodos-de-pago">Método de pagos</Link></li>

          
              </ul>
            </div>
    
            <div class="col-lg-2 col-md-3 footer-links">
              <h4>Términos y Políticas</h4>
              <ul>
              <li><Link to="/aviso-de-privacidad">Aviso de privacidad</Link></li>
                <li><Link to="/política-cookies">Política de cookies </Link></li>
                <li><Link to="/política-de-reembolso" >Política de devoluciones y reembolso</Link></li>
            {/*     <li><Link to="#">Términos y condiciones</Link></li> */}
              </ul>
            </div>
    
  {/*      <div class="col-lg-4 col-md-12 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
              <form action="forms/newsletter.php" method="post" class="php-email-form">
                <div class="newsletter-form"><input type="email" name="email"/><input type="submit" value="Subscribe"/></div>
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your subscription request has been sent. Thank you!</div>
              </form>
            </div>  */}
    
          </div>
        </div>
    
        <div class="container copyright text-center mt-4">
          <p>© <span>Copyright</span> <strong class="px-1 sitename">Mi Tesis México</strong> </p>
        {/*   <div class="credits">
     
          Diseñado por <a href="https://www.elaritech.com/"> <img src={require("../../assets/img/Elaritech.jpg")} alt="ELARITECH" style={{width: "50px"}} />ELARITECH</a>
          </div> */}
        </div>
    
      </footer>
    )
}