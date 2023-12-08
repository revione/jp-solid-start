import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Unit } from "../ModalData";

const initialOptions = {
  clientId: import.meta.env.VITE_ID_PP,
  currency: "USD",
  commit: true,
};

const PayPal = ({ unit }: { unit: Unit }) => {
  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        class="absolute h-[40px] opacity-[0.0001]  z-50"
        style={{ layout: "horizontal" }}
        createOrder={(_data, actions) =>
          actions.order.create({
            intent: "CAPTURE",
            purchase_units: [unit],
          })
        }
        onApprove={async (_data, actions) => {
          const order = await actions.order?.capture();
          console.log({ order });
        }}
        onError={(err) => {
          console.log({ err });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPal;
