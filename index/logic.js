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
    newSection.appendChild(head1);
    if (!validate(email)) {
        alert("Email adress is invalid!");
    }
    else {
        alert("Thank you for submiting the form!");
        localStorage.setItem("submited", newSection.innerHTML);
        localStorage.setItem("email", email);
    }
});

if (localStorage.getItem("submited") != null) {
    feedback.classList.add("dnone"); 
    const sectionToAdd = document.createElement("section");
    sectionToAdd.innerHTML = localStorage["submited"];
    const referenceElement = document.getElementsByTagName("footer")[0];
    document.getElementsByTagName("body")[0].insertBefore(sectionToAdd, referenceElement);
}
else feedback.classList.remove("dnone");

document.querySelector('.copyright').appendChild(document.createTextNode(new Date().getFullYear()));