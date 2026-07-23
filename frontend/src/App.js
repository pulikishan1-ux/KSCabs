import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Landing from "@/pages/Landing";
import { useSmoothScroll } from "@/lib/useSmoothScroll";

function AppShell() {
  useSmoothScroll();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Landing />} />
      </Routes>
      <Toaster
        position="top-center"
        theme="light"
        toastOptions={{
          style: {
            background: "#FFFFFF",
            border: "1px solid #E5E5E5",
            color: "#0A0A0A",
            fontFamily: "Manrope, sans-serif",
          },
        }}
      />
    </BrowserRouter>
  );
}

function App() {
  return (
    <div className="App">
      <AppShell />
    </div>
  );
}

export default App;
