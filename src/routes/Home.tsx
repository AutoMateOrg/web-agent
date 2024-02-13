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

export default function Home() {
    return (
        <main>
        <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
            <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={images[0].url} className="bd-placeholder-img" width="100%" height="70%" aria-hidden="true"/>
                <div className="container">
                <div className="carousel-caption text-start">
                    <h1>Example headline.</h1>
                    <p className="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
                    <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                </div>
                </div>
            </div>
            <div className="carousel-item">
            <img src={images[1].url} className="bd-placeholder-img" width="100%" height="70%" aria-hidden="true"/>
                <div className="container">
                <div className="carousel-caption">
                    <h1>Another example headline.</h1>
                    <p>Some representative placeholder content for the second slide of the carousel.</p>
                    <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                </div>
                </div>
            </div>
            <div className="carousel-item">
            <img src={images[0].url} className="bd-placeholder-img" width="100%" height="70%" aria-hidden="true"/>
                <div className="container">
                <div className="carousel-caption text-end">
                    <h1>One more for good measure.</h1>
                    <p>Some representative placeholder content for the third slide of this carousel.</p>
                    <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                </div>
                </div>
            </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
        </div>
        <br/>
        <div className="container marketing">

            <div className="row">
            <div className="col-lg-4">
                <img src={images[0].url}className="bd-placeholder-img rounded-circle" width="140" height="140" role="img" aria-label="Placeholder"/>
                <h2 className="fw-normal">Seattle</h2>
                <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            <div className="col-lg-4">
                <img src={images[0].url}className="bd-placeholder-img rounded-circle" width="140" height="140" role="img" aria-label="Placeholder"/>
                <h2 className="fw-normal">Tacoma</h2>
                <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            <div className="col-lg-4">
                <img src={images[0].url}className="bd-placeholder-img rounded-circle" width="140" height="140" role="img" aria-label="Placeholder"/>
                <h2 className="fw-normal">Bellvue</h2>
                <p>And lastly this, the third column of representative placeholder content.</p>
                <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            </div>

            <hr className="featurette-divider"/>

            <div className="row featurette">
            <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1">Beyond the Showroom Floor:</h2>
                <p className="lead">We understand that buying a car is just one part of the journey. That's why we're actively involved in the community, supporting local charities and organizations 
                that share our values. We believe in giving back to the place that has supported us for so many years, and we're proud to be a pillar of strength in our community.</p>
            </div>
            <div className="col-md-5">
                <img src={images[1].url}className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" role="img"/>
            </div>
            </div>
            <hr className="featurette-divider"/>

            <div className="row featurette">
            <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading fw-normal lh-1">Looking Ahead:</h2>
                <p className="lead">As we enter the next chapter, we're excited about the future. We remain committed to our core values of family, 
                integrity, and customer service, while embracing the latest advancements in technology 
                and automotive innovation. We're confident that Automate will continue to be a trusted destination for generations to come, 
                offering the perfect blend of tradition and progress, speed and service.</p>
            </div>
            <div className="col-md-5 order-md-1">
            <img src={images[0].url}className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" role="img"/>
            </div>
            </div>

            <hr className="featurette-divider"/>

            <div className="row featurette">
            <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1">A Story Unfolding:</h2>
                <p className="lead">So, whether you're a seasoned car enthusiast or a first-time buyer, we invite you to visit Automate and experience the 
                difference. We're not just selling cars; we're building relationships and creating memories that last a lifetime. 
                Come discover why Automate is more than just a dealership; it's a family, a community, and a legacy of speed and service.</p>
            </div>
            <div className="col-md-5">
            <img src={images[1].url}className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" role="img"/>
            </div>
            </div>

            <hr className="featurette-divider"/>
            <div className="row featurette">
            <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading fw-normal lh-1">Looking Ahead:</h2>
                <p className="lead">We hope this sample about us story provides a good starting point for your dealership. Feel free to personalize it with your own unique history, values, and vision for the future. 
                Remember, the best stories are authentic and connect with your audience on an emotional level.
                So, let your passion for cars and your commitment to your customers shine through, and you'll create an about us story that resonates with everyone who visits your dealership..</p>
            </div>
            <div className="col-md-5 order-md-1">
            <img src={images[0].url}className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" role="img"/>
            </div>
            </div>
            <hr className="featurette-divider"/>

        </div>
    </main>
    )
}