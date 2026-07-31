const batchGetUsers = async (ids: readonly string[]) => {
  const users = await db.users.findMany({ where: { id: { in: ids } } });
  return ids.map(
    (id) => users.find((u) => u.id === id) ?? new Error(`User ${id} not found`),
  );
};
const userLoader = new DataLoader(batchGetUsers);
