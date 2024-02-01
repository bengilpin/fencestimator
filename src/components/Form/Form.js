import "./Form.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate} from "react-router-dom";

function Form() {
  const schema = yup.object().shape({
    length: yup
      .number()
      .typeError("Length must be a positive number only with no letters.")
      .positive("Length must be a positive number.")
      .required("Length is required."),
    height: yup
      .number()
      .typeError("Height must be a positive number only with no letters.")
      .positive("Height must be a positive number.")
      .required(
        "Height is required."
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data)
  navigate('/estimator', {state: {formData: data}});
  };

  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Length of your fence?"
        {...register("length")}
      />
      <p>{errors.length?.message}</p>
      <input
        type="text"
        placeholder="Height of your fence?"
        {...register("height")}
      />
      <p>{errors.height?.message}</p>
      <input type="submit" />
    </form>
    
    </div>
  );
}

export default Form;
