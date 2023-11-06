import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import HomeSite from "./components/HomeSite";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

// import Card from './components/Card'

import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import Card from "./components/Card";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Tours from "./pages/Tours";
import Tour_single from "./pages/Tour_single";
import Dashboard from "./pages/Dashboard";
import DashSideBar from "./components/DashSideBar";
import DashNavBar from "./components/DashNavBar";
import TourDash from "./dashComponets/TourDash";
import Users from "./dashComponets/Users";
import { AppProvider } from "./components/context/ContextProvider";
const DashLayout = () => {
  return (
    <>
      <DashSideBar />
      <DashNavBar />

      <Outlet />
    </>
  );
};
const AppLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
      {/* <Card/> */}
      <Footer />
    </>
  );
};

const queryClient = new QueryClient();
function Todos() {
  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const query = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  // Mutations
  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
}
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route index element={<HomeSite />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/tour" element={<Tours />} />
                <Route path="/Tour_single" element={<Tour_single />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              <Route element={<DashLayout />}>
                <Route index path="/dash/" element={<Dashboard />} />
                <Route path="tour-dash" element={<TourDash />} />
                <Route path="users-dash" element={<Users />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AppProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
