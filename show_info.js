function createPopup(message) {
    // Create popup container
    let popup = document.createElement("div");
    popup.className = "popup";

    // Create text element
    let text = document.createElement("p");
    text.innerHTML = message;
    popup.appendChild(text);

    // Create close button
    let closeButton = document.createElement("button");
    closeButton.innerText = "Close";
    closeButton.className = "popup-close";

    closeButton.onclick = function () {
        document.body.removeChild(popup);
    };

    popup.appendChild(closeButton);
    document.body.appendChild(popup);
}


function getSectionByIndex(text, index) {
    // Regular expression to find content between comments
    const regex = /-->([\s\S]*?)<!--/g;

    // Create an array of sections by matching the content between <!-- and -->
    const sections = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
        sections.push(match[1].trim()); // Push the content (between the comments) into the array
    }

    // Check if the index is valid and return the appropriate section
    if (index >= 0 && index < sections.length) {
        return sections[index];
    } else {
        console.log("Invalid index");
        return null;
    }

}


function showProjectInfo(project) {
    let lang = localStorage.getItem("content-lang");
    if (lang == "uk") {
        fetch("projects/" + project + ".html").then((res) => {
            res.text().then((text) => {
                createPopup(text);
            });
        }).catch(() => {
            createPopup("Failed to load project info");
        })
    } else if (lang == "ru") {
        fetch("projects/ru.html").then((res) => {
            res.text().then((text) => {
                let info = getSectionByIndex(text, parseInt(project));
                createPopup(info);
            });
        }).catch(() => {
            createPopup("Failed to load project info");
        })
    } else if (lang == "en") {
        fetch("projects/en.html").then((res) => {
            res.text().then((text) => {
                let info = getSectionByIndex(text, parseInt(project));
                createPopup(info);
            });
        }).catch(() => {
            createPopup("Failed to load project info");
        })
    } else {
        createPopup("Failed to load project info");

    }

}
