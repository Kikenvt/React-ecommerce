import { Link } from "react-router-dom"
import logoImage from './../../../assets/imgs/logo.svg';

const Logo = () => {
  return (
    <div className="flex">

      <Link to="/">
            <img src={logoImage} alt="Logo del comercio virtual" />
      </Link>

    </div>
  )
}

export default Logo
