const { Router } = require("express");
const router = Router();

const {
    listReacoes,
    storeReacao,
    deleteReacao,
} = require("../controllers/reacoesController");

router.get("/reacoes", listReacoes);
router.post("/reacao/create", storeReacao);
// editar o post:
router.delete("/reacao/:id", deleteReacao);

module.exports = router;
