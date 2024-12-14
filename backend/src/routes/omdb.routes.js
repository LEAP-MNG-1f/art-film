import express from "express";
import { fetchMovieData } from "../controllers/omdb.controller.js";

const omdbRouter = express.Router();

omdbRouter.get("/omdb/movie", fetchMovieData);

export default omdbRouter;

// 1. searchQuery
//    - Захиалга: ?searchQuery=Inception
//    - Тайлбар: Хэрэглэгчид кино эсвэл цувралын нэрийг оруулахад ашиглана.
//    - Жишээ:
//      /api/movie?searchQuery=Inception

// 2. title
//    - Захиалга: ?title=Inception
//    - Тайлбар: Хэрэв хэрэглэгч киноны нэрээр хайлт хийхийг хүсвэл ашиглана.
//    - Жишээ:
//      /api/movie?title=Inception

// 3. imdbID
//    - Захиалга: ?imdbID=tt1375666
//    - Тайлбар: IMDB-ийн ID-г ашиглан тодорхой кино эсвэл цувралын мэдээллийг авах.
//    - Жишээ:
//      /api/movie?imdbID=tt1375666

// 4. year
//    - Захиалга: ?year=2010
//    - Тайлбар: Кино эсвэл цувралын гаралтын жил.
//    - Жишээ:
//      /api/movie?year=2010

// 5. responseType
//    - Захиалга: ?responseType=json
//    - Тайлбар: Хариу өгөгдлийн формат (жишээ: json).
//    - Жишээ:
//      /api/movie?responseType=json

// 6. season
//    - Захиалга: ?season=1
//    - Тайлбар: Цуврал киноны улирлын дугаар.
//    - Жишээ:
//      /api/movie?title=Inception&season=1

// 7. episode
//    - Захиалга: ?episode=1
//    - Тайлбар: Цуврал киноны анхны дугаар.
//    - Жишээ:
//      /api/movie?title=Inception&season=1&episode=1

// 8. mediaType
//    - Захиалга: ?mediaType=movie
//    - Тайлбар: Хайлт хийх медиа төрлөө тодорхойлно (жишээ: movie, series).
//    - Жишээ:
//      /api/movie?mediaType=movie
