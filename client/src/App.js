

import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import { enableAuthenticatedApiRequests } from './auth';
import ProtectedRoute from './components/ProtectedRoute';
import AdminLogin from './pages/AdminLogin';
import Home from "./pages/Home";
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import PrivacyNotice from './pages/PrivacyNotice';
import RefundPolicy from './pages/RefundPolicy';
import Test from './pages/test';
import PaymentMethods from './pages/PaymentMethods';
import Cotization from './pages/Cotization';
import PaymentForm from './pages/PaymentForm';
import RedactionTesis from './pages/RedactionTesis';
import ThesisAdvice from './pages/ThesisAdvice';
import Correction from './pages/Correction';
import Monograph from './pages/Monograph';
import MemoryJob from './pages/MemoryJob';
import ScientificArticle from './pages/ScientificArticle';
import PanelAdmin from './pages/PanelAdmin';
import HomeEdit from './pages/HomeEdit';
import StatisticalAnalysis from './pages/StatisticalAnalysis';
import CokePolicies from './pages/CokePolicies';
import AboutEdit from './pages/AboutEdit';
import ServicesEdit from './pages/ServicesEdit';
import ContactEdit from './pages/ContactEdit';
import PaymentMethodsEdit from './pages/PaymentMethodsEdit';
import RedactionTesisEdit from './pages/RedactionTesisEdit';
import ThesisAdviceEdit from './pages/ThesisAdviceEdit';
import CorrectionEdit from './pages/CorrectionEdit';
import MonographEdit from './pages/MonographEdit';
import MemoryJobEdit from './pages/MemoryJobEdit';
import ScientificArticleEdit from './pages/ScientificArticleEdit';
import StatisticalAnalysisEdit from './pages/StatisticalAnalysisEdit';
import SucessPayment from './pages/SucessPayment';
import ErrorPayment from './pages/ErrorPayment';
import PendingPayment from './pages/PendingPayment';



function App() {
  enableAuthenticatedApiRequests();


  return (
    <div>
    <Router>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/sobre-nosotros" element={<About />}/>
      <Route path="/servicios" element={<Services />}/>
      <Route path="/contáctanos" element={<Contact />}/>
      <Route path="/aviso-de-privacidad" element={<PrivacyNotice />}/>
      <Route path="/política-de-reembolso" element={<RefundPolicy />}/>
      <Route path="/métodos-de-pago" element={<PaymentMethods />}/>
      <Route path="/solicitar-cotización" element={<Cotization />}/>
      
      <Route path="/tienda" element={<PaymentForm />}/>
      <Route path="/redacción-tesis" element={<RedactionTesis />}/>
      <Route path="/asesoría-académica" element={<ThesisAdvice />}/>
      <Route path="/correcciones" element={<Correction />}/>
      <Route path="/monografía" element={<Monograph />}/>
      <Route path="/memoria-trabajo" element={<MemoryJob />}/>
      
      <Route path="/artículo-cientifico" element={<ScientificArticle />}/>
      <Route path="/análisis-estadístico" element={<StatisticalAnalysis />}/>
      <Route path="/política-cookies" element={<CokePolicies />}/>
      <Route path="/exitoso" element={<SucessPayment />}/>
      <Route path="/error" element={<ErrorPayment />}/>
      <Route path="/pendiente" element={<PendingPayment />}/>




      
      
      <Route path="/test" element={<Test />}/>
      <Route path="/admin/login" element={<AdminLogin />}/>
      <Route element={<ProtectedRoute />}>
      <Route path="/editar" element={<PanelAdmin />}>

      <Route index element={<HomeEdit />}/>
      <Route path="inicio" element={<HomeEdit />}/>
      <Route path="sobre-nosotros" element={<AboutEdit />}/>
      <Route path="servicios" element={<ServicesEdit />}/>

      <Route path="contáctanos" element={<ContactEdit />}/>
      <Route path="métodos-de-pago" element={<PaymentMethodsEdit />}/>
      <Route path="redacción-tesis" element={<RedactionTesisEdit />}/>
      <Route path="asesoría-académica" element={<ThesisAdviceEdit />}/>
      <Route path="correcciones" element={<CorrectionEdit />}/>
      <Route path="monografía" element={<MonographEdit />}/>
      <Route path="memoria-trabajo" element={<MemoryJobEdit />}/>

      <Route path="artículo-cientifico" element={<ScientificArticleEdit />}/>

      <Route path="análisis-estadístico" element={<StatisticalAnalysisEdit />}/>

      </Route>
      </Route>

      

      </Routes>
      
      </Router> 
    
    </div>
  );
}

export default App;
