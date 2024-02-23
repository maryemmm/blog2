import photo from '../Assets/image.jpg';
import './card.css';

function Card(){
return(
<div className='card'>
<div className='leftPart'>
<p className='errorType'>404 Page</p>
<h2>Page not found</h2>
<p className='description'>Sorry, the page you are looking for doesn't exist.Here are some helpful links:</p>
<div className='buttons'>
    <button>Go Back</button>
    <button id='home'>Take me home</button>
</div>
</div>
<div className='rightPart'>
    <img src={photo} alt="backgroundImg" />
</div>
</div>
)
}
export default Card;