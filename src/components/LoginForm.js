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
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				 name="userName" 
				 placeholder="Username..." 
				 ref={register({ 
				 	required: true,

				 })} />
			{errors.userName && <p>{errors.userName.message}</p>}
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
			<input type="submit"/>
		</form>
		</>
	);
}

export default LoginForm;
