import { formatCurrency } from '../helpers'
import { OrderItem } from '../types'


type OrderContentsProps = {
  order: OrderItem[],
  removeItem: () => void
}


export default function OrderContents({ order, removeItem }: OrderContentsProps) {
  return (
    <div>
        <h2 className="text-4xl font-black text-center">Consumo</h2>
        <div className="space-y-3 mt-10">
        {order.length === 0 ?
            <p className='text-center'>La Orden esta vacia</p> :
            order.map(item => (
                <div key = {item.id}
                className="flex justify-between items-center border-t border-gray-200 p-y-5 last-of-type:border-b"
                >
                  <div>
                  <p className="text-lg">
                    {item.name} - {formatCurrency( item.price)}
                    </p>
                    <p className="font-black">
                      Cantidad: {item.quantity} - Total: {formatCurrency(item.price * item.quantity)}
                      </p>
                      </div>
                      <button 
                      className="bg-red-600 text-white px-3 py-1 rounded-full h-8 w-8 " onClick={() => 
                      removeItem()}>
                        x
                        </button>
                </div>
            ))
        }
    </div>    
    </div>
  )
}
