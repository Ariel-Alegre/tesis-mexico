import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';

function EditContact({ formData, setFormData, dataContact,setPreviewgImage, previewgImage }) {
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
        title: contactData.title || '',
        descriptionHeader: contactData.descriptionHeader || '',
        descriptionHeader2: contactData.descriptionHeader2 || '',
        titleTop: contactData.titleTop || '',
        titleTop2: contactData.titleTop2 || '',
        titleForm: contactData.titleForm || '',
        titleImg: contactData.titleImg || '',
        titleBottom: contactData.titleBottom || '',
        titleBottom2: contactData.titleBottom2 || '',
        imgHeader: contactData.imgHeader || '',
        imgForm: contactData.imgForm || '',



      

      }));
      
    }
  }, [dataContact]);
  

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const form = new FormData();
      form.append('title', formData.title || '');
      form.append('descriptionHeader', formData.descriptionHeader || '');
      form.append('descriptionHeader2', formData.descriptionHeader2 || '');
      form.append('titleTop', formData.titleTop || '');
      form.append('titleTop2', formData.titleTop2 || '');
      form.append('titleForm', formData.titleForm || '');
      form.append('titleImg', formData.titleImg || '');
      form.append('titleBottom', formData.titleBottom || '');
      form.append('titleBottom2', formData.titleBottom2 || '');
   


    




      
      if (formData.imgHeader) {
        form.append('imgHeader', formData.imgHeader);
      }

      if (formData.imgForm) {
        form.append('imgForm', formData.imgForm);
      }

      if (formData.id) {
        form.append('id', formData.id);
      }

      const method = formData.id ? 'PUT' : 'POST';
      const url = formData.id
        ? `https://tesis-mexico-production.up.railway.app/api/edit/contact/${formData.id}`
        : `https://tesis-mexico-production.up.railway.app/api/edit/contact`;

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
              <Form.Label>Titulo del header</Form.Label>
              <Form.Control
                name="title"
                type="text"
                value={formData?.title || ''}
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
              <Form.Label>Titulo de la descripción</Form.Label>
              <Form.Control
                name="titleTop"
                type="text"
                value={formData?.titleTop || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Titulo de la descripción (segundo parrafo)</Form.Label>
              <Form.Control
                name="titleTop2"
                type="text"
                value={formData?.titleTop2 || ''}
                onChange={handleChange}
              />
            </Form.Group>
      

            <Form.Group className="mb-3">
              <Form.Label>Titulo de la imagen</Form.Label>
              <Form.Control
                name="titleImg"
                type="text"
                value={formData?.titleImg || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Titulo del formulario</Form.Label>
              <Form.Control
                name="titleForm"
                type="text"
                value={formData?.titleForm || ''}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Imagen del formulario</Form.Label>
              <Form.Control
                type="file"
                name="imgForm"
                onChange={handleChange}
              />
          
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Titulo inferior del formulario </Form.Label>
              <Form.Control
                name="titleBottom"
                type="text"
                value={formData?.titleBottom || ''}
                onChange={handleChange}
              />
            </Form.Group>


            <Form.Group className="mb-3">
              <Form.Label>Titulo inferior del formulario (segundo parrafo) </Form.Label>
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

export default EditContact;
