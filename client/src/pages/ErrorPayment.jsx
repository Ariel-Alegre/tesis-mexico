import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const ErrorPayment = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #f8d7da, #fff)',
        fontFamily: 'Segoe UI, Roboto, sans-serif',
      }}
    >
      <Card
        className="p-5 text-center shadow-lg"
        style={{
          maxWidth: '420px',
          borderRadius: '24px',
          border: 'none',
        }}
      >
        <div className="mb-4">
          <div
            className="mx-auto d-flex justify-content-center align-items-center"
            style={{
              width: '90px',
              height: '90px',
              backgroundColor: '#f8d7da',
              borderRadius: '50%',
              animation: 'pop 0.5s ease-out',
              boxShadow: '0 0 15px rgba(220, 53, 69, 0.4)',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              fill="#dc3545"
              className="bi bi-x-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 5.354a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 5.354z" />
            </svg>
          </div>
        </div>

        <Card.Title className="mb-3" style={{ fontSize: '1.6rem', fontWeight: '600', color: '#dc3545' }}>
          ¡Error en el pago!
        </Card.Title>

        <Card.Text className="text-muted mb-4" style={{ fontSize: '1rem' }}>
          Hubo un problema al procesar su pago. Por favor, inténtelo más tarde.
        </Card.Text>

        <Button
          variant="outline-danger"
          href="/"
          style={{
            borderRadius: '30px',
            padding: '12px 32px',
            fontWeight: '500',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
          }}
        >
          Volver al inicio
        </Button>
      </Card>

      <style>{`
        @keyframes pop {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </Container>
  );
};

export default ErrorPayment;
