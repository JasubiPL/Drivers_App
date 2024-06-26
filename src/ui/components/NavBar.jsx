import { FaRegFilePdf, FaRegSave } from "react-icons/fa"
import { IoIosArrowBack } from "react-icons/io"
import { IoMenu } from "react-icons/io5"
import { TbChartInfographic } from "react-icons/tb"
import { Link } from "react-router-dom"
import { useDetectedUSer } from "../../hooks/useDetectedUser"

export const NavBar = ({children, modal, subPage }) => {

  const user = useDetectedUSer()

  if(modal){
    return(
      <header className="w-full bg-blue-p text-white text-4xl fixed z-10">
        <nav className="py-2 flex justify-between px-4 items-center">
          <Link to={`/${user}`} className="text-4xl">
            <IoIosArrowBack />
          </Link>
          <h2 className="text-xl">{ children }</h2>
          <button onClick={() => confirm("¿Desea guardar los tados?")}>
            <FaRegSave />
          </button>
        </nav>
      </header>
    )
  }else if(subPage){
    return(
      <header className="w-full bg-blue-p text-white text-4xl fixed z-10">
        <nav className="py-2 flex justify-between px-4 items-center">
          <Link to={`/${user}`} className="text-4xl">
            <IoIosArrowBack />
          </Link>
          <h2 className="text-xl">{ children }</h2>
          <button onClick={() => confirm("¿Desea guardar los tados?")}>
            <FaRegFilePdf />
          </button>
        </nav>
      </header>
    )
  }else{
    return(
      <header className="w-full bg-blue-p text-white text-4xl fixed z-10">
        <nav className="py-2 flex justify-between px-4 items-center">
          <IoMenu />
          <h2 className="text-xl">Bitácora de Conducción</h2>
          <Link to={`/${user}/graphics`}>
            <TbChartInfographic />
          </Link>
        </nav>
      </header>
    )
  }
}