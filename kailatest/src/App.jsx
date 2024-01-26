import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './components/Home';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import "./globals.css";
function App() {

  const queryClient = new QueryClient()
  return (
    <>

      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </BrowserRouter>
    </>
  )
}

export default App

