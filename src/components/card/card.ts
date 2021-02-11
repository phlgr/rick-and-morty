import { Character } from "../../utils/api";
import { createElement } from "../../utils/createElement";

function createCardFront({ imgSrc, name, species, origin }: Character) {
  return createElement("div", {
    className: "card__front",
    childs: [
      createElement("img", {
        className: "card__portrait",
        src: imgSrc,
        alt: "",
      }),
      createElement("div", {
        className: "card__info",
        childs: [
          createElement("h2", {
            className: "info__name",
            innerText: name,
          }),
          createElement("p", {
            innerText: `${status === "Alive" ? "🥳🎉" : "💀"} - ${status}`,
          }),
          createElement("p", {
            className: "info__species",
            innerText: species,
          }),
          createElement("p", {
            className: "info__origin",
            innerText: origin.name,
          }),
        ],
      }),
    ],
  });
}

function createCardBack(character: Character) {
  return createElement("div", {
    className: "card__back",
    childs: [
      createElement("p", {
        innerText: "location",
      }),
    ],
  });
}

export function createCard(character: Character) {
  const card = createElement("article", {
    className: "card",
    childs: [
      createElement("div", {
        className: "card__inner",
        childs: [createCardFront(character), createCardBack(character)],
      }),
    ],
    onclick: () => {
      card.classList.toggle("card-show-back");
    },
  });
  return card;
}
