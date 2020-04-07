
const LocalStorageOperations=()=> {

    const myStorage = window.localStorage;

    const create = (data,key) =>{
        myStorage.setItem(key,data);
        console.log(`Item Saved: ${data}`)
    };

    const read = (key) =>{
        let item = myStorage.getItem(key);
        return JSON.parse(item)
    };

    const del = (key) =>{
        myStorage.removeItem(key);
        console.log(`Item deleted for key: ${key}`)
    };

    const clear = () =>{
      myStorage.clear();
        console.log("LocalStorage Cleared")
    };

    return {
        create,
        read,
        del,
        clear
    }
};

export default LocalStorageOperations
