// Functions used with Local storage
const LocalStorageOperations=()=> {

    const myStorage = window.localStorage;

    // Add a new data,key value
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

    return {
        create,
        read,
        del,
        clear
    }
};

export default LocalStorageOperations
