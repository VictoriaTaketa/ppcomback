const connection = require("../config/db");

async function listComentarios(request, response) {
  const params = Array(request.params.id);

  const query = 'select c.descricao ' +
  ' from comentarios c, posts p ' +
  ' where c.id_post = ?  and c.id_post = p.id; ';

  // Preparar o comando de execução no banco
  connection.query(query, params, (err, results) => {
    try {
      // Tenta retornar as solicitações requisitadas
      if (results) {
        // Se tiver conteúdo
        response.status(200).json({
          success: true,
          message: "Retorno de comentarios com sucesso!",
          data: results,
        });
      } else {
        // Retorno com informações de erros
        response.status(400).json({
          success: false,
          message: `Não foi possível retornar os comentarios.`,
          query: err.sql,
          sqlMessage: err.sqlMessage,
        });
      }
    } catch (e) {
      // Caso aconteça qualquer erro no processo na requisição, retorna uma mensagem amigável
      response.status(400).json({
        succes: false,
        message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
        query: err.sql,
        sqlMessage: err.sqlMessage,
      });
    }
  });
}

// Função que cria um novo usuário
async function storeComentario(request, response) {
  // Preparar o comando de execução no banco
  const query =
    "INSERT INTO comentarios(descricao, id_usuario, id_post) VALUES(?, ?, ?);";

  // Recuperar os dados enviados na requisição
  const params = Array(
    request.body.descricao,
    request.body.id_usuario,
    request.body.id_post
  );

  // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
  connection.query(query, params, (err, results) => {
    try {
      if (results) {
        response.status(201).json({
          success: true,
          message: `Sucesso! Comentario cadastrado.`,
          data: results,
        });
      } else {
        response.status(400).json({
          success: false,
          message: `Não foi possível realizar o comentario. Verifique os dados informados`,
          query: err.sql,
          sqlMessage: err.sqlMessage,
        });
      }
    } catch (e) {
      // Caso aconteça algum erro na execução
      response.status(400).json({
        succes: false,
        message: "Ocorreu um erro. Não foi possível comentar!",
        query: err.sql,
        sqlMessage: err.sqlMessage,
      });
    }
  });
}

// Função que atualiza o usuário no banco
async function updateComentario(request, response) {
  // Preparar o comando de execução no banco
  const query = "UPDATE comentarios SET `descricao` = ?,  WHERE `id` = ?";

  // Recuperar os dados enviados na requisição respectivamente
  const params = Array(
    request.body.descricao,
    // request.body.imagem,
    request.params.id // Recebimento de parametro da rota
  );

  // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
  connection.query(query, params, (err, results) => {
    try {
      if (results) {
        response.status(200).json({
          success: true,
          message: `Sucesso! Comentario atualizado.`,
          data: results,
        });
      } else {
        response.status(400).json({
          success: false,
          message: `Não foi possível realizar a atualização. Verifique os dados informados`,
          query: err.sql,
          sqlMessage: err.sqlMessage,
        });
      }
    } catch (e) {
      // Caso aconteça algum erro na execução
      response.status(400).json({
        succes: false,
        message: "Ocorreu um erro. Não foi possível atualizar o comentário!",
        query: err.sql,
        sqlMessage: err.sqlMessage,
      });
    }
  });
}

// Função que remove usuário no banco
async function deleteComentario(request, response) {
  // Preparar o comando de execução no banco
  const query = "DELETE FROM comentarios WHERE `id` = ?";

  // Recebimento de parametro da rota
  const params = Array(request.params.id);

  // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
  connection.query(query, params, (err, results) => {
    try {
      if (results) {
        response.status(200).json({
          success: true,
          message: `Sucesso! Comentário deletado.`,
          data: results,
        });
      } else {
        response.status(400).json({
          success: false,
          message: `Não foi possível realizar a remoção. Verifique os dados informados`,
          query: err.sql,
          sqlMessage: err.sqlMessage,
        });
      }
    } catch (e) {
      // Caso aconteça algum erro na execução
      response.status(400).json({
        succes: false,
        message: "Ocorreu um erro. Não foi possível deletar o comentário!",
        query: err.sql,
        sqlMessage: err.sqlMessage,
      });
    }
  });
}

module.exports = {
  listComentarios,
  storeComentario,
  updateComentario,
  deleteComentario,
};
