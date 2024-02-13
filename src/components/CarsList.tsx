import { NavLink } from "react-router-dom"

const porsche = "https://automate-webresources.s3.ap-southeast-1.amazonaws.com/images/porsche.jpg"

export default function CarsList(props: any){
    return (
        <div className="col">
        <div className="card shadow-sm">
            <img src={porsche} className="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail"/>
            <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
            <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                    <NavLink to="/" type="button" className="btn btn-sm btn-outline-secondary">View</NavLink>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
            </div>
            </div>
        </div>
        </div>
    )
}