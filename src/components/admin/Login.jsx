import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import LogServices from '../../services/LogServices';
import { maxWidth } from '@mui/system';
import Navbar from '../../components/Navbar';

const Login = () => {
    const initialState = { email: "", password: ""};
    const [user, setUser] = useState(initialState);
    const [msgErr, setMsgErr] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        let {name, value} = e.target;
        setUser({ ...user, [name]:value});
        console.log(user)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(LogServices.login(user.email, user.password)){
            navigate('/Admin');
        }else{
            setMsgErr("l'email et/ou le mot de passe ne correspondent pas");
        }
    }
  return (
    
    <div>

    <Navbar></Navbar>
    <div className='boxForm'>
		<form onSubmit = {handleSubmit} className="form">
		<div>                          
    <input 
		type="email" 
		className='form-control' 
    name="email" 
		id="email" 
		placeholder='Mail' 
    value={user.email} onChange = {handleChange}/>

		<input 
		type="password" 
		className='form-control' 
    name="password" 
		id="password" 
		placeholder='Password'
    value={user.password} onChange = {handleChange}/>
    </div>

		<div class="form">
			<input type="submit" value="submit"/>
		</div>
		</form>
    </div>
		</div>

	)} 
	export default Login;