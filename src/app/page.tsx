'use client';

import { ThemeProvider } from "next-themes";
import ButtonChangeTheme from "./buttonChangeTheme";

export default function Home() {
  return (
    <ThemeProvider attribute='class'>
        <ButtonChangeTheme />
      <h1 className="text-3xl font-bold underline">
      Hello, Next.js!
      </h1>
    </ThemeProvider>
  )
}
