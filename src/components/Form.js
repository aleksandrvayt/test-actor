import React, {useState} from 'react'

export const Form = ({ onCreate }) => {
    const[value,setValue] = useState('')
  
        function submitHandler(event) {
          event.preventDefault()
      
          if (value.trim()) {
            onCreate(value)
            setValue('')
          }
        }
    
    return (
        <form onSubmit={submitHandler} className="widthContent">
            
            <div className="form-group m-3">
                <input 
                type="text" 
                className="form-control"
                placeholder="Введите имя актера"
                value={value}
                onChange={e => setValue(e.target.value)}
                />
                <button type="submit" className="m-1 btn btn-success">Добавить актера</button>
            </div>
        </form>
    )
}
