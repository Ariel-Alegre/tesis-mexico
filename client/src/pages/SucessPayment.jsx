import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const SucessPayment = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #f0f2f5, #ffffff)',
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
              backgroundColor: '#e6f4ea',
              borderRadius: '50%',
              animation: 'pop 0.5s ease-out',
              boxShadow: '0 0 15px rgba(40, 167, 69, 0.4)',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              fill="#28a745"
              className="bi bi-check-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 10.03a.75.75 0 0 0 1.08 0l3.992-3.992a.75.75 0 1 0-1.06-1.06L7.5 8.44 6.02 6.97a.75.75 0 1 0-1.06 1.06l2.01 2.01z" />
            </svg>
          </div>
        </div>

        <Card.Title className="mb-3" style={{ fontSize: '1.6rem', fontWeight: '600', color: '#333' }}>
          ¡Abono realizado con éxito!
        </Card.Title>

        <Card.Text className="text-muted mb-4" style={{ fontSize: '1rem' }}>
          Gracias por confiar en nosotros. Tu operación fue procesada sin inconvenientes.
        </Card.Text>

        <Button
          variant="success"
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

export default SucessPayment;
