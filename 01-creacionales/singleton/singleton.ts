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

import { COLORS } from "../../constants/colors.ts";

class DragonBalls {
  private static instance: DragonBalls;
  private ballsCollected: number;

  // Al ser privado el constructor, no se puede instanciar la clase, y por tanto se debe usar el método estático getInstance
  private constructor() {
    this.ballsCollected = 0;
  }

  // Esta solución se puede implementar, pero no es la más recomendada porque al ser un método estático pueden haber problemas
  //   static getInstance(): DragonBalls {
  //     if (!this.instance) {
  //       this.instance = new DragonBalls();
  //     }

  //     return this.instance;
  //   }

  static getInstance(): DragonBalls {
    if (!DragonBalls.instance) {
      DragonBalls.instance = new DragonBalls();
    }

    return DragonBalls.instance;
  }

  collectBall() {
    if (this.ballsCollected < 7) {
      this.ballsCollected++;
      console.log(
        `Ball collected. %cTotal balls collected: ${this.ballsCollected}`,
        COLORS.purple
      );

      return;
    }

    console.log(`All balls collected. %cSummon Shenlon`, COLORS.green);
  }

  summonShenlon() {
    if (this.ballsCollected === 7) {
      console.log(`Shenlon summoned. %cMake your wish`, COLORS.green);
      this.ballsCollected = 0;
      return;
    }

    console.log(
      `\nYou need to collect all the balls to summon Shenlon. %cBalls collected: ${this.ballsCollected}`,
      COLORS.red
    );
  }
}

(() => {
  // Error: El constructor de la clase 'DragonBalls' es privado y solo se puede acceder dentro de la clase declarada
  // const dragonBalls = new DragonBalls();

  const gokuBalls = DragonBalls.getInstance();
  gokuBalls.collectBall();
  gokuBalls.collectBall();
  gokuBalls.summonShenlon();

  const vegetaBalls = DragonBalls.getInstance();
  vegetaBalls.collectBall();
  vegetaBalls.collectBall();
  vegetaBalls.summonShenlon();

  const gohanBalls = DragonBalls.getInstance();
  gohanBalls.collectBall();
  gohanBalls.collectBall();
  gohanBalls.collectBall();
  gohanBalls.collectBall();

  gokuBalls.summonShenlon();
  gohanBalls.summonShenlon();
})();
