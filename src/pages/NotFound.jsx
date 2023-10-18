import { Link } from "react-router-dom";

export function NotFound(){
    return (
        <div className="container d-flex align-items-center">
            <Link to="/" className="row text-dark">
                <div className="col-5 d-flex align-items-center">
                    <img src="/tree_2.svg" width="500" alt="Logo" />
                </div>
                <div className="col d-flex align-items-center">
                    <h2>
                        <b class="text-blue">
                            Error 404: 
                        </b>
                        &nbsp;
                        Page Not Found
                    </h2>
                </div>
            </Link>
        </div>
    )
}