import React from 'react'
import { LateralMenu } from '../../components/Web/Menu'
import { BarraMenu } from '../../components/Web/Menu'

export function ClientLayout({children}) {
  return (
    <div className="section" >
                <div className="row" class="fixed-top">
                    <BarraMenu />
                </div>
         
                   <div className="row">
            <div className="col-2 p-5">
            <LateralMenu />
            </div>
            <div className="col-10">
            {children}
            </div>
        </div>
        </div>
    )
  
}
