import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

const usePrint = () => {
  const printRef = useRef(null)

  const handlePrint = useReactToPrint({
    content: () => printRef.current
  })
  return { printRef, handlePrint }
}

export default usePrint
