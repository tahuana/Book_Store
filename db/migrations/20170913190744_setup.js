
exports.up = function(knex, Promise) {

  return Promise.all([

    knex.schema.createTable('books', function (table) {
      table.increments('id')
          .primary();
      table.string('title')
          .notNullable();
      table.float('width_inches',2,1);
      table.float('height_inches',2,1);
      table.float('depth_inches',2,1);
      table.integer('total_of_pages');
      table.date('published_date');
      table.integer('ISBN_10');
      table.integer('ISBN_13');
      table.timestamps();
    }),

    knex.schema.createTable('formats', function (table) {
      table.increments('id')
          .primary();
      table.string('format')
          .notNullable();
      table.timestamps();
    }),

    knex.schema.createTable('books_formats', function (table) {
      table.increments('id')
          .primary();
      table.integer('book_id')
          .notNullable()
          .references('id')
          .inTable('books')
          .onDelete("CASCADE");
      table.integer('format_id')
          .notNullable()
          .references('id')
          .inTable('formats');
      table.timestamps();
    }),

    knex.schema.createTable('publishers', function (table) {
      table.increments('id')
          .primary();
      table.string('publisher')
          .notNullable();
      table.timestamps();
    }),

    knex.schema.createTable('books_publishers', function (table) {
      table.increments('id')
          .primary();
      table.integer('book_id')
          .notNullable()
          .references('id')
          .inTable('books')
          .onDelete("CASCADE");
      table.integer('publisher_id')
          .notNullable()
          .references('id')
          .inTable('publishers');
      table.timestamps();
    }),

    knex.schema.createTable('languages', function (table) {
      table.increments('id')
          .primary();
      table.string('language')
          .notNullable();
      table.timestamps();
    }),

    knex.schema.createTable('books_languages', function (table) {
      table.increments('id')
          .primary();
      table.integer('book_id')
          .notNullable()
          .references('id')
          .inTable('books')
          .onDelete("CASCADE");
      table.integer('language_id')
          .notNullable()
          .references('id')
          .inTable('languages');
      table.timestamps();
    }),

    knex.schema.createTable('categories', function (table) {
      table.increments('id')
          .primary();
      table.string('category')
          .notNullable();
      table.timestamps();
    }),

    knex.schema.createTable('books_categories', function (table) {
      table.increments('id')
          .primary();
      table.integer('book_id')
          .notNullable()
          .references('id')
          .inTable('books')
          .onDelete("CASCADE");
      table.integer('categories_id')
          .notNullable()
          .references('id')
          .inTable('categories');
      table.timestamps();
    })

  ]);



};

exports.down = function(knex, Promise) {

  return Promise.all([

    knex.schema.dropTable('books'),
    knex.schema.dropTable('formats'),
    knex.schema.dropTable('books_formats'),
    knex.schema.dropTable('publishers'),
    knex.schema.dropTable('books_publishers'),
    knex.schema.dropTable('languages'),
    knex.schema.dropTable('books_languages'),
    knex.schema.dropTable('categories'),
    knex.schema.dropTable('books_categories')

  ]);

};
