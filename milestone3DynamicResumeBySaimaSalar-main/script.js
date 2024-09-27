var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Type casting to the correct element types
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var skillElement = document.getElementById('skills');
    var experienceElement = document.getElementById('experience');
    var profilePictureElement = document.getElementById('ProfilePicture');
    // Check all elements are present
    if (nameElement && emailElement && phoneElement && educationElement && skillElement && experienceElement && profilePictureElement) {
        var name_1 = nameElement.value;
        var email_1 = emailElement.value;
        var phone_1 = phoneElement.value;
        var education_1 = educationElement.value;
        var skills_1 = skillElement.value;
        var experience_1 = experienceElement.value;
        var profilePictureFile = (_a = profilePictureElement.files) === null || _a === void 0 ? void 0 : _a[0];
        // Check if profile picture is uploaded
        if (profilePictureFile) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                var profilePictureSrc = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                // Create resume output with the profile picture
                var resumeOutput = "\n                    <h2>Resume</h2>\n                    <img src=\"".concat(profilePictureSrc, "\" alt=\"Profile Picture\" style=\"width: 100px; height: 100px;\"><br>\n                    <p><strong>Name:</strong> ").concat(name_1, "</p>\n                    <p><strong>Email:</strong> ").concat(email_1, "</p>\n                    <p><strong>Phone Number:</strong> ").concat(phone_1, "</p>\n\n                    <h3>Education</h3>\n                    <p>").concat(education_1, "</p>\n\n                    <h3>Skills</h3>\n                    <p>").concat(skills_1, "</p>\n\n                    <h3>Experience</h3>\n                    <p>").concat(experience_1, "</p>\n                ");
                var resumeOutputElement = document.getElementById('resumeOutput');
                if (resumeOutputElement) {
                    resumeOutputElement.innerHTML = resumeOutput;
                }
                else {
                    console.error('The resume output element is missing.');
                }
            };
            // Read the profile picture as a DataURL
            reader.readAsDataURL(profilePictureFile);
        }
        else {
            console.error('No profile picture was uploaded.');
        }
    }
    else {
        console.error('One or more input elements are missing.');
    }
});
