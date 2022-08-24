const tarefaContext = {
  tarefaEndpoint: () => `https:/api-fake.herokuapp.com/tarefas`,
  tarefa: () => tarefaContext.tarefaEndpoint(),
  tarefaById: (id) => `${tarefaContext.tarefaEndpoint()}/${id}`,
};

const urls = {
  production: "https:/api-fake.herokuapp.com",
  development: "http://localhost:8000",
};
export const Api = {
  // baseUrl: "http://localhost:8000",
  baseUrl: "https:/api-fake.herokuapp.com",
  ...tarefaContext,
};
