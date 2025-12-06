import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';

function EditPaymentMethods({ formData, setFormData, dataContact,setPreviewgImage, previewgImage }) {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files && files.length > 0) {
      const file = files[0];
      const previewUrl = URL.createObjectURL(file);

      setFormData((prevData) => ({
        ...prevData,
        [name]: file ,
      }));
      setPreviewgImage((prevData) => ({
        ...prevData,
        [name]: previewUrl,
      }));

  
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    if (dataContact && Array.isArray(dataContact.allcontact) && dataContact.allcontact.length > 0) {
      const contactData = dataContact.allcontact[0];
      setFormData((prevData) => ({
        ...prevData,
        id: contactData.id ,
        descriptionHeader: contactData.descriptionHeader || '',
        descriptionHeader2: contactData.descriptionHeader2 || '',
        titleBtnPayment: contactData.titleBtnPayment || '',
        titleImg: contactData.titleImg || '',
        titleQuotas: contactData.titleQuotas || '',
        description: contactData.description || '',
        description2: contactData.description2 || '',
        titleBottom: contactData.titleBottom || '',
        titleBottom2: contactData.titleBottom2 || '',
        imgHeader: contactData.imgHeader || '',
        imgDescription: contactData.imgDescription || '',






      

      }));
      
    }
  }, [dataContact]);
  

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const form = new FormData();
      form.append('descriptionHeader', formData.descriptionHeader || '');
      form.append('descriptionHeader2', formData.descriptionHeader2 || '');
      form.append('titleBtnPayment', formData.titleBtnPayment || '');
      form.append('titleImg', formData.titleImg || '');
      form.append('titleQuotas', formData.titleQuotas || '');
      form.append('description', formData.description || '');
      form.append('description2', formData.description2 || '');
      form.append('titleBottom', formData.titleBottom || '');
      form.append('titleBottom2', formData.titleBottom2 || '');

   


    




      
      if (formData.imgHeader) {
        form.append('imgHeader', formData.imgHeader);
      }

      if (formData.imgDescription) {
        form.append('imgDescription', formData.imgDescription);
      }

      if (formData.id) {
        form.append('id', formData.id);
      }

      const method = formData.id ? 'PUT' : 'POST';
      const url = formData.id
        ? `https://tesis-mexico-production.up.railway.app/api/paymentmethod/${formData.id}`
        : `https://tesis-mexico-production.up.railway.app/api/paymentmethod`;

      const res = await fetch(url, {
        method,
        body: form, // ✅ Usa el objeto FormData directamente
      });

      const data = await res.json();

      if (res.ok) {
        alert('Cambios guardados correctamente');
        console.log('Respuesta del servidor:', data);
        handleClose();
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (err) {
      console.error('Error al guardar:', err);
      alert('Error al guardar los cambios');
    } finally {
      setLoading(false);
    }
  };



  return (
    <>
           <Button className="btn-getstarted" variant="primary" style={{background: "#023b6d"}} onClick={handleShow}>
        Editar
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Editar Información</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
      
            <Form.Group className="mb-3">
              <Form.Label>Imagen del header</Form.Label>
              <Form.Control
                type="file"
                name="imgHeader"
                onChange={handleChange}
              />
          
            </Form.Group>
            

            <Form.Group className="mb-3">
              <Form.Label>Descripción del header</Form.Label>
              <Form.Control
                name="descriptionHeader"
                as="textarea"

                value={formData?.descriptionHeader || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción del header (segundo parrafo)</Form.Label>
              <Form.Control
                name="descriptionHeader2"
                as="textarea"

                value={formData?.descriptionHeader2 || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Titulo del boton</Form.Label>
              <Form.Control
                name="titleBtnPayment"
                type="text"
                value={formData?.titleBtnPayment || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Titulo encima de la imagen</Form.Label>
              <Form.Control
                name="titleImg"
                type="text"
                value={formData?.titleImg || ''}
                onChange={handleChange}
              />
            </Form.Group>
      
            <Form.Group className="mb-3">
              <Form.Label>Imagen principal</Form.Label>
              <Form.Control
                type="file"
                name="imgDescription"
                onChange={handleChange}
              />
          
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Titulo de las cuotas</Form.Label>
              <Form.Control
                name="titleQuotas"
                type="text"
                value={formData?.titleQuotas || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción debajo de las cuotas </Form.Label>
              <Form.Control
                name="description"
                type="text"
                value={formData?.description || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción debajo de las cuotas (segundo parrafo) </Form.Label>
              <Form.Control
                name="description2"
                type="text"
                value={formData?.description2 || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Titulo final </Form.Label>
              <Form.Control
                name="titleBottom"
                type="text"
                value={formData?.titleBottom || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Titulo final (segundo parrafo ) </Form.Label>
              <Form.Control
                name="titleBottom2"
                type="text"
                value={formData?.titleBottom2 || ''}
                onChange={handleChange}
              />
            </Form.Group>
           

         
          
          

            <div className="d-flex justify-content-between mt-4">
              <Button variant="success" onClick={handleSubmit} disabled={loading}>
                {loading ? 'Guardando...' : 'Guardar Cambios'}
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Salir
              </Button>
            </div>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default EditPaymentMethods;
