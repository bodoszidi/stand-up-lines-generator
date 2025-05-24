function displayStandupLine(response) {
    // response.data.anwer
    new Typewriter("#stand-up-line", {
        strings: response.data.answer,
        autoStart: true,
        cursor: null,
        delay: 20,
    });
}

function jokeGenerator(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#instructions");
    let apiKey = "fbe0f372ad6btocdfb0c2b3e5a4f5432";
    let prompt = `User instructions: Generate a stand-up line about ${instructionsInput.value}.`;
    let context =
       "You are a really funny stand-up comedian who tells witty one-liner jokes. Your mission is to generate a funny standup line based basic HTML and make sure to use the user instructions. Break the element with <br /> and sign the joke with 'SheCodes AI' in <strong> element in a new line";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let standupLineElement = document.querySelector("#stand-up-line");
    standupLineElement.style.display = "block";

    axios.get(apiUrl).then(displayStandupLine);

}

let standupFormElement = document.querySelector("#standup-line-generator-form");
standupFormElement.addEventListener("submit", jokeGenerator);
