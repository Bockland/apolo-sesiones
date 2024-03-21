import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SesionPage } from '../pages/SesionPage'

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/*' Component={SesionPage} />
    </Routes>
  )
}
