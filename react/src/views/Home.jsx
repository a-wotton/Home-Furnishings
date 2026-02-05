export default function Home() {
    return (
        <>
            <section id="hero" className="full_grid">
                <a id="see_more" href="#">View Furniture</a>
            </section>

            <section id="site_info" className="full_grid">
                <p>Integer vehicula sem vel magna imperdiet laoreet. Morbi et maximus odio. Donec laoreet nulla ullamcorper nunc laoreet volutpat. Nunc posuere bibendum est vitae egestas. Suspendisse ornare vehicula mi vel sagittis. Maecenas tempus pellentesque blandit. </p>
            </section>

            <section id="furniture_types" className="grid">
                <div className="furniture_selection"><a href="#"><p>Chairs</p> <div></div> <img src="#" alt="" /></a></div>
                <div className="furniture_selection"><a href="#"><p>Tables</p>  <div></div> <img src="#" alt="" /></a></div>
                <div className="furniture_selection"><a href="#"><p>Shelves</p>  <div></div> <img src="#" alt="" /></a></div>
                <div className="furniture_selection"><a href="#"><p>Beds</p>  <div></div> <img src="#" alt="" /></a></div>
            </section>
        </>
    )
}