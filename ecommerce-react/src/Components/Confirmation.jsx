import React from 'react'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../custom_styles/style.css'
export default function Confirmation() {
  return (
    <>
    <div className='mb-4'>
    <i className="fa-solid fa-credit-card"></i>    
    <h6 className='h1'>Payment Completed</h6>
    </div>
    <div className="mb-4 p-3 rounded">
      <div className='card'>
  <h5 className="mb-3">Transaction details</h5>
  <table className=" table table-borderless">
    <tbody>
      <tr>
        <th scope="row" className="text-muted text-th">Date</th>
        <td className="text-end text-td">07/10/2024</td>
      </tr>
      <tr>
        <th scope="row" className="text-muted text-th">Payment Method</th>
        <td className="text-end text-td">Google Pay</td>
      </tr>
      <tr>
        <th scope="row" className="text-muted text-th">Total</th>
        <td className="text-end text-td">$480</td>
      </tr>
      <tr>
        <th scope="row" className="text-muted text-th">Email</th>
        <td className="text-end text-td">kc@cactus.co</td>
      </tr>
    </tbody>
  </table>
</div>
</div>
<button className='btn btn-primary'>Confirm</button>
    </>
  )
}
