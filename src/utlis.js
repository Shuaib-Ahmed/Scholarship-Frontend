import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const BaseUrl = `http://localhost:5000/api/v1`;

export const getFormData = (form) => {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  return { data };
};

export const successNotification = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const errorNotification = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
