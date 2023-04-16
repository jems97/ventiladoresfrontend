import Page from "@/components/Page";
import { SignUpFormUX } from "./SignupFormUX";
import { FC, useState } from "react";
import { useSignupMutation } from '@/store/services/secServices';
import { useNavigate, useParams } from "react-router-dom";

export const SignUp: FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [newUsuario] = useSignupMutation();
    const [passwordError, setPasswordError] = useState('');
    const onChangeHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const { name, value } = event.target;
        switch (name) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPass(value);
                break;
            default:
                break;
        }
    };
    const onClickHandler = async () => {
        if (!(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm).test(password)) {
            console.log("Signup", "Password is valid");
            setPasswordError("Password is not valid");
        } else {
            const result = await newUsuario({ email, password }).unwrap();
            console.log(result);
            navigate("/login");
        }
    }
    return <SignUpFormUX
        email={email}
        password={password}
        onChangeHandler={onChangeHandler}
        onClickHandler={onClickHandler}
    />;
};

export default SignUp;