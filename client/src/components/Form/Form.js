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
    console.log("submitting data:", data)
  navigate('/estimator', {state: {formData: data}});
  };

  return (
    <div className="form-container">
    <form className="form-container__form" onSubmit={handleSubmit(onSubmit)}>
      <input className="form-container__form--length"
        type="text"
        placeholder="Length of your fence?"
        {...register("length")}
      />
      <p>{errors.length?.message}</p>
      <input className="form-container__form--height"
        type="text"
        placeholder="Height of your fence?"
        {...register("height")}
      />
      <p>{errors.height?.message}</p>
      <input className="form-container__form--btn" type="submit" placeholder="Fence math!" />
    </form>
    
    </div>
  );
}

export default Form;
