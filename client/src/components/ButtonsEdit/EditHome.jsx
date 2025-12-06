import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';

function EditHome({ formData, setFormData, dataHome,setPreviewgImage, previewgImage }) {
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
    if (dataHome && Array.isArray(dataHome.allhome) && dataHome.allhome.length > 0) {
      const homeData = dataHome.allhome[0];
      setFormData((prevData) => ({
        ...prevData,
        id: homeData.id ,
        banner: homeData.banner || '',
        bgImage: homeData.bgImage || '',
        title: homeData.title || '',
        subTitle: homeData.subTitle || '',

        titleDescription: homeData.titleDescription || '',
        subTitleDescription: homeData.subTitleDescription || '',
        item1: homeData.item1 || '', 
        item2: homeData.item2 || '',  
        item3: homeData.item3 || '',  
        titleWhyTesis: homeData.titleWhyTesis || '',
        descriptionTesis: homeData.descriptionTesis || '',

        elaborationImage: homeData.elaborationImage || '',  

        bgImadescriptionTesisge: homeData.bgImadescriptionTesisge || '',  
        titleAsesoria: homeData.titleAsesoria || '',  
        descriptionAsesoria: homeData.descriptionAsesoria || '',
        titleCorreccion: homeData.titleCorreccion || '',
        descriptionCorreccion: homeData.descriptionCorreccion || '',
        titleAccompaniment: homeData.titleAccompaniment || '',
        descriptionAccompaniment: homeData.descriptionAccompaniment || '',
        titleConfidencialidad: homeData.titleConfidencialidad || '',
        descriptionConfidencialidad: homeData.descriptionConfidencialidad || '',
        titleGarantia: homeData.titleGarantia || '',
        descriptionGarantia: homeData.descriptionGarantia || '',
        titleFlexibidad: homeData.titleFlexibidad || '',
        descriptionFlexibidad: homeData.descriptionFlexibidad || '',
      

      }));
      
    }
  }, [dataHome]);
  

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const form = new FormData();
      form.append('banner', formData.banner || '');

      form.append('title', formData.title || '');
      form.append('subTitle', formData.subTitle || '');

  
      form.append('titleDescription', formData.titleDescription || '');
      form.append('subTitleDescription', formData.subTitleDescription || '');

      form.append('item1', formData.item1 || '');
      form.append('item2', formData.item2 || '');
      form.append('item3', formData.item3 || '');
      form.append('titleWhyTesis', formData.titleWhyTesis || '');
      form.append('descriptionTesis', formData.descriptionTesis || '');
      form.append('titleAsesoria', formData.titleAsesoria || '');
      form.append('descriptionAsesoria', formData.descriptionAsesoria || '');
      form.append('titleCorreccion', formData.titleCorreccion || '');

      form.append('descriptionCorreccion', formData.descriptionCorreccion || '');
      form.append('titleAccompaniment', formData.titleAccompaniment || '');
      
      form.append('descriptionAccompaniment', formData.descriptionAccompaniment || '');

      form.append('titleConfidencialidad', formData.titleConfidencialidad || '');

      form.append('descriptionConfidencialidad', formData.descriptionConfidencialidad || '');
      form.append('titleGarantia', formData.titleGarantia || '');
      form.append('descriptionGarantia', formData.descriptionGarantia || '');
      form.append('titleFlexibidad', formData.titleFlexibidad || '');
      form.append('descriptionFlexibidad', formData.descriptionFlexibidad || '');




      
      if (formData.bgImage) {
        form.append('bgImage', formData.bgImage);
      }

      if (formData.elaborationImage) {
        form.append('elaborationImage', formData.elaborationImage);
      }

      if (formData.id) {
        form.append('id', formData.id);
      }

      const method = formData.id ? 'PUT' : 'POST';
      const url = formData.id
        ? `https://tesis-mexico-production.up.railway.app/api/home/${formData.id}`
        : `https://tesis-mexico-production.up.railway.app/api/home`;

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
        {/*   <Form.Group className="mb-3">
              <Form.Label>Texto de banner</Form.Label>
              <Form.Control
                name="banner"
                type="text"
                value={formData?.banner || ''}
                onChange={handleChange}
              />
            </Form.Group> */}
            <Form.Group className="mb-3">
              <Form.Label>Imagen de fondo</Form.Label>
              <Form.Control
                type="file"
                name="bgImage"
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
              <Form.Label>Item 1</Form.Label>
              <Form.Control
                name="item1"
                type="text"
                value={formData?.item1 || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Item 2</Form.Label>
              <Form.Control
                name="item2"
                type="text"
                value={formData?.item2 || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Item 3</Form.Label>
              <Form.Control
                name="item3"
                type="text"
                value={formData?.item3 || ''}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Imagen de elaboración (opcional)</Form.Label>
              <Form.Control
                type="file"
                name="elaborationImage"
                onChange={handleChange}
              />
              {previewgImage.elaborationImage && (
                <img
                  src={previewgImage.elaborationImage}
                  alt="Vista previa elaboración"
                  className="mt-2"
                  style={{ maxWidth: '100%' }}
                />
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Título ¿Por qué Tesis?</Form.Label>
              <Form.Control
                name="titleWhyTesis"
                type="text"
                value={formData?.titleWhyTesis || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción ¿Por qué Tesis?</Form.Label>
              <Form.Control
                as="textarea"
                name="descriptionTesis"
                value={formData?.descriptionTesis || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Título Asesoría</Form.Label>
              <Form.Control
                name="titleAsesoria"
                type="text"
                value={formData?.titleAsesoria || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción de Asesoría</Form.Label>
              <Form.Control
                as="textarea"
                name="descriptionAsesoria"

                value={formData?.descriptionAsesoria || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Título Corrección </Form.Label>
              <Form.Control
                name="titleCorreccion"
                type="text"
                value={formData?.titleCorreccion || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción de Corrección</Form.Label>
              <Form.Control
                as="textarea"
                name="descriptionCorreccion"

                value={formData?.descriptionCorreccion || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Título Acompañamiento </Form.Label>
              <Form.Control
                name="titleAccompaniment"
                type="text"
                value={formData?.titleAccompaniment || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción de Acompañamiento</Form.Label>
              <Form.Control
                as="textarea" 
                name="descriptionAccompaniment"

                value={formData?.descriptionAccompaniment || ''}
                onChange={handleChange}
              />
            </Form.Group>

            
            <Form.Group className="mb-3">
              <Form.Label>Título Confidencialidad </Form.Label>
              <Form.Control
                name="titleConfidencialidad"
                type="text"
                value={formData?.titleConfidencialidad || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción de Confidencialidad</Form.Label>
              <Form.Control
                as="textarea"
                name="descriptionConfidencialidad"

                value={formData?.descriptionConfidencialidad || ''}
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

            <Form.Group className="mb-3">
              <Form.Label>Título Flexibidad   </Form.Label>
              <Form.Control
                name="titleFlexibidad"
                type="text"
                value={formData?.titleFlexibidad || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción de Flexibidad  </Form.Label>
              <Form.Control
                as="textarea"
                name="descriptionFlexibidad"

                value={formData?.descriptionFlexibidad || ''}
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

export default EditHome;
