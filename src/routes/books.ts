import express from "express";
import controller from "../controllers/books";
const router = express.Router();

router.get("/books", controller.getBooks);
router.get("/books/:id", controller.getBook);
router.post("/books", controller.addBook);
// router.put("/books/:id", controller.updateBook);
// router.delete("/books/:id", controller.deleteBook);

export = router;
