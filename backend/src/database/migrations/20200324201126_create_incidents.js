
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table) {
    table.increments();
    table.string('title').notNullable(); // não pode ser vazio
    table.string('description').notNullable(); // não pode ser vazio
    table.decimal('value').notNullable(); // não pode ser vazio
    table.string('ong_id').notNullable();

    table.foreign('ong_id').references('id').inTable('ongs'); // chave estrangeira, pegando la da tabela de ongs
    // todo incident (caso), tem que ser criado por uma ong
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
  // npx knex migrate:rollback (desfaz a ultima vez que você executou o comando migrate:latest)
};
