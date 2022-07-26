import React from 'react';
import { Container } from 'react-bootstrap';
import AdminNavbar from './AdminNavbar';

export default function AdminDashboard() {
  return (
    <Container>
      <AdminNavbar />
      Admin Dashboard
    </Container>
  );
}