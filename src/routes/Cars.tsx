import CarsList from "../components/CarsList"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Pagination from "../components/Pagination"
import axios from "axios"

export default function Cars(){
    var Arrays = new Array();
    axios.get("http://localhost:4500/api/cars/list")
        .then((res) => {
            Arrays.push(res.data)
            // console.log(Arrays)
        })

    console.log(Arrays)
    const renderedCars = 
    Arrays.map((array: any) => {
        return <CarsList key={array.id} name={array.name} year={array.data.year} make={array.data.make} price={array.data.price}/>
    })
    return (
        <div>
            <Nav />
            <section className="py-5 text-center container">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">Album example</h1>
                    <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                    <p>
                    <a href="#" className="btn btn-primary my-2">Main call to action</a>
                    <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                    </p>
                </div>
            </div>
            </section>
            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {/* { cars.map((car: any) => <CarsList key={car.id} name={car.name} year={car.year} mileage={car.mileage} make={car.make} price={car.price}/>)} */}
                        {renderedCars}
                    </div>
                </div>
                <br />
                <div className="container">
                    <Pagination />
                </div>

            </div>
            <Footer />
        </div>
    )
}



