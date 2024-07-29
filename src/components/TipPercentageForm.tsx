import { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

  type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>
    tip: number
  }

export default function TipPercentageForm({ setTip, tip }: TipPercentageFormProps) {
  return (
    <div>
        <h3 className = "font-black text-2xl">Propina: </h3>
        <form>
            {tipOptions.map(tipOptions => (
                <div key={tipOptions.id}>
                    <label htmlFor={tipOptions.id}>{tipOptions.label}</label>
                    <input type="radio" 
                    id={tipOptions.id} name="tip" 
                    onChange={ e => setTip(+e.target.value)}
                    value={tipOptions.value}
                    checked={tipOptions.value=== tip} /> 
                    
                </div>
            ))}
        </form>
    </div>
  )
}
