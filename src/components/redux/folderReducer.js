const initialState ={
    folders: []
};

const folderReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'ADD_FOLDER' :
            return {...state, folders: [...state.folders, action.payload]};
            default:
                return state;
    }
};

export default folderReducer;