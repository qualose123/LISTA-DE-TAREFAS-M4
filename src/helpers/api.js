const tarefaContext = {
  tarefaEndpoint: () => `${Api.baseUrl}/tarefas`,
  tarefa: () => tarefaContext.tarefaEndpoint(),
  tarefaById: (id) => `${tarefaContext.tarefaEndpoint()}/${id}`,
};

const urls = {
  production: "https:/api-fake.herokuapp.com",
  development: "http://localhost:8000",
};
export const Api = {
  // baseUrl: "http://localhost:8000",
  baseUrl: urls[process.env.NODE_ENV],
  ...tarefaContext,
};
