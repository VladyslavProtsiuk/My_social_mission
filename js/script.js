var layer = document.querySelectorAll(".layer");
var watch = document.querySelector(".watch");
var real_watch = document.querySelector(".real_watch");
var paralax = document.querySelector(".paralax");
var centerY = paralax.clientHeight / 2;
var centerX = paralax.clientWidth / 2;
var watch_cent_x = watch.offsetWidth / 2;
var watch_cent_y = watch.offsetHeight / 2;
var ev;
var dist;
var obj_x;
var obj_y;
var object = document.querySelectorAll(".object");
var colon = document.querySelectorAll(".colon");
var profesion = document.querySelectorAll(".profession");
var stair = document.querySelectorAll(".stair");
var timeline = document.querySelector(".timeline");
var r_arrow = document.querySelector(".wrapper__arrow-right");
var l_arrow = document.querySelector(".wrapper__arrow-left");
var order = 0;
var overflow = document.querySelector(".overflow");
var reset = document.querySelector(".button_reset");
var send = document.querySelector(".button_send");
var answers = new Object();
var num_quest;
var num_answ;
var elem_id;
var layers = document.querySelectorAll(".layers");
var paralax_3 = document.querySelector(".paralax_3");
var paralax_3_cent_y = paralax_3.clientHeight / 2;
var paralax_3_cent_x = paralax_3.clientWidth / 2;
var moduled__window = document.querySelector(".moduled__window");
var ne_img = document.querySelector(".ne_img");
var ne_text = document.querySelector(".ne_text");
var go_out = document.querySelector(".go_out");
var connect = new XMLHttpRequest();
let receivedUser;

let icons__array = [
	"person",
	"person",
	"notifications",
	"groups",
	"people",
	"share",
	"person_outline",
	"school",
	"person_add",
	"public",
	"emoji_events",
	"group",
	"notifications_active",
	"engineering",
	"construction",
	"people_alt",
	"group_add",
	"psychology",
	"health_and_safety",
	"travel_explore",
	"whatsapp",
	"emoji_emotions",
	"notifications_none",
	"sports_esports",
	"thumb_up_alt",
	"sentiment_satisfied",
	"water_drop",
	"location_city",
	"ios_share",
	"emoji_objects",
	"sentiment_very_satisfied",
	"precision_manufacturing",
	"person_add_alt",
	"military_tech",
	"science",
	"history_edu",
	"cake",
	"sentiment_dissatisfied",
	"coronavirus",
	"emoji_people",
	"sentiment_very_dissatisfied",
	"self_improvement",
	"poll",
	"person_remove",
	"female",
	"sports_soccer",
	"domain",
	"whatshot",
	"people_outline",
	"recommend",
	"mood",
	"male",
	"masks",
	"person_off",
	"workspace_premium",
	"sentiment_neutral",
	"person_add_alt_1",
	"connect_without_contact",
	"back_hand",
	"architecture",
	"hiking",
	"recycling",
	"notifications_off",
	"waving_hand",
	"luggage",
	"thumb_down_alt",
	"mood_bad",
	"front_hand",
	"emoji_nature",
	"catching_pokemon",
	"switch_account",
	"emoji_symbols",
	"nights_stay",
	"king_bed",
	"sports_basketball",
	"notification_add",
	"sports",
	"sports_kabaddi",
	"reduce_capacity",
	"sick",
	"emoji_food_beverage",
	"emoji_transportation",
	"social_distance",
	"vaccines",
	"transgender",
	"interests",
	"sports_tennis",
	"real_estate_agent",
	"deck",
	"elderly",
	"outdoor_grill",
	"clean_hands",
	"follow_the_signs",
	"add_moderator",
	"piano",
	"sanitizer",
	"plus_one",
	"fireplace",
	"surfing",
	"sports_motorsports",
	"add_reaction",
	"edit_notifications",
	"sports_handball",
	"cruelty_free",
	"sports_baseball",
	"pages",
	"cookie",
	"sports_volleyball",
	"sports_football",
	"kayaking",
	"skateboarding",
	"single_bed",
	"man",
	"downhill_skiing",
	"public_off",
	"compost",
	"personal_injury",
	"heart_broken",
	"safety_divider",
	"remove_moderator",
	"woman",
	"notifications_paused",
	"person_remove_alt_1",
	"nordic_walking",
	"sports_cricket",
	"6_ft_apart",
	"sports_mma",
	"pix",
	"paragliding",
	"sports_golf",
	"group_off",
	"hive",
	"co2",
	"party_mode",
	"snowboarding",
	"group_remove",
	"kitesurfing",
	"snowshoeing",
	"ice_skating",
	"sports_rugby",
	"sports_hockey",
	"sledding",
	"fitbit",
	"south_america",
	"no_luggage",
	"piano_off",
	"scale",
	"sports_martial_arts",
	"boy",
	"domain_add",
	"girl",
	"elderly_woman",
	"handshake",
	"sports_gymnastics",
	"scuba_diving",
	"scoreboard",
	"roller_skating",
];

