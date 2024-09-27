document.getElementById("resumeForm")?.addEventListener("submit", function (event) {
  event.preventDefault();

  // Type casting to the correct element types
  const nameElement = document.getElementById("name") as HTMLInputElement;
  const emailElement = document.getElementById("email") as HTMLInputElement;
  const phoneElement = document.getElementById("phone") as HTMLInputElement;
  const educationElement = document.getElementById("education") as HTMLTextAreaElement;
  const skillElement = document.getElementById("skills") as HTMLTextAreaElement;
  const experienceElement = document.getElementById("experience") as HTMLTextAreaElement;
  const profilePictureElement = document.getElementById("ProfilePicture") as HTMLInputElement;
  const usernameElement = document.getElementById("username") as HTMLInputElement;

  // Check all elements are present
  if (nameElement && emailElement && phoneElement && educationElement && skillElement && experienceElement && usernameElement) {
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const skills = skillElement.value;
    const experience = experienceElement.value;
    const profilePictureFile = profilePictureElement.files?.[0];
    const username = usernameElement.value;
     const uniquePath = `resume/${username.replace(/\s+/g, '_')}_cv.html`;

    // Check if profile picture is uploaded
    if (profilePictureFile) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const profilePictureSrc = e.target?.result as string;

        // Create resume output with the profile picture
        const resumeOutput = `
          <h2>Resume</h2>
          <img src="${profilePictureSrc}" alt="Profile Picture" style="width: 100px; height: 100px;"><br>
          <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
          <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
          <p><strong>Phone Number:</strong> <span id="edit-phone" class="editable">${phone}</span></p>
          <h3>Education</h3>
          <p><span id="edit-education" class="editable">${education}</span></p>
          <h3>Skills</h3>
          <p><span id="edit-skills" class="editable">${skills}</span></p>
          <h3>Experience</h3>
          <p><span id="edit-experience" class="editable">${experience}</span></p>
        `;

        // Display the resume in the output container
        const resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
          resumeOutputElement.innerHTML = resumeOutput;
          resumeOutputElement.classList.remove("hidden");

          // Create container for buttons
          const buttonsContainer = document.createElement("div");
          buttonsContainer.id = "buttonsContainer";
          resumeOutputElement.appendChild(buttonsContainer);

          // Add Download PDF button
          const downloadButton = document.createElement("button");
          downloadButton.textContent = "Download as PDF";
          downloadButton.addEventListener("click", async () => {
            window.print(); // Open the print dialog, allowing the user to save
          });
          buttonsContainer.appendChild(downloadButton);

          // Add Shareable link button
          const shareLinkButton = document.createElement("button");
          shareLinkButton.textContent = "Copy Shareable Link";
          shareLinkButton.addEventListener("click", async () => {
            try {
              // Create a unique shareable link
              const shareableLink = `https://yourdomain.com/resumes/${username.replace(/\s+/g, '-').toLowerCase()}_cv.html`;
              // Use clipboard API to copy the shareable link
              await navigator.clipboard.writeText(shareableLink);
              alert("Shareable link copied to clipboard");
            } catch (err) {
              console.error("Failed to copy link: ", err);
              alert("Failed to copy link to clipboard. Please try again.");
            }
          });
          buttonsContainer.appendChild(shareLinkButton);

          // Create download link for the resume HTML
          const downloadLink = document.createElement("a");
          downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
          downloadLink.download = uniquePath;
          downloadLink.textContent = 'Download Your 2024 Resume';
          buttonsContainer.appendChild(downloadLink);

          // Make fields editable
          makeEditable();
        } else {
          console.error("Resume output container not found");
        }
      };

      // Read the profile picture as a DataURL
      reader.readAsDataURL(profilePictureFile);
    } else {
      console.error("No profile picture was uploaded.");
    }
  } else {
    console.error("One or more input elements are missing.");
  }
});

function makeEditable() {
  const editableElements = document.querySelectorAll(".editable");
  editableElements.forEach((element) => {
    element.addEventListener("click", function () {
      const currentElement = element as HTMLElement;
      const currentValue = currentElement.textContent || "";

      // Replace content with input
      const input = document.createElement("input");
      input.type = "text";
      input.value = currentValue;
      input.classList.add("editing", "input");

      input.addEventListener("blur", function () {
        currentElement.textContent = input.value;
        currentElement.style.display = "inline";
        input.remove();
      });

      currentElement.style.display = "none";
      currentElement.parentNode?.insertBefore(input, currentElement);
      input.focus();
    });
  });
}
