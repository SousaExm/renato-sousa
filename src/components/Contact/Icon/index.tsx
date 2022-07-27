import { ReactNode, useEffect, useRef, useState } from 'react'
import * as S from './styled'
import QRCode from 'qrcode'

interface ContatctIconProps {
  children: ReactNode;
  url: string;
  iconName: string;
}

export function Icon({iconName, children, url}:ContatctIconProps) {
  
  const [ isVisible, setIsVisible ] = useState<"visible" | "">("")
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
      QRCode.toCanvas(canvasRef.current , url , (error) => {
      console.log(error)
    })
  })
  
 
  function handleOpenQrCode () {
    setIsVisible("visible")
  }
  function handleCloseQrCode () {
    setIsVisible("")
  }
  
  return (
    <S.IconWrapper
    iconName={iconName}
    onMouseEnter={handleOpenQrCode}
    onMouseLeave={handleCloseQrCode}
    >
        {children}
        <S.QrCodeWrapper
        className={isVisible}
        >
          <p>Acesse meu <br/>{iconName}!</p> 
          <p>Escaneie o QR Code ou <a href={url} target='_blank' rel="noreferrer">clique aqui!</a>
          </p>
          <canvas ref={canvasRef} id='canvas'></canvas>
        </S.QrCodeWrapper>
    </S.IconWrapper> 
  )
}