import { useState } from "react";
import { motion } from "framer-motion";
import { Form, Button, Card, Spinner, Alert } from "react-bootstrap";

export default function FormTesis() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    project: "",
    career: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validateStep1 = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio";
    if (!formData.project.trim()) newErrors.project = "El tema es obligatorio";
    if (!formData.career.trim()) newErrors.career = "La carrera es obligatoria";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    let newErrors = {};
    if (!formData.phone.trim()) newErrors.phone = "El teléfono es obligatorio";
    if (!formData.email.trim()) newErrors.email = "El correo es obligatorio";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (validateStep1()) setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep2()) {
      setLoading(true);
      setSuccessMessage(""); // Limpiar mensaje previo
      try {
        const response = await fetch('https://tesis-mexico-production.up.railway.app/api/cotizacion', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          setSuccessMessage("¡Formulario enviado exitosamente!");
          setFormData({ name: "", project: "", career: "", phone: "", email: "" });
          setStep(1);
        } else {
          alert('Error al enviar el formulario');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Error en la conexión con el servidor');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Card style={{ maxWidth: "500px", padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "10px" }} data-aos="fade-up" data-aos-delay="300">
      <Card.Body>
        <h5 className="card-title text-center" style={{ color: "#023b6d", marginBottom: "30px" }}>
          Solicita un PRESUPUESTO personalizado aquí:
        </h5>
        <Form onSubmit={handleSubmit}>
          {step === 1 && (
            <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre completo</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Ej. Juan Pérez" style={{ borderColor: "#023b6d" }} />
                {errors.name && <p className="text-danger">{errors.name}</p>}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Tema o tipo de proyecto</Form.Label>
                <Form.Control type="text" name="project" value={formData.project} onChange={handleChange} placeholder="Ej. Tesis en Psicología" style={{ borderColor: "#023b6d" }} />
                {errors.project && <p className="text-danger">{errors.project}</p>}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Carrera</Form.Label>
                <Form.Control type="text" name="career" value={formData.career} onChange={handleChange} placeholder="Ej. Ingeniería en Sistemas" style={{ borderColor: "#023b6d" }} />
                {errors.career && <p className="text-danger">{errors.career}</p>}
              </Form.Group>
              <Button variant="primary" className="w-100 mt-3" onClick={handleNext} style={{ backgroundColor: "#023b6d" }}>
                Siguiente
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }}>
              <Form.Group className="mb-3">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Ej. 55 1234 5678" style={{ borderColor: "#023b6d" }} />
                {errors.phone && <p className="text-danger">{errors.phone}</p>}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Ej. correo@example.com" style={{ borderColor: "#023b6d" }} />
                {errors.email && <p className="text-danger">{errors.email}</p>}
              </Form.Group>
              <Button variant="success" className="w-100 mt-2" type="submit" style={{ backgroundColor: "#023b6d" }} disabled={loading}>
                {loading ? (
                  <>
                    <Spinner animation="border" size="sm" /> Enviando...
                  </>
                ) : (
                  "Obtener Cotización"
                )}
              </Button>
              <Button variant="secondary" className="w-100 mt-3" onClick={() => setStep(1)}>
                Atrás
              </Button>
            </motion.div>
          )}
        </Form>

        {successMessage && (
          <Alert variant="success" className="mt-4 text-center">
            {successMessage}
          </Alert>
        )}
      </Card.Body>
    </Card>
  );
}
