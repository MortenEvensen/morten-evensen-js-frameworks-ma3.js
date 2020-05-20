import React from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup";


const schema = yup.object().shape({
    userName: yup.string().required("Username is required"),
    password: yup.string().min(4, "Password is required, and must contain minimum 4 characters")
        

});

function LoginForm() {
	
	const { register, handleSubmit, errors } = useForm({
		validationSchema: schema
	});

	function onSubmit(data) {
		console.log("data", data);
	}

	return (
		<>
		<h2>This is how you can log in. What you write will be logged in the console</h2>
		<form onSubmit={handleSubmit(onSubmit)}>
			<label for="userName">User Name: </label>
			<input
				 name="userName" 
				 placeholder="Username..." 
				 ref={register({ 
				 	required: true,

				 })} />
			{errors.userName && <p>{errors.userName.message}</p>}
			<br />
			<label for="password">Password: </label>
			<input 
				name="password" 
				placeholder="Password..." 
				ref={register({ 
					min: {
						value: 4,
						message: "error"
					}
				})
			} />
			
			{errors.password && <p>{errors.password.message}</p>}
			<br />
			<input type="submit"/>
		</form>
		</>
	);
}

export default LoginForm;
