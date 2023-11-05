import { LINK_MY_HABR_ARTICLES } from "@/constants/links";
import { TYPE_HTML, TYPE_SEMANTIC_HTML } from "@/constants/types";

let example1 = `
function helloWorld() {
    console.log("hello world!")
}
`;

export default {
	title: "Привет, меня зовут Влад!",
	content: [
		{
			subtitle: "Кто я такой?",
			paragraph: [
				{
					type: TYPE_SEMANTIC_HTML.TEXT,
					value: [
						{
							type: TYPE_HTML.TEXT_PLAIN,
							value: "Я занимаюсь больше года веб-разработкой, делаю сайты. Являюсь junior+/middle разработчиком, зависит от того, кто для вас junior+, а кто middle :) Мне это очень нравится, хочу развиваться в этом направлении дальше и глубже. Написал даже статью на хабре: ",
						},
						{
							type: TYPE_HTML.LINK,
							value: LINK_MY_HABR_ARTICLES[0],
						},
						{
							type: TYPE_HTML.TEXT_PLAIN,
							value: ". Пользовательские интерфейсы, UI-компоненты, запросы на сервер, работа с данными в БД, проектирование БД, работа с бизнес-логикой, рефакторинг кода(работал и с легаси тоже)",
						},
					],
				},
				{
					type: TYPE_SEMANTIC_HTML.TEXT,
					value: [
						{
							type: TYPE_HTML.TEXT_PLAIN,
							value: "Нравится фуллстек, проектирование системы от начала и до конца. Стараюсь придерживаться единого стиля проекта, чтобы можно было удобно расширять не только вертикально, но и горизонтально.",
						},
					],
				},
				{
					type: TYPE_SEMANTIC_HTML.CODE,
					value: example1,
				},
			],
		},
	],
};
