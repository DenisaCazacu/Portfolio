import React from 'react'
import "./ButtonsStyle.css"

export const DownloadButton = () => {
    const downloadPdfFile = () => {
        
        const element = document.createElement("a");
        element.href = "http://localhost:3000/Denisa_Cazacu_Resume.pdf";
        element.download = "Denisa_Cazacu_Resume.pdf";
        document.body.appendChild(element); 
        element.click();
    }
  return (
    <div className='download-button'>
       Download Resume
       <button class="Btn" onClick={downloadPdfFile}>
            <svg class="svgIcon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
            <span class="icon2"></span>
            <span class="tooltip">Download</span>
        </button>
    </div>
  )
}
export default DownloadButton;
