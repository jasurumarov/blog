import React from 'react'
import { Metadata } from 'next';
import Layout from '@/layout/layout';
import { Content, Hero, Sidebar } from '@/components';
import { Box } from '@mui/material';

export const metadata: Metadata = {
  title: "JasurCoder - Home",
  description: "Generated by create next app",
};

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Box sx={{ display: 'flex', gap: '20px', padding: '20px' }}>
        <Sidebar />
        <Content />
      </Box>
    </Layout>
  )
}

export default Home
