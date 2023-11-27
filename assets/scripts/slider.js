let slider_items = document.querySelectorAll(".slider_item");
        let intro_title = document.querySelector(".intro_title");
        let movies = ["Бойцовский клуб", "Драйв", "Большой Лебовский", "Зелёная миля"];
        let backgroundimages = ["assets/images/fight_club.jpeg", "assets/images/drive.jpeg", "assets/images/Lebovski.jpg", "assets/images/green_mile.jpeg"];
        let body = document.querySelector("body");
        let main_intro = document.querySelector(".main_intro");

        function slideChange(event) {
            let num = event.target.querySelector(".slider_num").textContent.slice(0, -1);
            let current_slide = document.querySelector(".slider_item.active");
            current_slide.classList.remove("active");
            let selected_slide = document.querySelector(".slider_item:nth-child(" + num + ")");
            selected_slide.classList.add("active");
            intro_title.textContent = "Топ 4 фильма: " + movies[num - 1];
            main_intro.style.background = "url('" + backgroundimages[num - 1] + "') center no-repeat";
            main_intro.style.backgroundSize = "cover";
        }
        for (let slider_item of slider_items) {
            slider_item.addEventListener("click", slideChange);
        }