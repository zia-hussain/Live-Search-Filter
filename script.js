// const users = document.getElementById('user-list');
const user = document.querySelector('.user-list')
const userName = document.getElementById('user')

const getUserData = async()=>{

    try{
const res = await fetch('https://api.github.com/users')
const data =await res.json();
console.log(data);

data.map((user) => {
    const li = document.createElement("li");

    li.insertAdjacentHTML
})
    }

    catch(e){
console.log(e)
    }
}

getUserData()