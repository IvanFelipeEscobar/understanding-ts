
import axios from 'axios';
const form = document.getElementById(`form-control`)!;
const addressInput = document.getElementById(`address`)! as HTMLInputElement
const apiKey = `AIzaSyBUvfeSMuzkgdoFcMJHI7CjlXvAYBx7xhA`
type geoCodingResponse = {
  results:{geometry:{location: {lat: number, lng: number}}}[];
  status: `OK` | `ZERO_RESULTS`
}
const searchAdress = async (e: Event) => {
  e.preventDefault();
    const enteredAddress = addressInput.value
    try {
    const httpsreq = await axios.get<geoCodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${apiKey}`);
    
    const coordinates = httpsreq.data.results[0].geometry.location
    console.log(coordinates)
    
    } catch (error) {
        console.log(error)
    }
};


form.addEventListener(`submit`, searchAdress);
