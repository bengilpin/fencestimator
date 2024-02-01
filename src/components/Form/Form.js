import "./Form.scss";
import { useForm } from "react-hook-form";

function Form() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Length of your fence?"/>
            <input type="text" placeholder="Height of your fence?"/>
        </form>
    )
}

export default Form;