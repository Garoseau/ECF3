const login = (email, password) => {
    if(email === "momo@gmail.com" && password === "123"){
        localStorage.setItem("token1254", Math.floor(Math.random()*10000));
        return true;
    }else{
        return false;
    }
}

const checkToken = ()=>{
    const token = localStorage.getItem('token1254');
    if(token){
        return true;
    }else{
        return false;
    }
}

const logout = () =>{
    localStorage.removeItem('token1254');
}

export default {
    login,
    checkToken,
    logout
}