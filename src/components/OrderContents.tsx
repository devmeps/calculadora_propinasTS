import { formatCurrency } from '../helpers'
import { OrderItem } from '../types'

type OrderContentsProps = {
  order: OrderItem[]
}


export default function OrderContents({ order }: OrderContentsProps) {
  return (
    <div>
        <h2 className="text-4xl font-black text-center">Consumo</h2>
        <div className="space-y-3 mt-10">
        {order.length === 0 ?
            <p className='text-center'>La Orden esta vacia</p> :
            order.map(item => (
                <div key = {item.id}>
                  <p className="text-lg">
                    {item.name} - {formatCurrency( item.price)}
                    </p>
                    <p className="font-black">
                      Cantidad: {item.quantity} - Total: {formatCurrency(item.price * item.quantity)}
                      </p>
                      <button className="bg-red-500 text-white px-3 py-1 rounded-lg" onClick={() => console.log('remove item')}>
                        Remover
                        </button>
                </div>
            ))
        }
    </div>    
    </div>
  )
}
