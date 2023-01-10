import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Sushi } from './sushi';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const sushi = [

      { id: 2, name: 'Maki', description: "En japonés, maki significa “rollo”. El maki sushi es un rollo de alga nori relleno de arroz e ingredientes como pescado, marisco o verduras. Estos deliciosos rollitos son muy populares y permiten poner mucha imaginación a sus rellenos.", img: "https://images.hola.com/imagenes/cocina/recetas/20200221161232/sushi-maki-de-atun/0-787-34/sushi-maki-de-atun-m.jpg" },
      { id: 3, name: 'Uramaki', description: "Sushi enrollado, la capa externa es de arroz sushi y la interna es de alga nori. La palabra japonesa “Ura” significa al revés, por eso los ingredientes se colocan en otro orden. Se corta en porciones para disfrutarse de un bocado.", img: "https://img-global.cpcdn.com/recipes/0ee2ee24e36c568d/1200x630cq70/photo.jpg" },
      { id: 4, name: 'Nigiri', description: "Es la versión tradicional del sushi japonés. Es una pequeña porción de arroz con una forma alargada y cubierta de pescado, por lo general crudo. El arroz no debe mojarse en salsa de soya, únicamente el pescado para intensificar su sabor.", img: "https://laroleria.cl/wp-content/uploads/2021/12/IMG_4498-scaled.jpg" },
      { id: 5, name: 'Gunkan', description: "Gunkan significa buque acorazado porque está inspirado en su forma, el alga nori reproduce la forma de la cubierta de un barco y fue inventado en 1941 en el restaurante Ginza Kyubey.", img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/4e59b28a-d96a-44d0-8d07-b96ddf7f8779/Derivates/698bd2ec-668d-46b4-9551-cbb8f9b43e0d.jpg" },
      { id: 6, name: 'Inari', description: "Los inari son delgadas láminas de tofu frito (abura-age) en abundante aceite. El nombre viene de los santuarios Inari, donde el zorro tiene un puesto de honor.", img: "https://pm1.narvii.com/7131/64be3e59ca22b63c0d1c518c8692c104a895ead4r1-1080-667v2_00.jpg" },
      { id: 7, name: 'Oshi', description: "El oshi sushi es una variedad más de sushi, el cual se obtiene prensando los distintos ingredientes que lo conforman para obtener finalmente una preparación rectangular que al cortarlo parecen pequeños bocados dulces.", img: "https://okaerisushibar.com/wp-content/uploads/2021/03/nigiri-2-1.jpg" },
      { id: 8, name: 'Temaki', description: "Esta versión tiene forma de cono y puedes comerlo con la mano, como si fuera un taco porque el alga nori sirve para contener todos los ingredientes. En japonés “Te” significa mano y en conjunto con “Maki” puede traducirse a estar enrollado a mano.", img: "https://www.muyjapones.com/wp-content/uploads/2019/08/Temaki-Sushi-1.jpg" },
      { id: 9, name: 'Mochi', description: "La secuencia de caracteres uwu es un emoticono que se emplea para expresar felicidad o ternura.", img: "https://www.muyjapones.com/wp-content/uploads/2020/03/aa.jpg" }
    ];
    return { sushi };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(sushi: Sushi[]): number {
    return sushi.length > 0 ? Math.max(...sushi.map(sushi => sushi.id)) + 1 : 11;
  }
}