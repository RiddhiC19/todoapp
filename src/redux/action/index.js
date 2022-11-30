export const addTodo = data => {
  return {
    type: 'ADD_TO_DO',
    payload:
      //id:new Date().getTime().toString(),
      data,
  };
};

export const deleteTodo = id => {
  return {
    type: 'DELETE_TO_DO',
    id,
  };
};

export const edittodo = data => {
  console.log('edit called from action', data);
  return {
    type: 'EDIT_TO_DO',
    payload: data,
  };
};

export const filterEmailtodo = data => {
  return {
    type: 'FILTER_EMAIL_DO',
    payload: data,
  };
};

export const filterUsertodo = data => {
  return {
    type: 'FILTER_NAME_DO',
    payload: data,
  };
};
