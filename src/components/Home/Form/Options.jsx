import { useState, useContext } from 'react'
import { useFormContext, useWatch } from "react-hook-form";
import InfoContext from '../../../context/InfoContext'

import './Options.style.scss'

const Options = ({labelTxt, options, regi, values}) => {

  // data and functions from contexts
  const { formKeys, handleFormKeys } = useContext(InfoContext)
  const { watch, register, unregister, reset, resetField, formState: { errors } } = useFormContext()

  const reg = labelTxt.toLowerCase()
  
  const triggerOpt = (e) => {

    handleFormKeys({ [options]: true })
    
  }
  
  const optIsChecked = formKeys[options]

  const error = errors[reg]

  const renderOptions = Object.keys(values).map(key => 
  <option key={key} value={key}>{values[key]}</option>
  )


  return (
  <div className='options-container' onChange={triggerOpt} >
      <label>
        {labelTxt}
        <input  type="radio" value={labelTxt} name='label' />
        {/* {...register('end', { required: true, shouldUnregister: true, })} */}
      </label>
      {
        optIsChecked &&
        <>
          {error && <span>LOL</span>}
          <select { ...register(reg, { required: true, shouldUnregister: true, }) } >
            <option value=''>Select...</option>
          
            { renderOptions }

          </select>
        </>
      }
  </div>
  )
}

export default Options
