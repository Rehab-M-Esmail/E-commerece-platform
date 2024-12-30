import React from 'react'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../custom_styles/style.css'

export default function Confirmation() {
  return (
    <div className="container pt-5"> 
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <div className='mb-4 text-center'>
            <i className="fa-solid fa-credit-card fa-2x mb-3"></i> 
            <h6 className='h1'>Payment Completed</h6>
          </div>
          <div className="mb-4 p-3 rounded">
            <div className='card'>
              <div className='card-body'>
                <h4 className="mb-3">Transaction details</h4>
                <table className="table table-borderless">
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
          </div>
          <div className="text-center">
            <button className='btn btn-primary'>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  )
}