function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

document.body.addEventListener("mousemove", function (event) {
	for (var i = 0; i < layer.length; i++) {
		layer[i].setAttribute(
			"style",
			"transform: translate3d(" +
			(centerX - event.pageX) / (17 + i * 8) +
			"px, " +
			Math.round((centerY - event.pageY) / (17 + i * 8)) +
			"px, 0);"
		);
	}
	for (var i = 0; i < layers.length; i++) {
		layers[i].setAttribute(
			"style",
			"transform: translate3d(" +
			(paralax_3_cent_x - event.pageX) / (17 + i * 12) +
			"px, " +
			Math.round((paralax_3_cent_y - event.pageY) / (17 + i * 12)) +
			"px, 0);"
		);
	}
});

function anime() {
	watch_cent_x = watch.getBoundingClientRect().x + watch.offsetWidth / 2;
	watch_cent_y = watch.getBoundingClientRect().y + watch.offsetHeight / 2;
	for (var i = 0; i < object.length; i++) {
		obj_x =
			object[i].getBoundingClientRect().x +
			object[i].getBoundingClientRect().width / 2;
		obj_y =
			object[i].getBoundingClientRect().y +
			object[i].getBoundingClientRect().height / 2;
		dist = Math.sqrt((watch_cent_x - obj_x) ** 2 + (watch_cent_y - obj_y) ** 2);
		object[i].style.transform =
			"scale(" + Math.min((1 - dist / watch_cent_x) * 1.5, 1) + ")";
		object[i].style.opacity = Math.min((1 - dist / watch_cent_x) * 1.5, 1);
	}
}

$(".object").on("click", function (event) {
	$(".real_watch")[0].style.top = +real_watch.getBoundingClientRect().y -
		(+this.getBoundingClientRect().y +
			+this.getBoundingClientRect().height / 2) +
		+watch_cent_y +
		50 +
		"px";
	$(".real_watch")[0].style.left = +real_watch.getBoundingClientRect().x / 2 -
		(+this.getBoundingClientRect().x +
			+this.getBoundingClientRect().width / 2) +
		+watch_cent_x -
		50 +
		"px";
});

var times = setInterval(anime, 50);

$(".real_watch").draggable({
	scrollSpeed: 0,
});

function profession() {
	for (var k = 0; k < object.length; k++) {
		object[k].style.background = getRandomColor();
		object[k].innerText =
			icons__array[Math.round(Math.random() * icons__array.length)];
	}
}
profession();
window.addEventListener("scroll", function (event) {
	if (document.documentElement.clientWidth >= 1366) {
		if (pageYOffset > 700 && pageYOffset < 1400) {
			diagram();
		} else {
			anti_diagram();
		}
		if (pageYOffset > 1250 && pageYOffset < 1700) {
			table();
		}
	}
	if (
		document.documentElement.clientWidth <= 1366 &&
		document.documentElement.clientWidth >= 720
	) {
		if (pageYOffset > 700 && pageYOffset < 1400) {
			console.log(pageYOffset);
			diagram();
		} else {
			anti_diagram();
		}
		if (pageYOffset > 1350 && pageYOffset < 1450) {
			table();
		}
	}
});

function diagram() {
	var flex =
		(+window
			.getComputedStyle(document.querySelector(".diagram_b"))
			.width.replace("px", "") -
			30 * 13) /
		12;
	for (var t = 0; t < colon.length; t++) {
		colon[t].style.left = t * 30 + t * flex + "px";
		profesion[t].style.left = t * 30 + t * flex + "px";
		profesion[t].style.opacity = 1;
	}
	colon[0].style.height = "141px";
	colon[1].style.height = "264px";
	colon[2].style.height = "183px";
	colon[3].style.height = "289px";
	colon[4].style.height = "208px";
	colon[5].style.height = "251px";
	colon[6].style.height = "326px";
	colon[7].style.height = "217px";
	colon[8].style.height = "297px";
	colon[9].style.height = "236px";
	colon[10].style.height = "345px";
	colon[11].style.height = "273px";
	colon[12].style.height = "217px";
}

