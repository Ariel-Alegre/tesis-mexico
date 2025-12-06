import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';

function EditStatisticalAnalysis({ formData, setFormData, dataRedactionTesis,setPreviewgImage, previewgImage }) {
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
    if (dataRedactionTesis && Array.isArray(dataRedactionTesis.allredactiontesis) && dataRedactionTesis.allredactiontesis.length > 0) {
      const redactiontesistData = dataRedactionTesis.allredactiontesis[0];
      setFormData((prevData) => ({
        ...prevData,
        id: redactiontesistData.id ,
        title: redactiontesistData.title || '',
        description: redactiontesistData. description || '',

        titleForm: redactiontesistData.titleForm || '',
        titleForm2: redactiontesistData.titleForm2 || '',
        titleWhy: redactiontesistData.titleWhy || '',
        descriptionWhy: redactiontesistData.descriptionWhy || '',
        titleBottom: redactiontesistData.titleBottom || '',
        descriptionBlue: redactiontesistData.descriptionBlue || '',
        descriptionBlue2: redactiontesistData.descriptionBlue2 || '',
        descriptionBlue3: redactiontesistData.descriptionBlue3 || '',
        imgDescription: redactiontesistData.imgDescription || '',


 



      

      }));
      
    }
  }, [dataRedactionTesis]);
  

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const form = new FormData();
      form.append('title', formData.title || '');
      form.append('description', formData.description || '');

      form.append('titleForm', formData.titleForm || '');
      form.append('titleForm2', formData.titleForm2 || '');
      form.append('titleWhy', formData.titleWhy || '');
      form.append('descriptionWhy', formData.descriptionWhy || '');
      form.append('titleBottom', formData.titleBottom || '');
      form.append('descriptionBlue', formData.descriptionBlue || '');
      form.append('descriptionBlue2', formData.descriptionBlue2 || '');
      form.append('descriptionBlue3', formData.descriptionBlue3 || '');


  
   


    




      
      if (formData.imgDescription) {
        form.append('imgDescription', formData.imgDescription);
      }


      if (formData.id) {
        form.append('id', formData.id);
      }

      const method = formData.id ? 'PUT' : 'POST';
      const url = formData.id
        ? `https://tesis-mexico-production.up.railway.app/api/statisticalanalysis/${formData.id}`
        : `https://tesis-mexico-production.up.railway.app/api/statisticalanalysis`;

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
              <Form.Label>Titulo </Form.Label>
              <Form.Control
                name="title"
                type="text"
                value={formData?.title || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción </Form.Label>
              <Form.Control
                name="description"
                as="textarea"

                value={formData?.description || ''}
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
              <Form.Label>Titulo del formulario (segundo parrafo)</Form.Label>
              <Form.Control
                name="titleForm2"
                type="text"
                value={formData?.titleForm2 || ''}
                onChange={handleChange}
              />
            </Form.Group>
      

            <Form.Group className="mb-3">
              <Form.Label>Titulo del primer fondo azul</Form.Label>
              <Form.Control
                name="titleWhy"
                type="text"
                value={formData?.titleWhy || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción del primer fondo azul </Form.Label>
              <Form.Control
                name="descriptionWhy"
                as="textarea"

                value={formData?.descriptionWhy || ''}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Imagen del formulario</Form.Label>
              <Form.Control
                type="file"
                name="imgDescription"
                onChange={handleChange}
              />
          
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Titulo del ultimo fondo azul</Form.Label>
              <Form.Control
                name="titleBottom"
                type="text"
                value={formData?.titleBottom || ''}
                onChange={handleChange}
              />
            </Form.Group>
        
            <Form.Group className="mb-3">
              <Form.Label>Descripción de contacto </Form.Label>
              <Form.Control
                name="descriptionBlue"
                type="text"
                value={formData?.descriptionBlue || ''}
                onChange={handleChange}
              />
            </Form.Group>


            <Form.Group className="mb-3">
              <Form.Label>Descripción de contacto (segundo parrafo) </Form.Label>
              <Form.Control
                name="descriptionBlue2"
                type="text"
                value={formData?.descriptionBlue2 || ''}
                onChange={handleChange}
              />
            </Form.Group>

         
      {/*       <Form.Group className="mb-3">
              <Form.Label>Descripción de contacto (segundo parrafo) </Form.Label>
              <Form.Control
                name="descriptionBlue3"
                type="text"
                value={formData?.descriptionBlue3 || ''}
                onChange={handleChange}
              />
            </Form.Group> */}
          

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

export default EditStatisticalAnalysis;
