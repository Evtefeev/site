

function translate_site(set_lang) {
    fetch('./translate.json')
        .then(response => response.json())
        .then(data => {
            const lang = set_lang ? set_lang : document.documentElement.lang || 'ru';
            const translations = data[lang];

            document.getElementById('title').innerText = translations['title'];
            document.getElementById('about_link').innerText = translations['about'];
            document.getElementById('projects_link').innerText = translations['projects'];
            document.getElementById('contact_link').innerText = translations['contact'];

            document.getElementById('about_title').innerText = translations['about'];
            document.getElementById('about_text1').innerText = translations['about_text1'];
            document.getElementById('about_text2').innerText = translations['about_text2'];
            document.getElementById('about_text3').innerText = translations['about_text3'];
            document.getElementById('about_text4').innerText = translations['about_text4'];

            document.getElementById('projects_title').innerText = translations['projects'];
            let projects_text = "";
            translations['projects_text'].forEach(
                (project) => {
                    projects_text += "<li>" + project + "</li>"
                }
            )
            document.getElementById('projects_text').innerHTML = projects_text;
            document.getElementById('skills_title').innerText = translations['skills'];

            document.getElementById('contacts_title').innerText = translations['contact'];
            document.getElementById('footer').innerHTML = translations['footer'];
        })
        .catch(error => console.error('Error loading translations:', error));
}

translate_site();