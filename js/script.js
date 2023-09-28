let tg = window.Telegram.WebApp;
let enter = document.getElementById('enter')
let about = document.getElementById('about')
let next1 = document.getElementById('next1')
let next2 = document.getElementById('next2')
let next3 = document.getElementById('next3')
let next4 = document.getElementById('next4')
let back1 = document.getElementById('back1')
let back2 = document.getElementById('back2')
let back3 = document.getElementById('back3')
let back4 = document.getElementById('back4')
let home = document.getElementById('home')
let count = document.getElementById('count')
tg.expand()

enter.addEventListener('click', () => {
    document.getElementById('form').style.display = "block";
    if (document.getElementById('FirstText') != null) {
        document.getElementById('FirstText').style.display = "none";
                }
    if (document.getElementById('SecondText') != null) {
        document.getElementById('SecondText').style.display = "none";
                }
    if (document.getElementById('AboutTextFirst') != null) {
        document.getElementById('AboutTextFirst').style.display = "none";
                }
    if (document.getElementById('AboutTextSecond') != null) {
        document.getElementById('AboutTextSecond').style.display = "none";
                }
    if (document.getElementById('AboutTextThird') != null) {
        document.getElementById('AboutTextThird').style.display = "none";
                }
    if (document.getElementById('AboutTextFourth') != null) {
        document.getElementById('AboutTextFourth').style.display = "none";
                }
    if (document.getElementById('AboutTextFifth') != null) {
    document.getElementById('AboutTextFifth').style.display = "none";
                }
    if (document.getElementById('PageHeader') != null) {
    document.getElementById('PageHeader').style.display = "none";
                }
    document.getElementById('user_name').value = tg.initDataUnsafe.user.first_name + " " + tg.initDataUnsafe.user.last_name;

});
if (about != null) {
    about.addEventListener('click', () => {
    document.getElementById('form').style.display = "none";
});
}
home.addEventListener('click', () => {
            document.getElementById('FirstText').style.display = "block";
            // tg.close()
        });
count.addEventListener('click', () => {
            document.getElementById('home').onclick = function() {
                window.location.href = 'villa-view.html';
            document.getElementById('form').style.display = "none";
            document.getElementById('AboutTextFirst').style.display = "none";
            document.getElementById('AboutTextSecond').style.display = "none";
            document.getElementById('AboutTextThird').style.display = "none";
            document.getElementById('AboutTextFourth').style.display = "none";
            document.getElementById('AboutTextFifth').style.display = "none";
            };
        });
next1.addEventListener('click', () => {
    document.getElementById('form').style.display = "none";
    document.getElementById('AboutTextFirst').style.display = "none";
    document.getElementById('AboutTextSecond').style.display = "block";
});
next2.addEventListener('click', () => {
    document.getElementById('AboutTextFirst').style.display = "none";
    document.getElementById('AboutTextSecond').style.display = "none";
    document.getElementById('AboutTextThird').style.display = "block";
        });
next3.addEventListener('click', () => {
    document.getElementById('AboutTextFirst').style.display = "none";
    document.getElementById('AboutTextSecond').style.display = "none";
    document.getElementById('AboutTextThird').style.display = "none";
    document.getElementById('AboutTextFourth').style.display = "block";
        });
next4.addEventListener('click', () => {
    document.getElementById('AboutTextFirst').style.display = "none";
    document.getElementById('AboutTextSecond').style.display = "none";
    document.getElementById('AboutTextThird').style.display = "none";
    document.getElementById('AboutTextFourth').style.display = "none";
    document.getElementById('AboutTextFifth').style.display = "block";
        });
back1.addEventListener('click', () => {
    document.getElementById('AboutTextFirst').style.display = "block";
    document.getElementById('AboutTextSecond').style.display = "none";
});
back2.addEventListener('click', () => {
    document.getElementById('AboutTextFirst').style.display = "none";
    document.getElementById('AboutTextSecond').style.display = "block";
    document.getElementById('AboutTextThird').style.display = "none";
});
back3.addEventListener('click', () => {
    document.getElementById('AboutTextFirst').style.display = "none";
    document.getElementById('AboutTextSecond').style.display = "none";
    document.getElementById('AboutTextThird').style.display = "block";
    document.getElementById('AboutTextFourth').style.display = "none";

});
back4.addEventListener('click', () => {
    document.getElementById('AboutTextFirst').style.display = "none";
    document.getElementById('AboutTextSecond').style.display = "none";
    document.getElementById('AboutTextThird').style.display = "none";
    document.getElementById('AboutTextFourth').style.display = "block";
    document.getElementById('AboutTextFifth').style.display = "none";
});