function anti_diagram() {
	for (var g = 0; g < colon.length; g++) {
		colon[g].style.height = "0";
	}
	for (var t = 0; t < colon.length; t++) {
		profesion[t].style.left = 0;
		profesion[t].style.opacity = 0;
	}
}

function table() {
	document.querySelector(".table-wrapper").style.opacity = 1;
}

l_arrow.addEventListener("click", function () {
	if (order > 0) {
		overflow.style.left = +overflow.style.left.replace("px", "") + 500 + "px";
		order--;
	}
});

r_arrow.addEventListener("click", function () {
	if (order < 9) {
		overflow.style.left = +overflow.style.left.replace("px", "") - 500 + "px";
		order++;
	}
});

reset.addEventListener("click", function () {
	document.querySelectorAll(".answ input").forEach((element) => {
		element.checked = false;
	});
});

send.addEventListener("click", function () {
	if (document.querySelectorAll(".answ input:checked").length >= 10) {
		for (
			var ny = 0; ny < document.querySelectorAll(".answ input:checked").length; ny++
		) {
			elem_id = document
				.querySelectorAll(".answ input:checked")[ny].id.replace("answer-", "");
			num_quest = (elem_id[0] + elem_id[1]).replace("-", "");
			num_answ = (elem_id[2] + elem_id[3])
				.replace("-", "")
				.replace("undefined", "");
			answers[num_quest] = num_answ;
		}
		console.log(answers)
		var letter = JSON.stringify(answers);
		connect.open("POST", "http://127.0.0.1:3000/letter");
		connect.setRequestHeader("cache-control", "no-cache");
		connect.setRequestHeader("content-type", "application/json;charset=UTF-8");
		var nsa = 0;
		connect.addEventListener("load", function () {
			if (connect.readyState === 4 && nsa == 0) {
				let receivedUser = JSON.parse(connect.response);
				console.log(connect.response);
				alert(
					"Ваш результат - " + receivedUser.marks + "/" + receivedUser.count
				);
				nsa = 1;
			}
		});
		connect.send(letter);
	} else {
		alert("Ви повинні відповісти на всі питання!")
	}
});
go_out.addEventListener("click", function () {
	moduled__window.classList.remove("wind_activ");
	for (var m = 0; m < stair.length; m++) {
		stair[m].style.opacity = 1;
	}
});

stair.forEach((element) => {
	element.addEventListener("click", function (event) {
		stair.forEach((element) => {
			element.style.opacity = "0.5";
		});
		switch (+event.target.classList[1].replace("stair_", "")) {
			case 1:
				ne_img.style.background = `url("../img/programmer.png")`;
				ne_text.innerText =
					"За довгі роки фрілансу я наберусь досвіду, що позволить мені стати висококваліффікованим сайтобудівником";
				break;
			case 2:
				ne_img.style.background = `url("../img/freelance(1).png")`;
				ne_text.innerText =
					"Чудовий боєць за замовлення. Заколений у битвах з часом за дедлайн, в якого в жилах тече кава.";
				break;
			case 3:
				ne_img.style.background = `url("../img/freelance.png")`;
				ne_text.innerText =
					"Пройшов пару боїв. Зумів видобути гроші на їжу. Справжній жоводзьобий у сфері IT";
				break;
			case 4:
				ne_img.style.background = `url("../img/freelancer(1).png")`;
				ne_text.innerText =
					"Щойно прийшовший на величезний ринок фрілансу. Береться за замовлення за безцінь. Поки що мало, що знає.";
				break;
			case 5:
				ne_img.style.background = `url("../img/graduated.png")`;
				ne_text.innerText =
					"Закінчивши школу став надмінним. Вважає, що зможе зробити, що завгодно. Недостатньо знань через погану успішнсть в школі";
				break;
			case 6:
				ne_img.style.background = `url("../img/student.png")`;
				ne_text.innerText = `Вивчення JS стало непосильною задачею з якою я справився. Так званна "місія неможлива". Вивчити одну мову програмування пів-біди. А як же ж на ньому основані мови? `;
				break;
			case 7:
				ne_img.style.background = `url("../img/students.png")`;
				ne_text.innerText =
					"Здавалось вершиною мистецтва сайтобудування був Grid і media-запроси. Знання тільки HTML/CSS ";
				break;
			case 8:
				ne_img.style.background = `url("../img/student(2).png")`;
				ne_text.innerText =
					"Початок шляху від абсолютного незнання до абсолютного нерозуміння";
				break;
		}

		moduled__window.classList.add("wind_activ");
	});
});