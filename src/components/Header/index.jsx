import avatarImg from "../../assets/avatar.png";
import { links } from "./links";

export function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-center gap-5 text-center">
      <img
        src={avatarImg}
        alt="imagem do perfil"
        className="shadow-md rounded-full bg-brand-500 sm:w-48"
      />
      <div className=" flex flex-col justify-center items-center gap-1 max-w-xl bg-stone-100 rounded-xl py-7 px-9 shadow-md">
        <h1 className="text-lg sm:text-2xl font-bold text-brand-500">
          Huann Victor Brito de Almeida
        </h1>
        <h2 className="text-base sm:text-lg text-brand-500">DESENVOLVEDOR WEB</h2>
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-xs">
          <p className="text-justify">
            Tenho 31 anos, resido em João Pessoa, estado da Paraíba. Estou disponível
            para vagas remotas ou presenciais, também estou aberto a propostas
            para mudar de cidade.
          </p>
          <ul className="flex float-left flex-col gap-0.5">
            {
              Object.entries(links).map(([key, item]) => {
                return(
                  <a 
                    key={key} 
                    href={item.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex gap-1.5 hover:underline hover:underline-offset-4 hover:decoration-brand-500"
                  >
                    <img src={item.icon} alt={item.alt} />
                    <p> {item.text} </p>
                  </a>
                )
              })
            }
          </ul>
        </div>
      </div>
    </header>
  );
}
