import { body } from "express-validator";

const movieValidationRules = () => [
  body("title")
    .isString()
    .withMessage("Киноны нэр текст байх ёстой")
    .notEmpty()
    .withMessage("Киноны нэр заавал шаардлагатай")
    .isLength({ min: 2, max: 200 })
    .withMessage("Киноны нэр 2-200 тэмдэгтийн хооронд байх ёстой"),
  body("releaseYear")
    .isInt({ min: 1900, max: new Date().getFullYear() })
    .withMessage("Гарсан он 1900-оноос одоогийн он хүртэл байх ёстой"),
  body("genre")
    .isArray({ min: 1 })
    .withMessage("Жанрын жагсаалт хамгийн багадаа 1 утга агуулсан байх ёстой"),
];

export { movieValidationRules };
