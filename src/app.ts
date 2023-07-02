
import axios from 'axios';
const form = document.getElementById(`form-control`)!;
const addressInput = document.getElementById(`address`)! as HTMLInputElement
const apiKey = `AIzaSyBUvfeSMuzkgdoFcMJHI7CjlXvAYBx7xhA`
const searchAdress = async (e: Event) => {
  e.preventDefault();
    const enteredAddress = addressInput.value
    try {
    const httpsreq = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${apiKey}`);
    console.log(httpsreq)
    } catch (error) {
        console.log(error)
    }
};


form.addEventListener(`submit`, searchAdress);
