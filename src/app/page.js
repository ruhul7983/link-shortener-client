import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";

export default function Home() {
  return (
    <div >
      <ThemeProvider>
        <Navbar></Navbar>
        <Hero></Hero>
      </ThemeProvider>

    </div>
  );
}
