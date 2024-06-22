import { ModeToggle } from "./toggle-theme"
import { Button } from "./ui/button"
import { Cinzel } from 'next/font/google'

const cinzel = Cinzel({
  weight: ['500'],
  subsets: ['latin'],
})

const Header = () => {
  return (
    <header className="flex items-center justify-around p-4 border border-black">

      <div className={cinzel.className}>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ">
          Wordfolio
        </h1>
      </div>

      <ul className="flex gap-8">
        <li>
          <Button>Sign In</Button>
        </li>
        <li><ModeToggle /></li>
      </ul>
    </header >
  )
}

export { Header }
