function jokeGenerator(event) {
    event.preventDefault();
    
    new Typewriter("#stand-up-line", {
    strings: " “Love is like a fart. If you have to force it, it’s probably s***.”<strong>— Stephen K. Amos</strong>",
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}



let standupFormElement = document.querySelector("#standup-line-generator-form");
standupFormElement.addEventListener("submit", jokeGenerator)