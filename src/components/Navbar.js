function Navbar() {
    return (
        <div class="navbar">

            <div class="navbar_s1">
                <p class="navbar_s1_title">Udemy</p>
            </div>

            <div class="navbar_s2">
                <i class="fa-solid fa-magnifying-glass fa-sm" style={{color:"#000000;"}}></i>
                <input placeholder="Search for anything here, business,art..."></input>

            </div>

            <div class="navbar_s3">
                <p>Courses</p>
                <div class="mylearning">
                    <p>My Learning</p>
                    <div class="mylearning_popup">
                        <p>You did not purchase Anything</p>

                    </div>

                </div>

                <i class="fa-solid fa-cart-shopping" style={{color:"#000000;"}}></i>
                <i class="fa-solid fa-bell" style={{color:"#000000;"}}></i>
                <i class="fa-solid fa-user" style={{color:"#000000;"}}></i>
            </div>
            <div class="navbar_s4">
                <i class="fa-solid fa-bars" style={{color:"#000000;"}}></i>

            </div>

        </div>
    )
}
export default Navbar
