import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';

function EditServices({ formData, setFormData, dataServices,setPreviewgImage, previewgImage }) {
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
    if (dataServices && Array.isArray(dataServices.allservice) && dataServices.allservice.length > 0) {
      const servicesData = dataServices.allservice[0];
      setFormData((prevData) => ({
        ...prevData,
        id: servicesData.id ,
        title: servicesData.title || '',
        subTitle: servicesData.subTitle || '',

        titleDescription: servicesData.titleDescription || '',
        titleRedaccionDeTesis: servicesData.titleRedaccionDeTesis || '', 
        descriptionRedaccionDeTesis: servicesData.descriptionRedaccionDeTesis || '', 
        titleAsesoriaAcademica: servicesData.titleAsesoriaAcademica || '', 
        descriptionAsesoriaAcademica: servicesData.descriptionAsesoriaAcademica || '', 
        titleCorrecciones: servicesData.titleCorrecciones || '', 
        descriptionCorrecciones: servicesData.descriptionCorrecciones || '', 
        titleMonografia: servicesData.titleMonografia || '', 
        descriptionMonografia: servicesData.descriptionMonografia || '', 
        titleMemoriaDeTrabajo: servicesData.titleMemoriaDeTrabajo || '', 
        descriptionMemoriaDeTrabajo: servicesData.descriptionMemoriaDeTrabajo || '', 
        titleArticuloCientifico: servicesData.titleArticuloCientifico || '', 
        descriptionArticuloCientifico: servicesData.descriptionArticuloCientifico || '', 
        titleAnalisisEstadistico: servicesData.titleAnalisisEstadistico || '', 
        descriptionAnalisisEstadistico: servicesData.descriptionAnalisisEstadistico || '', 
        imgDescription: servicesData.imgDescription || '', 

      }));
      
    }
  }, [dataServices]);
  

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const form = new FormData();


      form.append('title', formData.title || '');
      form.append('subTitle', formData.subTitle || '');
      form.append('titleDescription', formData.titleDescription || '');
      form.append('titleRedaccionDeTesis', formData.titleRedaccionDeTesis || '');
      form.append('descriptionRedaccionDeTesis', formData.descriptionRedaccionDeTesis || '');
      form.append('titleAsesoriaAcademica', formData.titleAsesoriaAcademica || '');
      form.append('descriptionAsesoriaAcademica', formData.descriptionAsesoriaAcademica || '');
      form.append('titleCorrecciones', formData.titleCorrecciones || '');
      form.append('descriptionCorrecciones', formData.descriptionCorrecciones || '');
      form.append('titleMonografia', formData.titleMonografia || '');
      form.append('descriptionMonografia', formData.descriptionMonografia || '');
      form.append('titleMemoriaDeTrabajo', formData.titleMemoriaDeTrabajo || '');
      form.append('descriptionMemoriaDeTrabajo', formData.descriptionMemoriaDeTrabajo || '');
      form.append('titleArticuloCientifico', formData.titleArticuloCientifico || '');
      form.append('descriptionArticuloCientifico', formData.descriptionArticuloCientifico || '');
      form.append('titleAnalisisEstadistico', formData.titleAnalisisEstadistico || '');
      form.append('descriptionAnalisisEstadistico', formData.descriptionAnalisisEstadistico || '');

      
      if (formData.imgDescription) {
        form.append('imgDescription', formData.imgDescription);
      }

    

      if (formData.id) {
        form.append('id', formData.id);
      }

      const method = formData.id ? 'PUT' : 'POST';
      const url = formData.id
        ? `https://tesis-mexico-production.up.railway.app/api/services/${formData.id}`
        : `https://tesis-mexico-production.up.railway.app/api/services`;

      const res = await fetch(url, {
        method,

        body: form,
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
                name="subTitle"
                as="textarea"

                value={formData?.subTitle || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Titulo de la descripción</Form.Label>
              <Form.Control
                name="titleDescription"
                type="text"
                value={formData?.titleDescription || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Imagen de servicios</Form.Label>
              <Form.Control
                type="file"
                name="imgDescription"
                onChange={handleChange}
              />
          
            </Form.Group>
      

            <Form.Group className="mb-3">
              <Form.Label> Titulo de la Redacción de tesis</Form.Label>
              <Form.Control
                name="titleRedaccionDeTesis"
                type="text"
                value={formData?.titleRedaccionDeTesis || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción de Redacción de tesis</Form.Label>
              <Form.Control
                as="textarea"
                name="descriptionRedaccionDeTesis"
                value={formData?.descriptionRedaccionDeTesis || ''}
                onChange={handleChange}
              />
            </Form.Group>
          
            <Form.Group className="mb-3">
              <Form.Label>Título de asesoria académica</Form.Label>
              <Form.Control
                name="titleAsesoriaAcademica"
                type="text"
                value={formData?.titleAsesoriaAcademica || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción  de asesoria académica</Form.Label>
              <Form.Control
                as="textarea"
                name="descriptionAsesoriaAcademica"
                value={formData?.descriptionAsesoriaAcademica || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Título de Correcciones</Form.Label>
              <Form.Control
                name="titleCorrecciones"
                type="text"
                value={formData?.titleCorrecciones || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción de Correcciones</Form.Label>
              <Form.Control
                as="textarea"
                name="descriptionCorrecciones"

                value={formData?.descriptionCorrecciones || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Título de Monografía </Form.Label>
              <Form.Control
                name="titleMonografia"
                type="text"
                value={formData?.titleMonografia || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción de Monografia</Form.Label>
              <Form.Control
                as="textarea"
                name="descriptionMonografia"

                value={formData?.descriptionMonografia || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Título de Memoria de trabajo </Form.Label>
              <Form.Control
                name="titleMemoriaDeTrabajo"
                type="text"
                value={formData?.titleMemoriaDeTrabajo || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción de Memoria de trabajo</Form.Label>
              <Form.Control
                as="textarea" 
                name="descriptionMemoriaDeTrabajo"

                value={formData?.descriptionMemoriaDeTrabajo || ''}
                onChange={handleChange}
              />
            </Form.Group>

            
            <Form.Group className="mb-3">
              <Form.Label>Título de Artículo científico </Form.Label>
              <Form.Control
                name="titleArticuloCientifico"
                type="text"
                value={formData?.titleArticuloCientifico || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción de Artículo científico</Form.Label>
              <Form.Control
                as="textarea"
                name="descriptionArticuloCientifico"

                value={formData?.descriptionArticuloCientifico || ''}
                onChange={handleChange}
              />
            </Form.Group>


            <Form.Group className="mb-3">
              <Form.Label>Título de Análisis Estadístico  </Form.Label>
              <Form.Control
                name="titleAnalisisEstadistico"
                type="text"
                value={formData?.titleAnalisisEstadistico || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción de Análisis Estadístico </Form.Label>
              <Form.Control
                as="textarea"
                name="descriptionAnalisisEstadistico"

                value={formData?.descriptionAnalisisEstadistico || ''}
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

export default EditServices;
