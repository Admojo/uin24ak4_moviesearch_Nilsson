import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

export default function Button({buttonText, linkTo}) {

    return(
        <>
        {/* <div>
        <button className="btn cube cube-hover" type="button">
        <div className="bg-top">
            <div className="bg-inner"></div>
        </div>
        <div className="bg-right">
            <div className="bg-inner"></div>
        </div>
         <div className="bg">
             <div className="bg-inner"></div>
        </div>
        <div className="text">{buttonText}</div>
    </button>
    </div> */}

    <Link to={linkTo} className="btn cube cube-hover" type="button">
        <div className="bg-top">
            <div className="bg-inner"></div>
        </div>
        <div className="bg-right">
            <div className="bg-inner"></div>
        </div>
        <div className="bg">
             <div className="bg-inner"></div>
        </div>
        <div className="text">{buttonText}</div>
    </Link>
    </>
    )
}

Button.propTypes = {
    buttonText: PropTypes.string,
    linkTo: PropTypes.string
}
