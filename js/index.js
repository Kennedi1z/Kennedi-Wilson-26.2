// created copywright footer//
const footer = document.createElement('footer');
const today = new Date();
const thisYear = today.getFullYear();
footer.textContent = `© ${thisYear} Kennedi Wilson. All rights reserved.`;
document.body.appendChild(footer); // should give me the footer at the bottom of the webpage//

// Skills section //
const skills = ["HTML", "CSS", "JavaScript", "GitHub", "Debugging"];
const skillsSection = document.querySelector('#Skills');
const skillsList = skillsSection.querySelector("ul");
for ( let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}


