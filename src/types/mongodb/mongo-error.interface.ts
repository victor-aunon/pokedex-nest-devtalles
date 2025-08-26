export interface MongoError extends Error {
  code: number;
  keyValue: object;
}
