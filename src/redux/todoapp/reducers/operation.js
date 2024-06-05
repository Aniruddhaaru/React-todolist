import { ADD_TODO, DELETE_ALL, REMOVE_TODO, UPDATE_CHECKBOX, UPDATE_TODO } from "../action";

const initialState = [
    { id: 1, todo: 'Buy Laptop', completed: false },
    { id: 2, todo: 'Buy Mobile', completed: false },
    { id: 3, todo: 'Buy Watch', completed: true },
];

export const operationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_ALL:
            return [];
        case REMOVE_TODO:
            const filteredTodos = state.filter((todo) => todo.id !== action.payload);
            return filteredTodos;
        case UPDATE_TODO:
            const updatedArray = state.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        todo: action.payload.todo,
                        completed: action.payload.completed
                    };
                }
                return item;
            });
            return updatedArray;

        case UPDATE_CHECKBOX:
            const todoArray = state.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        completed: !item.completed
                    };
                }
                return item;
            });
            return todoArray;

        default:
            return state;
    }
}
