import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';

function EditAbout({ formData, setFormData, dataAbout }) {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    const { name, value } = e.target;


    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    if (dataAbout && Array.isArray(dataAbout.allabout) && dataAbout.allabout.length > 0) {
      const aboutData = dataAbout.allabout[0];
      setFormData((prevData) => ({
        ...prevData,
        id: aboutData.id,
        title: aboutData.title || '',
        subTitle: aboutData.subTitle || '',

        titleDescription: aboutData.titleDescription || '',
        subTitleDescription: aboutData.subTitleDescription || '',

        titleProceso: aboutData.titleProceso || '',


        titleRequerimientos: aboutData.titleRequerimientos || '',
        descriptionRequerimientos: aboutData.descriptionRequerimientos || '',

        titlePresupuesto: aboutData.titlePresupuesto || '',
        descriptionPresupuesto: aboutData.descriptionPresupuesto || '',

        titleRespaldo: aboutData.titleRespaldo || '',
        descriptionRespaldo: aboutData.descriptionRespaldo || '',
        titleExperto: aboutData.titleExperto || '',
        descriptionExperto: aboutData.descriptionExperto || '',
        titleGarantia: aboutData.titleGarantia || '',
        descriptionGarantia: aboutData.descriptionGarantia || '',
      }));

    }
  }, [dataAbout]);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const form = new FormData();

      form.append('title', formData.title || '');
      form.append('subTitle', formData.subTitle || '');


      form.append('titleDescription', formData.titleDescription || '');
      form.append('subTitleDescription', formData.subTitleDescription || '');
      form.append('subTitleDescription2', formData.subTitleDescription2 || '');


      form.append('titleProceso', formData.titleProceso || '');
      form.append('titleRequerimientos', formData.titleRequerimientos || '');
      form.append('descriptionRequerimientos', formData.descriptionRequerimientos || '');
      form.append('titlePresupuesto', formData.titlePresupuesto || '');
      form.append('descriptionPresupuesto', formData.descriptionPresupuesto || '');
      form.append('titleRespaldo', formData.titleRespaldo || '');
      form.append('descriptionRespaldo', formData.descriptionRespaldo || '');
      form.append('titleGarantia', formData.titleGarantia || '');

      form.append('descriptionGarantia', formData.descriptionGarantia || '');

      form.append('titleExperto', formData.titleExperto || '');

      form.append('descriptionExperto', formData.descriptionExperto || '');


      if (formData.id) {
        form.append('id', formData.id);
      }

      const method = formData.id ? 'PUT' : 'POST';
      const url = formData.id
        ? `https://tesis-mexico-production.up.railway.app/api/about/${formData.id}`
        : `https://tesis-mexico-production.up.railway.app/api/about`;

    
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
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
              <Form.Label>Descripción principal</Form.Label>
              <Form.Control
                as="textarea"
                name="subTitleDescription"
                value={formData?.subTitleDescription || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción principal (Segundo parrafo)</Form.Label>
              <Form.Control
                as="textarea"
                name="subTitleDescription2"
                value={formData?.subTitleDescription2 || ''}
                onChange={handleChange}
              />
            </Form.Group>




            <Form.Group className="mb-3">
              <Form.Label>Título "Conoce nuestro proceso"</Form.Label>
              <Form.Control
                name="titleProceso"
                type="text"
                value={formData?.titleProceso || ''}
                onChange={handleChange}
              />
            </Form.Group>



            <Form.Group className="mb-3">
              <Form.Label>Título Requerimiento</Form.Label>
              <Form.Control
                name="titleRequerimientos"
                type="text"
                value={formData?.titleRequerimientos || ''}
                onChange={handleChange}
              />
            </Form.Group>



            <Form.Group className="mb-3">
              <Form.Label>Descripción Requerimiento </Form.Label>
              <Form.Control
                name="descriptionRequerimientos"
                type="text"
                value={formData?.descriptionRequerimientos || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Título Elaboramos un presupuesto  </Form.Label>
              <Form.Control
                name="titlePresupuesto"
                type="text"
                value={formData?.titlePresupuesto || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción de Elaboramos un presupuesto </Form.Label>
              <Form.Control
                as="textarea"
                name="descriptionPresupuesto"

                value={formData?.descriptionPresupuesto || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Título  de TE PONEMOS EN MANOS DE UN EXPERTO </Form.Label>
              <Form.Control
                name="titleExperto"
                type="text"
                value={formData?.titleExperto || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción de TE PONEMOS EN MANOS DE UN EXPERTO </Form.Label>
              <Form.Control
                as="textarea"
                name="descriptionExperto"

                value={formData?.descriptionExperto || ''}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Título de Respaldo de calidad  </Form.Label>
              <Form.Control
                name="titleRespaldo"
                type="text"
                value={formData?.titleRespaldo || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción de Respaldo de calidad  </Form.Label>
              <Form.Control
                as="textarea"
                name="descriptionRespaldo"

                value={formData?.descriptionRespaldo || ''}
                onChange={handleChange}
              />
            </Form.Group>




            <Form.Group className="mb-3">
              <Form.Label>Título Garantía  </Form.Label>
              <Form.Control
                name="titleGarantia"
                type="text"
                value={formData?.titleGarantia || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción de Garantia </Form.Label>
              <Form.Control
                as="textarea"
                name="descriptionGarantia"

                value={formData?.descriptionGarantia || ''}
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

export default EditAbout;
