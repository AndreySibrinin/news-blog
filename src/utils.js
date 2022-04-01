export const dataValidate = (data) =>{
        for (const str in data) {
                if( typeof data[str] !== 'string' || data[str].replaceAll(" ", "").length === 0){
                       return false;
                }
        }
        return true;
}