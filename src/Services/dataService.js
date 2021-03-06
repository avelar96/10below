import axios from 'axios';



var catalog = [
    {
        _id: "11111",
        title: "book",
        image: 'https://media.istockphoto.com/photos/blue-book-picture-id1281955543?b=1&k=20&m=1281955543&s=170667a&w=0&h=ZmwacrjQewEU3RqJLYufA-Bi7JVOI2JgcB8X0o7vPeI=',
        price:10,
        category: "Books",
        stock: 24,
        minimum: 1,

    },
    {
    _id: "22222",
        title : "Pen",
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOHPPA3UY9PiIK4mBwAhfBjOqD77zQ9EdAWQ&usqp=CAU',
        price: 2.00,
        category : "Pens",
        stock: 34,
        minimum : 2,
    },
    {
    _id: "33333",
        title : "Pencil",
        image : 'https://weareticonderoga.com/wp-content/uploads/2019/06/e9vvon5h6m9aqoyf7oxe-1.jpg',
        price: 20.00,
        category : "Pencils",
        stock: 34,
        minimum : 5,
    },
    {
    _id: "4444",
        title : "paper",
        image : 'https://neal.fun/paper/paper.jpg',
        price: 20.00,
        category : "Paper",
        stock: 34,
        minimum : 1,
    },

];

class DataService {
    async getCatalog() {
        // call the server to get catalog
        //let res= await axios.get ("http://127.0.0.1:5000/api/catalog");
        //console.log(res);
        //return res.data;// an array of objects
        
        //return mock data (temporal)
        return catalog;
    }

    //get categories
    // http://127.0.0.1:5000/api/catagories
    async getCategories() {
    let res = await axios.get ("http://127.0.0.1:5000/api/categories");
    console.log(res)
    return res.data;
    }

    async saveProduct(prod){
        let res = await axios.post("http://127.0.0.1:5000/api/catalog",prod)
        console.log("saving result",res.data);
        return res.data;
    }
    

    saveItem() {}

    saveOrder() {}
}

export default DataService;