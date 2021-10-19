import React from 'react'
import {Tooltip,Button,OverlayTrigger}from 'react-bootstrap'
export default function BootsrapToltips() {
    return (
        <div className="my-Tooltip">
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>
            <span className="d-inline-block">
            <Button disabled style={{ pointerEvents: 'none' }}>
             Disabled button
           </Button>
            </span>     
            </OverlayTrigger>
        
  
                  </div>
    )
}
