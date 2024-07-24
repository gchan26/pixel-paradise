import { useCart } from "../contexts/CartContext";

const Toast = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-0 right-0 m-4 z-50">
      <div className="alert alert-success">
        <div>
          <span>{toastMessage}</span>
        </div>
      </div>
    </div>
  );
};

export default Toast;