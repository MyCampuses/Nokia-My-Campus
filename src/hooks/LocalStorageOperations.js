

// Functions used with Local storage
const LocalStorageOperations=()=> {

    const myStorage = window.localStorage;

    /* 
    Add a new data,key value
    the data key is the value that will be saved and
    key will be the name of the data
    */
    const create = (data,key) =>{
        myStorage.setItem(key,data);
    };

    // Get an item/data corresponding the key
    const read = (key) =>{
        let item = myStorage.getItem(key);
        return JSON.parse(item)
    };

    const del = (key) =>{
        myStorage.removeItem(key);
    };

    const clear = () =>{
      myStorage.clear();
    };

    const loadState = () => {
        try {
            const serializedState = read('states');
            if (serializedState === null) return undefined;
            return serializedState;
        } catch (err) {
            return undefined;
        };
    };
    
    const saveState = (state) => {
        try {
            const serializedState = JSON.stringify(state);
            create( serializedState, 'states');
        } catch(err) {
            console.log(err);
          };
    };

    return {
        create,
        read,
        del,
        clear,
        loadState,
        saveState
    }
};

export default LocalStorageOperations
