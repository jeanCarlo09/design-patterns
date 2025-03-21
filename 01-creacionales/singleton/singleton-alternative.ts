/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

/**
 * Al obtener la instancia de la exportación, se obtiene la misma instancia
 * en todos los módulos o archivos en los que se importe
 *
 * Tiene sus desventajas, cómo puede ser realizar pruebas a la clase, porque probar un Singleton tiene sus cosas,
 * porque sería lo que expones, también complica el tema de inyección, herencia, etc.
 * Porque solamente puedes exportar la instancia, no la clase en sí porque sino luego se puede instanciar externamente.
 */
import { configManager } from "./config-manager.ts";

(() => {
  const config1 = configManager;
  config1.setConfig("apiURL", "https://api.com");
  config1.setConfig("apiKey", "123456");
  console.log(config1.getAllConfig());

  const config2 = configManager;
  config2.setConfig("apiVersion", "v1");
  console.log(config2.getAllConfig());

  console.log(config1 === config2);
  console.log(config1.getConfig("apiVersion"));
  console.log(config2.getConfig("apiURL"));
})();
