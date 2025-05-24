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
        "You are a really funny stand-up comedian who tells witty one-liner jokes. Your mission is to generate a funny standup line based on the user instructions. Sign the line with 'SheCodes AI' in <strong> element in the end of the standup line";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayStandupLine);
}

let standupFormElement = document.querySelector("#standup-line-generator-form");
standupFormElement.addEventListener("submit", jokeGenerator);
