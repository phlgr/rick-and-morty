import { createElement } from "../../utils/createElement";

export function createCard({ imgSrc, name, species, origin }) {
  return createElement("div", {
    className: "card",
    children: [
      createElement("img", {
        className: "card__portrait",
        src: imgSrc,
      }),
      createElement("div", {
        className: "card__info",
        children: [
          createElement("h2", {
            className: "info__name",
            innerText: name,
          }),
          createElement("p", {
            className: "info__species",
            innerText: species,
          }),
          createElement("p", {
            className: "info__origin",
            innerText: origin,
          }),
        ],
      }),
    ],
  });
}
