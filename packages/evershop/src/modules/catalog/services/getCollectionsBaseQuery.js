const { select } = require('@annapoorani/postgres-query-builder');

module.exports.getCollectionsBaseQuery = () => {
  const query = select().from('collection');
  return query;
};
