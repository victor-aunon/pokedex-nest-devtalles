export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongoUri: process.env.MONGO_URI,
  port: process.env.PORT || 3001,
  paginationLimit: Number(process.env.PAGINATION_LIMIT) || 20,
});
