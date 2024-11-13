import Image from "next/image";
import img from '../../../public/assets/icons/trolley_9710589.png'
const OrderPlaced = () => {
  return (
    <>
      <section className="mainContainer pt-32 pb-10 flex flex-col gap-8">
        <h3 className="text-center text-3xl font-medium">Thank you, Fazin Your order has been placed.</h3>
        <div className="max-w-80 mx-auto">
            <Image src={img} alt="order-success"/>
        </div>
        <button className="bg-black text-white mx-auto p-5 rounded-md hover:bg-slate-400 transition-all">Back to Home Page</button>
      </section>
    </>
  );
};

export default OrderPlaced;
