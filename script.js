// let imgBox=document.getElementById('imgBox');
//         let qrText=document.getElementById('qrText');
//         let qrImage=document.getElementById('qrImage');

//         function generateQr() {
//             if(qrText.value.length >0){
//                 qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
//             imgBox.classList.add("show-img");

//             }
//             else{
//                 qrText.classList.add("error");
//             }setTimeout(()=> {
//                 qrText.classList.remove("error");
//             } ,1000)
            
         
//         };
let imgBox = document.getElementById('imgBox');
let qrText = document.getElementById('qrText');
let qrImage = document.getElementById('qrImage');

function generateQr() {
    if (qrText.value.length > 0) {
        let imageUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
        
        // Log the generated URL for debugging
        console.log("Generated QR Code URL:", imageUrl);

        qrImage.src = imageUrl;
        imgBox.classList.add("show-img");
    } else {
        qrText.classList.add("error");
    }

    setTimeout(() => {
        qrText.classList.remove("error");
    }, 1000);
}
