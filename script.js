const btnel = document.getElementById("btn")
const jokesel = document.getElementById("joke")
const apikey = "dXLVaXbRxvBbXOr2jO5+fQ==xQVunbRcDnE1QUjB"
const apiurl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apikey
  }
};
async function getjoke() {
  try {
    jokesel.innerHTML = "Presenting a joke to LOL...";
    btnel.disabeld = true;
    btnel.innerText = "Loading";
    const response = await fetch(apiurl, options);
    const data = await response.json();
    btnel.disabeld = false;
    btnel.innerText = "CLICK HERE TO GET A JOKE";
    jokesel.innerText = data[0].joke;
  } catch (error) {
    btnel.disabeld = false;
    btnel.innerText = "CLICK HERE TO GET A JOKE";
    jokesel.innerText = "Unexpected error occured please try again ";
  }
}
btnel.addEventListener("click", getjoke)