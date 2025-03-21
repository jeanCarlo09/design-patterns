/**
 * ! Factory Function
 * Es un patrón de diseño que nos permite crear objetos o funciones de manera dinámica que serán
 * usados posteriormente en el código.
 *
 * * Es útil cuando necesitamos crear objetos o funciones de manera dinámica,
 * * es decir, en tiempo de ejecución y no en tiempo de compilación.
 *
 */

import { COLORS } from "../../constants/colors.ts";

type Language = "es" | "en" | "fr";

// i18n -> Algo como internacionalización
function createGreeter(lang: Language) {
  return function (name: string) {
    const messages = {
      es: `Hola, %c${name}!`,
      en: `Hello, %c${name}!`,
      fr: `Bonjour, %c${name}!`,
    };

    const message = messages[lang];

    if (!message) {
      return console.log("Language not supported", COLORS.red);
    }

    return console.log(messages[lang], COLORS.red);
  };
}

function main() {
  const spanishGreeter = createGreeter("es");
  spanishGreeter("Jean");

  const englishGreeter = createGreeter("en");
  englishGreeter("Jean");

  const frenchGreeter = createGreeter("fr");
  frenchGreeter("Jean");
}

main();
