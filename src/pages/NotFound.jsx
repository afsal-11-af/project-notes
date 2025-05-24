import React from 'react';

export default function NotFound() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f8f9fa',
            color: '#333'
        }}>
            <h1 style={{ fontSize: '5rem', margin: 0 }}>404</h1>
            <h2 style={{ margin: '1rem 0' }}>Page Not Found</h2>
            <p style={{ marginBottom: '2rem' }}>
                Sorry, the page you are looking for does not exist.
            </p>
            <a
                href="/"
                style={{
                    padding: '0.75rem 1.5rem',
                    background: '#007bff',
                    color: '#fff',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontWeight: 'bold'
                }}
            >
                Go Home
            </a>
        </div>
    );
}