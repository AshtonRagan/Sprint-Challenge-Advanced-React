


const useLocalStorage = (key,initvalue) =>{
    if(localStorage.getItem(key)){
        return JSON.parse(localStorage.getItem(key))
    }else{
        localStorage.setItem(key, JSON.stringify(initvalue))
    }
} 
export default useLocalStorage