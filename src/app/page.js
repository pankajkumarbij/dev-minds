"use client";
import Intro from "@/components/landingPage/intro";
import { useSelector } from "react-redux";

export default function Home() {
  const themeMode = useSelector((state) => state.theme.mode);

  return (
    <div>
      <Intro />
    </div>
  );
}
