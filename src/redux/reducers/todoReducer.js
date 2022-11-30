const initialData = {
  list: [],
  filterlist: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case 'ADD_TO_DO':
      const data = action.payload;
      console.log('[action]====>', action.payload);
      // var arr=[]
      // arr.push(data)
      // list:[
      //   ...state.list,
      //    {
      //        id:id,
      //        data:data
      //  }
      return {
        //...state,
        list: [...state.list, {...data}],
      };

    case 'DELETE_TO_DO':
      const newList = state.list.filter(temp => temp.id !== action.id);
      return {
        list: newList,
      };

    case 'EDIT_TO_DO':
      console.log('todo======>', action.payload);
      const todo = action.payload;
      const temp = [...state.list];
      let index = temp.findIndex(item => item.id === todo.id);
      console.log('temp==>', temp);
      if (index !== -1) {
        temp[index] = todo;
      }
      return {
        ...state,
        list: [...temp],
      };

    case 'FILTER_EMAIL_DO':
      //console.log('todo======>', action.payload);
      const elist = action.payload;
      console.log('[elist]==>', elist);
      const emaillist = [...state.list];
      let edata = emaillist.filter(item => item.email == elist);
      console.log('[edataaaa]===>', edata);
      return {
        list: [...edata],
      };

    case 'FILTER_NAME_DO':
      const unlist = action.payload;
      console.log('[unlist]====>', unlist);
      const userlist = [...state.list];
      let udata = userlist.filter(item => item.username == unlist);
      return {
        list: [...udata],
      };

    default:
      return state;
  }
};

export default todoReducers;
