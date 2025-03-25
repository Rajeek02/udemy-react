import c1 from "../assests/image/c1.jpg"
import c2 from "../assests/image/c2.jpg"
import c3 from "../assests/image/c3.jpg"
import c4 from "../assests/image/c4.jpg"


function Recommended(){
    return(
        <div class="recommended">
        <h1 class="recommended_title">Recommended for you</h1>
        <p>Pick the best</p>

        <div class="recommended_container">
            <div class="img-section">
                <img src={c1}></img>
                <p>2024  Python Data Visualisation Masterclass</p>
                <p>Col steele</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>
            <div class="img-section">
            <img src={c2}></img>
                <p>EMC programming class for beginners</p>
                <p>Col steele</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>
            <div class="img-section">
            <img src={c3}></img>
                <p>FSWD Course Using MERN stack</p>
                <p>Col steele</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>
            <div class="img-section">
            <img src={c4}></img>
                <p>Cloud Computing Using AWS</p>
                <p>Col steele</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>


        </div>

    </div>
    )
}
export default Recommended