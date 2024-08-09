const Joke_btn = document.getElementById("jokebtn");
const joke_line = document.getElementById("jokes");


Joke_btn.addEventListener("click", function()
{
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response=> response.json())
    .then(data=> 
        {
            joke_line.innerText= data.value
        })
    .catch(error=>
        {
            joke_line.innerText=`<p>Oops! Something went wrong. Please try again later.<p>`
        })
});