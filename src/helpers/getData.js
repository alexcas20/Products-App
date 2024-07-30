import data from "../data/data.json";


export const getData = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(data);
        }, 500)
     
    })
}

export const getItemId = (id) => {
    return new Promise((resolve, reject) => {
        const item = data.find((el) => el.id  === id);
        

         (item) ? resolve(item) : reject({error: "No se encontro el producto"})
    })
}