import './App.css';
import ny from './img/ny.svg';
import usa from './img/usa.svg';
import pin from './img/pin.png';

function App() {

  let idToTitle = {
    'NewRochelle': 'New Rochelle',
    'NYC': 'NYC',
    'Rochester': 'Rochester',
    'Binghamton': 'Binghamton',
    'Oneonta': 'Oneonta',
    'NewJersey': 'New Jersey',
    'Hartford': 'Hartford',
    'NewHaven': 'New Haven',
    'Boston': 'Boston, MA',
    'DC': 'Washington, D.C.',
    'Atlanta': 'Atlanta, GA',
    'Chicago': 'Chicago, IL',
    'Orlando': 'Orlando, FL',
  }

  let idToInfo = {
    'NewRochelle': 'Chris, Elias, James M, Jonathan, Jordan, RJ, Roshan',
    'NYC': 'Jonny, Tian',
    'Rochester': 'Emma, Griffin',
    'Binghamton': 'Jack, Tristan',
    'Oneonta': 'Jared',
    'NewJersey': 'Jacob',
    'Hartford': 'Anton',
    'NewHaven': 'James K',
    'Boston': 'Jeff, Ricky',
    'DC': 'Anthony, Robbie',
    'Atlanta': 'Savi',
    'Chicago': 'Mattie C',
    'Orlando': 'Andrew',
  }

  const updateClassVisibility = (type, style) => {
    document.querySelectorAll(type).forEach(e => e.style.display = style);

    // Clear all text and pin styles.
    document.getElementById('titleText').style.display = 'none';
    document.getElementById('infoText').style.display = 'none';
    document.querySelectorAll('.pin').forEach(e => e.style.filter = 'hue-rotate(0deg)');
  }

  const switchMap = () => {
    if (document.getElementById('ny').style.display === 'none') {
      updateClassVisibility('.nyItem', 'flex');
      updateClassVisibility('.usaItem', 'none');
    }
    else {
      updateClassVisibility('.nyItem', 'none');
      updateClassVisibility('.usaItem', 'flex');
    }
  }

  const moveInfoText = (item) => {
    let titleText = document.getElementById('titleText');
    let infoText = document.getElementById('infoText');
    
    // Show the text if this is the first time the user has clicked.
    if (infoText.style.display === 'none') {
      infoText.style.display = 'block';
      titleText.style.display = 'block';
    }
  
    // Put title text in the right spot.
    titleText.style.left = item.x + 30 + 'px';
    titleText.style.top = item.y - 20 + 'px';
    titleText.innerHTML = idToTitle[item.id]

    // Put info text in the right spot.
    infoText.style.left = item.x + 30 + 'px';
    infoText.style.top = item.y + 5 + 'px';
    infoText.innerHTML = idToInfo[item.id]


    // Make only the selected pin green.
    document.querySelectorAll('.pin').forEach(e => e.style.filter = 'hue-rotate(0deg)')
    item.style.filter = 'hue-rotate(110deg)';

  }

  return (
    <div className="container">

      <div className="buttonContainer">
        <button className="switchMap" onClick={switchMap}>Switch Map</button>
      </div>

      <div className="imageContainerNY">
        <img id="ny" className="nyMap nyItem" src={ny} alt="r"></img>
        <img id="NewRochelle" className="pin nyItem" onClick={(e) => moveInfoText(e.target)} src={pin}></img>
        <img id="NYC" className="pin nyItem" onClick={(e) => moveInfoText(e.target)} src={pin}></img>
        <img id="Binghamton" className="pin nyItem" onClick={(e) => moveInfoText(e.target)} src={pin}></img>
        <img id="Rochester" className="pin nyItem" onClick={(e) => moveInfoText(e.target)} src={pin}></img>
        <img id="NewJersey" className="pin nyItem" onClick={(e) => moveInfoText(e.target)} src={pin}></img>
        <img id="Oneonta" className="pin nyItem" onClick={(e) => moveInfoText(e.target)} src={pin}></img>
        <img id="Hartford" className="pin nyItem" onClick={(e) => moveInfoText(e.target)} src={pin}></img>
        <img id="NewHaven" className="pin nyItem" onClick={(e) => moveInfoText(e.target)} src={pin}></img>
      </div>

      <div className="imageContainerUSA">
        <img id="usa" style={{display: 'none'}} className="usaMap usaItem" src={usa} alt="r"></img>
        <img id="Boston" style={{display: 'none'}} className="pin usaItem" onClick={(e) => moveInfoText(e.target)} src={pin}></img>
        <img id="DC" style={{display: 'none'}} className="pin usaItem" onClick={(e) => moveInfoText(e.target)} src={pin}></img>
        <img id="Atlanta" style={{display: 'none'}} className="pin usaItem" onClick={(e) => moveInfoText(e.target)} src={pin}></img>
        <img id="Chicago" style={{display: 'none'}} className="pin usaItem" onClick={(e) => moveInfoText(e.target)} src={pin}></img>
        <img id="Orlando" style={{display: 'none'}} className="pin usaItem" onClick={(e) => moveInfoText(e.target)} src={pin}></img>
      </div>

      <p id="titleText" style={{display: 'none'}} className="titleText">text goes here</p>
      <p id="infoText" style={{display: 'none'}} className="infoText">text goes here</p>

    </div>
  );
}

export default App;
