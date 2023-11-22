const { Router } = require("express");
const router = Router();

const {
  listComentarios,
  storeComentario,
  updateComentario,
  deleteComentario,
} = require("../controllers/comentariosController");

router.get("/comentarios/:id", listComentarios);
router.post("/comentario/create", storeComentario);
// editar o post:
router.put("/comentario/:id", updateComentario);
router.delete("/comentario/:id", deleteComentario);

module.exports = router;
