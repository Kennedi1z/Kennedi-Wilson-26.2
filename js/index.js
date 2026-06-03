// created copywright footer//
const footer = document.createElement('footer');
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement('p');
const name = "Kennedi Wilson";
copyright.innerHTML = `&copy; ${name} ${thisYear}`;
footer.appendChild(copyright);
document.body.appendChild(footer);
 // should give me the footer at the bottom of the webpage//

// Skills section //
const skills = ["HTML", "CSS", "JavaScript", "GitHub", "Debugging"];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector("ul");
for ( let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.forms["leave_message"]; 
messageForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(usersName);
    console.log(usersEmail);
    console.log(usersMessage);

    const messageSection = document.querySelector('#Messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a><span> wrote: ${usersMessage}</span>`;
    const removeButton = document.createElement('button');  
    removeButton.innerText = 'Remove';
    removeButton.addEventListener('click', function() {
        const entry = removeButton.parentNode;
        entry.removeChild();
        });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    });
    messageForm.reset();


