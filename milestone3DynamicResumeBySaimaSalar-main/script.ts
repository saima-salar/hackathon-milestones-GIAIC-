document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Type casting to the correct element types
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const skillElement = document.getElementById('skills') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const profilePictureElement = document.getElementById('ProfilePicture') as HTMLInputElement;

    // Check all elements are present
    if (nameElement && emailElement && phoneElement && educationElement && skillElement && experienceElement && profilePictureElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const skills = skillElement.value;
        const experience = experienceElement.value;
        const profilePictureFile = profilePictureElement.files?.[0];

        // Check if profile picture is uploaded
        if (profilePictureFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const profilePictureSrc = e.target?.result as string;

                // Create resume output with the profile picture
                const resumeOutput = `
                    <h2>Resume</h2>
                    <img src="${profilePictureSrc}" alt="Profile Picture" style="width: 100px; height: 100px;"><br>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone Number:</strong> ${phone}</p>

                    <h3>Education</h3>
                    <p>${education}</p>

                    <h3>Skills</h3>
                    <p>${skills}</p>

                    <h3>Experience</h3>
                    <p>${experience}</p>
                `;

                const resumeOutputElement = document.getElementById('resumeOutput');
                if (resumeOutputElement) {
                    resumeOutputElement.innerHTML = resumeOutput;
                } else {
                    console.error('The resume output element is missing.');
                }
            };

            // Read the profile picture as a DataURL
            reader.readAsDataURL(profilePictureFile);
        } else {
            console.error('No profile picture was uploaded.');
        }
    } else {
        console.error('One or more input elements are missing. ');
    }
});
