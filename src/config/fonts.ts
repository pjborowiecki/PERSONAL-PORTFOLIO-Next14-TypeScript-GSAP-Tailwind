import { Hanken_Grotesk, Inter } from "next/font/google"
import localFont from "next/font/local"

export const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const fontHankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
})

export const fontFoundersGroteskCondensed = localFont({
  src: "../../public/fonts/founders-grotesk-condensed-bold.ttf",
  weight: "bold",
  style: "normal",
  variable: "--font-founders-grotesk-condensed",
})
