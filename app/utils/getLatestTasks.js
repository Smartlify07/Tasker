export const getLatestTasks = (todos) => {
  const latestTodos = todos
    .sort((a, b) => b.dateCreated - a.dateCreated)
    .map((todo) => todo)
    .slice(0, 6);
  return latestTodos;
};
