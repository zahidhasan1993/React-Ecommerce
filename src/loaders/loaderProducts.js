import { getShoppingCart } from "../utilities/fakedb";

const loadProducts = async() =>{
    const loadedProducts = await fetch('http://localhost:5000/products');
    const products = await loadedProducts.json();

    //get data from localStorage
    const storedDataLocal = getShoppingCart();
    const savedCart = [];

    for(const id in storedDataLocal){
        const addedProduct = products.find(pd => pd.id === id);
        const localQuantity = storedDataLocal[id];
        if(addedProduct){
            addedProduct.quantity = localQuantity;
            savedCart.push(addedProduct);
        }
    }
    // console.log(savedCart);
    return savedCart;
}


export default loadProducts;