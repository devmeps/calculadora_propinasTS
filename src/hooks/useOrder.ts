import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item : MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if (itemExist)  {
            const updateOrder = order.map (orderItem => orderItem.id === item.id ? 
                { ...orderItem, quantity: orderItem.quantity + 1 } : 
                orderItem
            )
            setOrder(updateOrder)
        } else {
            const newItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id: number) => {
        const updateOrder = order.map(orderItem => orderItem.id === id ? 
            { ...orderItem, quantity: orderItem.quantity - 1 } : 
            orderItem
        ).filter(orderItem => orderItem.quantity > 0)
        setOrder(updateOrder)
    }


    return {
        order,
        addItem,
        removeItem
    }   
}