const getPost = async() => {
    
    const random = Math.random() * 10;
    const number = Math.floor(random) + 1;

    const url = `https://jsonplaceholder.typicode.com/posts/${number}`;
    
    const res = await fetch(url);
    const data = await res.json();

    return data;
}

export default getPost;
