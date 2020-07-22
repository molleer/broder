/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("refueling", {
    id: "id",
    user: {
      type: "text",
      notNull: true,
    },
    cost_sek: {
      type: "double",
      notNull: true,
    },
    amount_liters: {
      type: "double",
      notNull: true,
    },
    timestamp: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });

  pgm.createTable("driving", {
    id: "id",
    user: {
      type: "string",
      notNull: true,
    },
    distance_nm: {
      type: "double",
      notNull: true,
    },
    timestamp: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
};

exports.down = (pgm) => {};
