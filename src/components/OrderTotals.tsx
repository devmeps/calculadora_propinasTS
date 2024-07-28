import { OrderItem } from "../types/";

type OrderTotalsProps = {
    order: OrderItem[]
}


export default function OrderTotals({order}: OrderTotalsProps) {
  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl" >Totales y Propina</h2>
            <p>Subtotal a Pagar: 
                <span className="font-bold"> $0.00</span>
            </p>
            <p>Propina: 
                <span className="font-bold"> $0.00</span>
            </p>
            <p>Total a Pagar: 
                <span className="font-bold"> $0.00</span>
            </p>



        </div>

        <button>

        </button>

    </>
  )
}
