var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // Type casting to the correct element types
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var skillElement = document.getElementById("skills");
    var experienceElement = document.getElementById("experience");
    var profilePictureElement = document.getElementById("ProfilePicture");
    var usernameElement = document.getElementById("username");
    // Check all elements are present
    if (nameElement && emailElement && phoneElement && educationElement && skillElement && experienceElement && usernameElement) {
        var name_1 = nameElement.value;
        var email_1 = emailElement.value;
        var phone_1 = phoneElement.value;
        var education_1 = educationElement.value;
        var skills_1 = skillElement.value;
        var experience_1 = experienceElement.value;
        var profilePictureFile = (_a = profilePictureElement.files) === null || _a === void 0 ? void 0 : _a[0];
        var username_1 = usernameElement.value;
        var uniquePath_1 = "resume/".concat(username_1.replace(/\s+/g, '_'), "_cv.html");
        // Check if profile picture is uploaded
        if (profilePictureFile) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _this = this;
                var _a;
                var profilePictureSrc = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                // Create resume output with the profile picture
                var resumeOutput = "\n          <h2>Resume</h2>\n          <img src=\"".concat(profilePictureSrc, "\" alt=\"Profile Picture\" style=\"width: 100px; height: 100px;\"><br>\n          <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\">").concat(name_1, "</span></p>\n          <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\">").concat(email_1, "</span></p>\n          <p><strong>Phone Number:</strong> <span id=\"edit-phone\" class=\"editable\">").concat(phone_1, "</span></p>\n          <h3>Education</h3>\n          <p><span id=\"edit-education\" class=\"editable\">").concat(education_1, "</span></p>\n          <h3>Skills</h3>\n          <p><span id=\"edit-skills\" class=\"editable\">").concat(skills_1, "</span></p>\n          <h3>Experience</h3>\n          <p><span id=\"edit-experience\" class=\"editable\">").concat(experience_1, "</span></p>\n        ");
                // Display the resume in the output container
                var resumeOutputElement = document.getElementById("resumeOutput");
                if (resumeOutputElement) {
                    resumeOutputElement.innerHTML = resumeOutput;
                    resumeOutputElement.classList.remove("hidden");
                    // Create container for buttons
                    var buttonsContainer = document.createElement("div");
                    buttonsContainer.id = "buttonsContainer";
                    resumeOutputElement.appendChild(buttonsContainer);
                    // Add Download PDF button
                    var downloadButton = document.createElement("button");
                    downloadButton.textContent = "Download as PDF";
                    downloadButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            window.print(); // Open the print dialog, allowing the user to save
                            return [2 /*return*/];
                        });
                    }); });
                    buttonsContainer.appendChild(downloadButton);
                    // Add Shareable link button
                    var shareLinkButton = document.createElement("button");
                    shareLinkButton.textContent = "Copy Shareable Link";
                    shareLinkButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                        var shareableLink, err_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    shareableLink = "https://yourdomain.com/resumes/".concat(username_1.replace(/\s+/g, '-').toLowerCase(), "_cv.html");
                                    // Use clipboard API to copy the shareable link
                                    return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                                case 1:
                                    // Use clipboard API to copy the shareable link
                                    _a.sent();
                                    alert("Shareable link copied to clipboard");
                                    return [3 /*break*/, 3];
                                case 2:
                                    err_1 = _a.sent();
                                    console.error("Failed to copy link: ", err_1);
                                    alert("Failed to copy link to clipboard. Please try again.");
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); });
                    buttonsContainer.appendChild(shareLinkButton);
                    // Create download link for the resume HTML
                    var downloadLink = document.createElement("a");
                    downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
                    downloadLink.download = uniquePath_1;
                    downloadLink.textContent = 'Download Your 2024 Resume';
                    buttonsContainer.appendChild(downloadLink);
                    // Make fields editable
                    makeEditable();
                }
                else {
                    console.error("Resume output container not found");
                }
            };
            // Read the profile picture as a DataURL
            reader.readAsDataURL(profilePictureFile);
        }
        else {
            console.error("No profile picture was uploaded.");
        }
    }
    else {
        console.error("One or more input elements are missing.");
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // Replace content with input
            var input = document.createElement("input");
            input.type = "text";
            input.value = currentValue;
            input.classList.add("editing", "input");
            input.addEventListener("blur", function () {
                currentElement.textContent = input.value;
                currentElement.style.display = "inline";
                input.remove();
            });
            currentElement.style.display = "none";
            (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input, currentElement);
            input.focus();
        });
    });
}
