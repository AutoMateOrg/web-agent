import Nav from "../components/Nav"
import Footer from "../components/Footer"

export default function Contact(){
    const rows = 3
    return (
        <div>
            <Nav />
            <br />
            <div className="container text-center">
                <h1>Contact Us</h1>
            </div>
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-7 text-center text-lg-start">
                        <img src="https://automate-webresources.s3.ap-southeast-1.amazonaws.com/images/S23_1934.jpg" className="bd-placeholder-img" width="500" height="400" role="img" aria-label="Placeholder"/>
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
                    <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className=" form-floating mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Inquiry</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={rows}></textarea>
                        </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                    <hr className="my-4"/>
                    </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}