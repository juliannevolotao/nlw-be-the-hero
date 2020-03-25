
exports.up = function(knex) {
    // up responsavel pela criação da tabela
    return knex.schema.createTable('ongs', function (table) {
      table.string('id').primary();
      table.string('name').notNullable();   
      table.string('email').notNullable();   
      table.string('whatsapp').notNullable();   
      table.string('city').notNullable();   
      table.string('uf', 2).notNullable();  // o numero 2 pois temos certeza que o tamanho do texto será de 2 letras
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs'); // geralmente para deletar a tabela
  // npx knex migrate:rollback (desfaz a ultima vez que você executou o comando migrate:latest)
};
