import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { NavLink } from "react-router-dom"

const images = [
    {
        name: "porsche",
        url: "https://automate-webresources.s3.ap-southeast-1.amazonaws.com/images/PCNA23_0489_a5_rgb.jpg"
    },
    {
        name: "porsche",
        url: "https://automate-webresources.s3.ap-southeast-1.amazonaws.com/images/S23_1934.jpg"
    }
]

const aboutUs = {
    "city": "Seattle",
    "state": "Washington",
    "numberOfYears": 5,
    "founderName": "Nyles",
    "dealershipName": "AutoMate"
}
export default function About(){
    return (
        <div>
            <Nav/>
            <div className="px-4 pt-5 my-5 text-center border-bottom">
                <h1 className="display-4 fw-bold text-body-emphasis">AutoMate</h1>
                <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                Nestled in the heart of {aboutUs.city}, {aboutUs.state}, {aboutUs.dealershipName} is more than just a car dealership; it's a family legacy built on a passion 
                for the open road and unwavering commitment to customer satisfaction. Our story stretches back {aboutUs.numberOfYears} years, beginning with {aboutUs.founderName}. 
                Driven by a deep love for automobiles and a genuine desire to 
                help people find their perfect vehicle, {aboutUs.founderName} opened the doors to {aboutUs.dealershipName} in {aboutUs.numberOfYears} years.
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <NavLink to="/cars" type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Browse Cars</NavLink>
                    <NavLink to="/cars" type="button" className="btn btn-outline-secondary btn-lg px-4">Sell Yours</NavLink>
                </div>
                </div>
                <div className="overflow-hidden" style={{"maxHeight": "70vh"}}>
                <div className="container px-5">
                    <img src={images[1].url} className="border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"/>
                </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-3 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-6 fw-bold lh-1 text-body-emphasis">Our story</h1>
                        <p className="lead">Established to help customers find their cars in need. Platform for car purchase, rent and trade.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                        </div>
                    </div>
                    <div className="col-lg-8 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img src={images[0].url} className="rounded-lg-3" alt="" width="720"/>
                    </div>
                </div>
            </div>

            <div className="bg-dark text-secondary px-4 py-5 text-center">
                <div className="py-5">
                    <h1 className="display-5 fw-bold text-white">Mission</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="fs-5 mb-4">
                        From the very beginning, {aboutUs.dealershipName} stood out for its unique selling proposition, e.g., focus on 
                        classic cars, commitment to community involvement, exceptional customer service. We believed in treating every customer 
                        like family, taking the time to understand their needs and exceed their expectations. This philosophy, instilled by {aboutUs.founderName} 
                        and carried on by generations of family members or employees, has become the cornerstone of our success.
                        </p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Get Started</button>
                        <button type="button" className="btn btn-outline-light btn-lg px-4">Home</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-3 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-6 fw-bold lh-1 text-body-emphasis">Agility</h1>
                        <p className="lead">
                            Get your dream cars with just one appoiment away.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        </div>
                    </div>
                    <div className="col-lg-8 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img src={images[0].url} className="rounded-lg-3" alt="" width="720"/>
                    </div>
                </div>
            </div>

            <div className="bg-dark text-secondary px-4 py-5 text-center">
                <div className="py-5">
                    <h1 className="display-5 fw-bold text-white">History</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="fs-5 mb-4">
                        Over the years, {aboutUs.dealershipName} has grown alongside the community. We've witnessed the changing 
                        landscape of the automotive industry, adapting and evolving to offer the latest and greatest vehicles while staying true 
                        to our core values. Today, we boast a wide selection of types of cars offered, e.g., 
                        new and used cars, a variety of makes and models, certified pre-owned vehicles, all meticulously maintained and ready to hit the road.
                        </p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        </div>
                    </div>
                </div>
            </div>



            <Footer/>
        </div>
    )
}