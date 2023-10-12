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

const div = document.querySelector( '#popup');

document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(div);

	if ( ! withinBoundaries ) {
		div.style.display = 'none'; // скрываем элемент т к клик был за его пределами
	}
})
Array.from(document.querySelectorAll('.EnterButton'), function(el){
  el.onclick = function(){
    document.getElementById('form').style.display = "block";
    document.getElementById('CountButton').style.display = "block";
    if (document.getElementById('FirstText') != null) {
        document.getElementById('FirstText').style.display = "none";
                }
    if (document.getElementById('SecondText') != null) {
        document.getElementById('SecondText').style.display = "none";
                }
    if (document.getElementById('ColumnInfo') != null) {
        document.getElementById('ColumnInfo').style.display = "none";
                }
    if (document.getElementById('AboutInfoText') != null) {
        document.getElementById('AboutInfoText').style.display = "none";
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


} })

// enter.addEventListener('click', () => {
//     document.getElementById('form').style.display = "block";
//     document.getElementById('CountButton').style.display = "block";
//     if (document.getElementById('FirstText') != null) {
//         document.getElementById('FirstText').style.display = "none";
//                 }
//     if (document.getElementById('SecondText') != null) {
//         document.getElementById('SecondText').style.display = "none";
//                 }
//     if (document.getElementById('ColumnInfo') != null) {
//         document.getElementById('ColumnInfo').style.display = "none";
//                 }
//     if (document.getElementById('AboutInfoText') != null) {
//         document.getElementById('AboutInfoText').style.display = "none";
//                 }
//     if (document.getElementById('SecondText') != null) {
//         document.getElementById('SecondText').style.display = "none";
//                 }
//     if (document.getElementById('AboutTextFirst') != null) {
//         document.getElementById('AboutTextFirst').style.display = "none";
//                 }
//     if (document.getElementById('AboutTextSecond') != null) {
//         document.getElementById('AboutTextSecond').style.display = "none";
//                 }
//     if (document.getElementById('AboutTextThird') != null) {
//         document.getElementById('AboutTextThird').style.display = "none";
//                 }
//     if (document.getElementById('AboutTextFourth') != null) {
//         document.getElementById('AboutTextFourth').style.display = "none";
//                 }
//     if (document.getElementById('AboutTextFifth') != null) {
//     document.getElementById('AboutTextFifth').style.display = "none";
//                 }
//     if (document.getElementById('PageHeader') != null) {
//     document.getElementById('PageHeader').style.display = "none";
//                 }
//     document.getElementById('user_name').value = tg.initDataUnsafe.user.first_name + " " + tg.initDataUnsafe.user.last_name;
//
// });
if (about != null) {
    about.addEventListener('click', () => {
    document.getElementById('form').style.display = "none";
});
}
if (home != null) {
    home.addEventListener('click', () => {
        document.getElementById('FirstText').style.display = "block";
        // tg.close()
    });
}
if (count != null) {
    count.addEventListener('click', () => {
        document.getElementById('form').style.display = "none";
        document.getElementById('AboutTextFirst').style.display = "none";
        document.getElementById('AboutTextSecond').style.display = "none";
        document.getElementById('AboutTextThird').style.display = "none";
        document.getElementById('AboutTextFourth').style.display = "none";
        document.getElementById('AboutTextFifth').style.display = "none";
        });
}
if (next1 != null) {
    next1.addEventListener('click', () => {
        document.getElementById('form').style.display = "none";
        document.getElementById('AboutTextFirst').style.display = "none";
        document.getElementById('AboutTextSecond').style.display = "block";
    });
}
if (next2 != null) {
    next2.addEventListener('click', () => {
        document.getElementById('AboutTextFirst').style.display = "none";
        document.getElementById('AboutTextSecond').style.display = "none";
        document.getElementById('AboutTextThird').style.display = "block";
        document.getElementById('enter').style.display = "none";
    });
}
if (next3 != null) {
    next3.addEventListener('click', () => {
        document.getElementById('AboutTextFirst').style.display = "none";
        document.getElementById('AboutTextSecond').style.display = "none";
        document.getElementById('AboutTextThird').style.display = "none";
        document.getElementById('AboutTextFourth').style.display = "block";
    });
}
if (next4 != null) {
    next4.addEventListener('click', () => {
        document.getElementById('AboutTextFirst').style.display = "none";
        document.getElementById('AboutTextSecond').style.display = "none";
        document.getElementById('AboutTextThird').style.display = "none";
        document.getElementById('AboutTextFourth').style.display = "none";
        document.getElementById('AboutTextFifth').style.display = "block";
    });
}
if (back1 != null) {
    back1.addEventListener('click', () => {
        document.getElementById('AboutTextFirst').style.display = "block";
        document.getElementById('AboutTextSecond').style.display = "none";
    });
}
if (back2 != null) {
    back2.addEventListener('click', () => {
        document.getElementById('AboutTextFirst').style.display = "none";
        document.getElementById('AboutTextSecond').style.display = "block";
        document.getElementById('AboutTextThird').style.display = "none";
    });
}
if (back3 != null) {
    back3.addEventListener('click', () => {
        document.getElementById('AboutTextFirst').style.display = "none";
        document.getElementById('AboutTextSecond').style.display = "none";
        document.getElementById('AboutTextThird').style.display = "block";
        document.getElementById('AboutTextFourth').style.display = "none";

    });
}
if (back4 != null) {
    back4.addEventListener('click', () => {
        document.getElementById('AboutTextFirst').style.display = "none";
        document.getElementById('AboutTextSecond').style.display = "none";
        document.getElementById('AboutTextThird').style.display = "none";
        document.getElementById('AboutTextFourth').style.display = "block";
        document.getElementById('AboutTextFifth').style.display = "none";
    });
}

