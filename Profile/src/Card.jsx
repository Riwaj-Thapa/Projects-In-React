import profilePic from './assets/IMG_20240505_201423_780.jpg'
function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture"></img>
            <h2>Riwaj Thapa</h2>
            <p>I am currently pursing my BSC(hons) Computing degree at ICP .</p>

        </div>
    )
}

export default Card