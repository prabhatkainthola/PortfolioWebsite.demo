document.addEventListener("DOMContentLoaded", function () {
    const projectContainer = document.querySelector(".project-container");

    // Sample projects data (replace with your actual projects)
    const projects = [
        { title: "Virtual Assistant", image: "virtual.jpeg", description: "Embark on a new era of seamless productivity and convenience with our Intelligent Virtual Assistant Python project. This innovative application leverages the power of cutting-edge technology to bring you a personalized and efficient digital companion, ready to assist you in various aspects of your daily life." },
        { title: "Weather App", image: "weather.png", description: "Step into a world of weather awareness and preparedness with our WeatherPal app project. WeatherPal is more than just a weather application; it's your ultimate companion for staying informed about current conditions, forecasts, and weather-related insights. Designed with a user-friendly interface and robust functionality, WeatherPal ensures that you are always one step ahead, no matter where you are." },
        { title: "Student Database Management System", image: "student.jpeg", description: "Introducing our Student Database Management System (DBMS) in C – a robust and efficient solution tailored to streamline the complexities of student data management. This project is designed for educational institutions seeking a reliable tool to organize, store, and retrieve student information seamlessly. With a focus on simplicity and functionality, our Student DBMS in C empowers administrators and educators to efficiently manage student records with ease." },
    ];

    // Dynamically create project elements
    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project");

        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;

        projectContainer.appendChild(projectElement);
    });

    // Simple animation on project hover
    const projectElements = document.querySelectorAll(".project");
    projectElements.forEach(project => {
        project.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.1)";
        });

        project.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1.0)";
        });
    });
});
