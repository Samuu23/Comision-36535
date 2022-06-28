const knexLib = require('knex')

class ClientSQL {
  constructor(config) {
    this.knex = knexLib(config)
  }

  createTabla() {
    return this.knex.schema.dropTableIfExists('articles')
      .finally(() => {
        return this.knex.schema.createTable('articles', table => {
          table.increments('id').primary();
          table.string('name', 50).notNullable();
          table.string('code', 10).notNullable();
          table.float('price');
          table.integer('stock');
        })
      })
  }

  insertArticles(articles) {
    return this.knex('articles').insert(articles)
  }

  listArticles() {
    return this.knex('articles').select('*')
  }

  deleteArticleById(id) {
    return this.knex.from('articles').where('id', id).del()
  }

  updateStockById(stock, id) {
    return this.knex.from('articles').where('id', id).update({ stock: stock })
  }

  close() {
    this.knex.destroy();
  }
}

module.exports = ClientSQL
