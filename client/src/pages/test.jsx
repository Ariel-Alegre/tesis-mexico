import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const PendingPayment = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #fff3cd, #ffffff)',
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
              backgroundColor: '#fff3cd',
              borderRadius: '50%',
              animation: 'pop 0.5s ease-out',
              boxShadow: '0 0 15px rgba(255, 193, 7, 0.4)',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              fill="#ffc107"
              className="bi bi-exclamation-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM7.002 4a.905.905 0 0 1 1.996 0l-.35 4.5a.552.552 0 0 1-1.096 0l-.35-4.5zm.998 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </div>
        </div>

        <Card.Title className="mb-3" style={{ fontSize: '1.6rem', fontWeight: '600', color: '#856404' }}>
          Pago en proceso
        </Card.Title>

        <Card.Text className="text-muted mb-4" style={{ fontSize: '1rem' }}>
          Tu transacción está siendo procesada. Por favor, revisa nuevamente en unos momentos.
        </Card.Text>

        <Button
          variant="warning"
          href="/"
          style={{
            borderRadius: '30px',
            padding: '12px 32px',
            fontWeight: '500',
            fontSize: '1rem',
            color: '#fff',
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

export default PendingPayment;
