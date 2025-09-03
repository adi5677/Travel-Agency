import { useLocation } from "react-router";
import { cn } from "~/lib/utils";

interface Props {
  title: string;
  description: string;
}


const Header = ({ title, description }: Props) => {
  const location = useLocation();
  return (
    <header className="header">
      <article>
        <h1 className={cn("text-dark-100"
          , location.pathname === '/' ? 'text-3xl md:text-4xl lg:text-5xl' : 'text-2xl md:text-3xl lg:text-4xl'
        )}>{title}</h1>
        <p>{description}</p>
      </article>
    </header>
  )
}

export default Header;