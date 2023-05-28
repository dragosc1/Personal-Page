const form = document.querySelector(".form");
const feedback = document.querySelector(".container2");

function validate(email) {
    let pattern = /^([a-zA-Z0-9\.]+@+[a-zA-Z]+(\.)+[a-zA-Z]{2,3})$/;
    return pattern.test(email);
}

form.addEventListener("submit", function(e) {
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const newSection = document.createElement("section");
    const head1 = document.createElement("h1");
    head1.innerText = "Thank you for filling the feedback form " + lastName + " " + firstName + "!";
    head1.style.color = "green";
    head1.style.textAlign = "center";
    head1.style.marginBottom = "10px";
  
    const head2 = document.createElement("h1");
    head2.style.color = "green";
    head2.style.textAlign = "center";
    head2.style.marginBottom = "10px";
    head2.innerText = "Press enter to view email";
  
    newSection.appendChild(head1);
    newSection.appendChild(head2);
  
    if (!validate(email)) {
        alert("Email address is invalid!");
    } 
    else {
        alert("Thank you for submitting the form!");
        localStorage.setItem("submited", newSection.innerHTML);
        localStorage.setItem("email", email);
    }
});

const sectionToAdd = document.createElement("section");

function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

function copyStyles(sourceElement, targetElement) {
    let computedStyles = window.getComputedStyle(sourceElement);
    for (var i = 0; i < computedStyles.length; i++) {
        let propertyName = computedStyles[i];
        let propertyValue = computedStyles.getPropertyValue(propertyName);
  
        targetElement.style.setProperty(propertyName, propertyValue);
    }
}

if (localStorage.getItem("submited") != null) {
    if (feedback.parentNode)
        feedback.parentNode.removeChild(feedback); 
    sectionToAdd.innerHTML = localStorage["submited"];
    const referenceElement = document.getElementsByTagName("footer")[0];
    document.getElementsByTagName("body")[0].insertBefore(sectionToAdd, referenceElement);

    if (!detectMob()) {
        window.addEventListener("keydown", function(e) {
            if (e.key === "Enter") {
                if (sectionToAdd.childNodes[1].innerText.substr(15, 4) == "view") {
                    sectionToAdd.childNodes[1].innerText = "Press enter to hide email";
                    // get computed style of an element
                    let element = document.createElement("h1");
                    let lastSection = document.getElementsByTagName("section")[document.getElementsByTagName("section").length - 1].childNodes[0];
                    copyStyles(lastSection, element);
                    element.innerText = "Email: " + localStorage["email"];
                    sectionToAdd.appendChild(element);
                }
                else {
                    sectionToAdd.childNodes[1].innerText = "Press enter to view email";
                    sectionToAdd.removeChild(sectionToAdd.childNodes[2]);
                }
            }
        });
    }
    else sectionToAdd.removeChild(sectionToAdd.childNodes[1]);
}

document.querySelector('.copyright').appendChild(document.createTextNode(new Date().getFullYear()));