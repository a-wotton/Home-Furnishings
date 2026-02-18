export default function Furniture() {
    return (
        <>
        <section id="furniture_text" className="grid_full">
            <h1>Take a look at our furniture.</h1>
            <p>In maximus tempus magna, in commodo massa luctus a. Phasellus massa metus, sodales id quam in, dignissim tristique lectus. Phasellus sit amet sapien non mauris facilisis cursus in ac eros. Etiam quis fringilla nunc. Aenean ornare semper ornare. Nam orci justo, tempor maximus tortor at, vestibulum finibus elit. Aliquam erat volutpat.</p>
        </section>

        <section id="categories" className="grid">
            <div>
                <a href="#">Chairs</a>
                <a href="#">Tables</a>
                <a href="#">Shelves</a>
                <a href="#">Beds</a>
            </div>
        </section>

        <section id="preview" className="grid">
            <a href="furniture_details.html" className="preview_option">
                <img className="preview_image" src="images/chair_placeholder.png" alt="chair" />
                <div>
                    <p>Massa Luctus</p>
                    <img className="arrow" src="images/arrow.svg" alt="arrow" />
                </div>    
            </a>

            <a href="furniture_details.html" className="preview_option">
                <img className="preview_image" src="images/table_placeholder.jpg" alt="table" />
                <div>
                    <p>Fermentum Sit Amet</p>
                    <img className="arrow" src="images/arrow.svg" alt="arrow" />
                </div>    
            </a>

            <a href="furniture_details.html" className="preview_option">
                <img className="preview_image" src="images/shelf_placeholder.jpg" alt="shelf" />
                <div>
                    <p>Facilisis Varius</p>
                    <img className="arrow" src="images/arrow.svg" alt="arrow" />
                </div>    
            </a>

            <a href="furniture_details.html" className="preview_option">
                <img className="preview_image" src="images/bed_placeholder.jpeg" alt="bed" />
                <div>
                    <p>Laoreet Lacus Facilisis</p>
                    <img className="arrow" src="images/arrow.svg" alt="arrow" />
                </div>    
            </a>
        </section>
        </>
    )
}