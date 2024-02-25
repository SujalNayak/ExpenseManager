import { Html5Qrcode, Html5QrcodeScanner } from 'html5-qrcode'
import React, { useEffect, useState } from 'react'

export const QrCodeScanner = () => {
    const [result, setresult] = useState()
 
    useEffect(() => {
      
        const scanner = new Html5QrcodeScanner('reader',{
            qrbox:{
                width:100,
                height:100
            },
            fps:10
        })
        scanner.render(success,error)
        function success(data){
            console.log(data)
            scanner.clear()
            setresult(data)
        }
        function error(error){
    
                console.log(error)
        }
      
    }, [])
    
  return (
    <div>
        <h1>QR SCANNER</h1>
        <div id="reader">
            
        </div>
    </div>
  )
}