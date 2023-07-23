// Helper function to get form values as an object
function getFormData(formId) {
    const form = document.getElementById(formId);
    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    return data;
}

function showEducationPage() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    // Store the basic information in localStorage for future use
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("email", email);
    window.location.href = "education.html";
}

function showExperiencePage() {
    const degree = document.getElementById("degree").value;
    const school = document.getElementById("school").value;
    const gradYear = document.getElementById("gradYear").value;
    // Store education information in localStorage for future use
    localStorage.setItem("degree", degree);
    localStorage.setItem("school", school);
    localStorage.setItem("gradYear", gradYear);
    window.location.href = "experience.html";
}

function showSkillsPage() {
    const jobTitle = document.getElementById("jobTitle").value;
    const company = document.getElementById("company").value;
    const experienceDesc = document.getElementById("experienceDesc").value;
    // Store experience information in localStorage for future use
    localStorage.setItem("jobTitle", jobTitle);
    localStorage.setItem("company", company);
    localStorage.setItem("experienceDesc", experienceDesc);
    window.location.href = "skills.html";
}

function redirectToPreviewPage() {
    const skills = document.getElementById("skills").value;
    // Store skills information in localStorage for future use
    localStorage.setItem("skills", skills);
    window.location.href = "preview.html";
}

function redirectToSavePage() {
    window.location.href = "save.html";
}

// Preview Page Content
function displayPreview() {
    const data = {
        fullName: localStorage.getItem("fullName"),
        email: localStorage.getItem("email"),
        degree: localStorage.getItem("degree"),
        school: localStorage.getItem("school"),
        gradYear: localStorage.getItem("gradYear"),
        jobTitle: localStorage.getItem("jobTitle"),
        company: localStorage.getItem("company"),
        experienceDesc: localStorage.getItem("experienceDesc"),
        skills: localStorage.getItem("skills")
    };

    // Prepare the resume preview
    const resumePreview = document.getElementById("resumePreview");
    const previewContent = `
        <div class="resume-section">
            <h3>${data.fullName}</h3>
            <p><strong>Email:</strong> ${data.email}</p>
        </div>
        <div class="resume-section">
            <h3>Education</h3>
            <p><strong>Degree:</strong> ${data.degree}</p>
            <p><strong>School:</strong> ${data.school}</p>
            <p><strong>Graduation Year:</strong> ${data.gradYear}</p>
        </div>
        <div class="resume-section">
            <h3>Experience</h3>
            <p><strong>Job Title:</strong> ${data.jobTitle}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Description:</strong> ${data.experienceDesc}</p>
        </div>
        <div class="resume-section">
            <h3>Skills</h3>
            <ul>
                ${data.skills
                    .split(",")
                    .map(skill => `<li>${skill.trim()}</li>`)
                    .join("")}
            </ul>
        </div>
    `;
    resumePreview.innerHTML = previewContent;
}

// Display the preview when the page loads
window.onload = displayPreview;
