const parents = [
    { name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
    { name: "Jane Smith", email: "jane@example.com", phone: "098-765-4321" },
];

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    // Hide all tab contents
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    // Remove active class from all tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    // Show the current tab and add an active class to the link
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function toggleParentForm() {
    var toggleSwitch = document.getElementById("toggleNewParent");
    var parentDetailsForm = document.getElementById("parentDetailsForm");
    var parentSearch = document.getElementById("parentSearch");
    
    if (toggleSwitch.checked){
        parentDetailsForm.style.display = "block";
        parentSearch.disabled = true;
    } else {
        parentDetailsForm.style.display = "none";
        parentSearch.disabled = false;
    }
}

function searchParent() {
    const searchInput = document.getElementById("parentSearch").value.toLowerCase();
    const searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = "";

    const filteredParents = parents.filter(parent => 
        parent.name.toLowerCase().includes(searchInput)
    );

    if (filteredParents.length > 0) {
        filteredParents.forEach(parent => {
            const parentDiv = document.createElement("div");
            parentDiv.classList.add("parent-result");
            parentDiv.innerHTML = `
                <p><strong>${parent.name}</strong></p>
                <p>Email: ${parent.email}</p>
                <p>Phone: ${parent.phone}</p>
                <button onclick="selectParent('${parent.name}')">Select</button>
            `;
            searchResults.appendChild(parentDiv);
        });
    } else {
        searchResults.innerHTML = "<p>No parents found.</p>";
    }
}

function selectParent(parentName) {
    document.getElementById("parentSearch").value = parentName;
    document.getElementById("searchResults").innerHTML = "";
}

// Default open tab
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablinks").click();
});