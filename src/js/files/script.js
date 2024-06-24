// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";



// Получаем ссылки на элементы
var button = document.querySelector('.content-about__close');
if (button) {
  var popupBody = document.querySelector('.popup__body');
  var popupContent = document.querySelectorAll('.popup__content');
  var formCloseButton = document.querySelector('.content-form__close');
  var textarea = document.querySelector('.input-text');

  // Функция для добавления класса _delete-info
  function addDeleteInfoClass() {
    popupBody.classList.add('_delete-info');
  }

  // Функция для удаления класса _delete-info
  function removeDeleteInfoClass() {
    popupBody.classList.remove('_delete-info');
  }

  // Функция для удаления атрибута data-close
  function removeDataClose() {
    button.removeAttribute('data-close');
  }

  // Функция для добавления атрибута data-close
  function addDataClose() {
    button.setAttribute('data-close', '');
  }

  // Функция для проверки, является ли элемент предком указанного элемента
  function isDescendant(parent, child) {
    var node = child.parentNode;
    while (node != null) {
      if (node === parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }

  // Функция для проверки клика вне элементов
  function handleClickOutside(event) {
    if (
      !button.contains(event.target) &&
      !isDescendant(popupBody, event.target) &&
      !isDescendant(formCloseButton, event.target) &&
      event.target !== textarea
    ) {
      removeDeleteInfoClass();
    }
  }

  // Функция для проверки размера экрана и обновления атрибута
  function checkScreenWidth() {
    if (window.innerWidth < 900) {
      button.addEventListener('click', addDeleteInfoClass);
      removeDataClose();
    } else {
      button.removeEventListener('click', addDeleteInfoClass);
      popupBody.classList.remove('_delete-info');
      addDataClose();
    }
  }

  window.addEventListener('resize', checkScreenWidth);
  document.addEventListener('click', handleClickOutside);
  textarea.addEventListener('click', addDeleteInfoClass);
  checkScreenWidth();
}



var CityInfo = {
	'kyiv': { 
		name: 'Київ', 
		desc: 'Київ із зе кепітал оф грейт Юкрейн, бо грейт аж з 11 століття, відколи був найбільшим містом у Європі.'
	},
	'kharkiv': { 
		name: 'Харків', 
		desc: '1. Flintкривай в собі незламність, як мешканці залізобетонного Харкова<br><br> 2. Харків’яни розшифрували писемність майя, але на пачечках улюблених сухариків Flint все українською)'
	},
	'odesa': { 
		name: 'Одесу', 
		desc: 'Мріяв стати відомим, але все скінчилось дитячими віршиками на табуретці? Flintкривай одеський вайб червоних доріжок першої державної кіностудії. '
	},
	'dnipro': { 
		name: 'Дніпро', 
		desc: 'Flintкрий для себе місто-батьківщину сухариків Flint, які з’явилися тут у 2002 році! До речі, найпершим смаком сухариків цілого покоління став «Сметана із зеленню». Ностальжи, чи не так?'
	},
	'lviv': { 
		name: 'Львів', 
		desc: 'Не забудь зробити дотепний вигляд обличчя, бо недарма ж ти Flintкрив для себе культурну столицю країни ― Львів, де було надруковано першу українську книжку. '
	},
	'vinnytsia': { 
		name: 'Вінницю', 
		desc: 'Вінниця 4 рази отримала статус найкомфортнішого міста для життя… а ти знаєш, що найкомфортніше ― це друзі, вихідний і ба-а-а-а-гато сухариків Flint.'
	},
	'donetsk': { 
		name: 'Донецьк', 
		desc: 'А ти знаєш, які скарби не дістав би навіть найвправніший пірат Flint? Донецьке цінне вугілля, яке знаходиться на глибині понад 1700 метрів! Для його здобуття було сконструйовано найглибші шахти.'
	},
	'poltava': { 
		name: 'Полтаву', 
		desc: 'Територія Полтавщини заселена понад 15 тисяч років. Flint існує понад 22 роки. А скільки тобі?'
	},
	'zhytomyr': { 
		name: 'Житомир', 
		desc: 'Фанати Flint такі ж любителі похрумтіти, як і 22 % усіх українських бобрів, що живуть у Житомирі (цього ж достатньо, щоб довести його існування?) '
	},
	'zaporizhzhia': { 
		name: 'Запоріжжя', 
		desc: 'Вулиця Івана Труша всього 360 кв.м., але цього вже достатньо, щоб похрумтіти Flint ііз друзями.'
	},
	'frankivsk': { 
		name: 'Івано-Франківськ', 
		desc: 'Відкривши банку огірків, тебе по праву можна називати Василем Вірастюком, найсильнішу людину планети, якого подарувало нам його місто Івано-Франківськ.'
	},
	'sumy': { 
		name: 'Суми', 
		desc: 'Якщо альтанка в тебе досі асоціюється з пікніком та шашликами, це означає, що ти досі не Flintкрив для себе ажурну альтанку міста троянд. '
	},
	'rivne': { 
		name: 'Рівне', 
		desc: 'Flintкривай Укрзалізницю та мандруй стопами видобувачів бурштину в бурштиновому краї Рівненщини.'
	},
	'ternopil': { 
		name: 'Тернопіль', 
		desc: 'PayPass, Face ID… А чи знав ти, що саме Тернопіль ― наш провідник у світ технологій! Адже це перше місто в Україні з електронним квитком у громадському транспорті.'
	},
	'uzhgorod': { 
		name: 'Ужгород', 
		desc: 'Якщо прогулянку з Flint хочеться розтягнути на подовше, тоді Flintкривай для себе Липову алею, яка має довжину 2200 м і є найдовшою не тільки в Україні, а й у всій Європі.  '
	},
	'kherson': { 
		name: 'Херсон', 
		desc: 'Окрім героїзму, місто Херсон відоме тим, що стало знімальним майданчиком для фільму «Том Сойєр». Здається, настав час передивитись та похрумтіти смачненьким.'
	},
	'kropyvnytskyi': { 
		name: 'Кропивницький', 
		desc: 'Марко Кропивницький був настільки крутим письменником, що в його честь місто назвали! То може бери свій запас сухариків, лептоп і вирушай за письменницьким натхненням до центральної України!)'
	},
	'luhansk': { 
		name: 'Луганськ', 
		desc: 'Щоби побачити єдинорога, треба вирушати в Луганськ, де є унікальний експонат: гармата, названа «кріпаком єдинорогом», яку вилили на Луганському заводі у 1814 році.'
	},
	'lutsk': { 
		name: 'Луцьк', 
		desc: 'Неймовірно, але факт: так само, як ти зберігаєш свої дитячі щоденники, так і в Луцьку зберігся один із найстаріших замків. '
	},
	'mykolaiv': { 
		name: 'Миколаїв', 
		desc: 'Місто кораблебудування. Цікаво, чи не тими кораблями виловлюють ті найсмачніші пачки сухариків Флінт зі смаком “Краб”.'
	},
	'simferopol': { 
		name: 'Сімферополь', 
		desc: 'Якщо на планеті й існує час на похрумтіти Flint та подумати за життя — то найдовший тролейбусний маршрут на планеті між Ялтою та  Сімферополем створений якраз для цього! 86 км — ти і Flint!'
	},
	'khmelnytskyi': { 
		name: 'Хмельницький', 
		desc: 'Справжнім отаманом не народжуються — ним стають! І ти зможеш! Flint і дух Богдана Хмельницького підтримують твій козацький дух!'
	},
	'chernihiv': { 
		name: 'Чернігів', 
		desc: 'Коли захочеш поподорожувати великим та могутнім містом, Flinткрий для себе Чернігів ― друге за площею місто в Україні. '
	},
	'chernivtsi': { 
		name: 'Чернівці', 
		desc: 'Подейкують, що на вулиці Кобилянської колись підмітали букетами троянд і людей не пускали у взутті, а ти досі сиплеш крихтами сухариків після вологого прибирання.'
	},
	'cherkasy': { 
		name: 'Черкаси', 
		desc: 'Сухарики, які чекали на дружні посиденьки, зникають так само таємничо, як і Зниклий замок на Черкащині. '
	}
};

document.addEventListener("beforePopupOpen", function(event) {
	var CityID = event.detail.popup.lastFocusEl.id;
	document.querySelector("#popup .content-about__title").innerHTML= "Цікавий факт про " + CityInfo[CityID].name;
	document.querySelector("#popup .content-about__content").innerHTML=CityInfo[CityID].desc;
  document.querySelector("#popup input[name='city']").value = CityID;
});