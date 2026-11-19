let previewImage = document.getElementById("previewImage") ;

let blurs = document.getElementById("blur") ;
let brightness = document.getElementById("brightness") ;
let contrast = document.getElementById("contrast") ;
let grayscale = document.getElementById("grayscale") ;
let sepia = document.getElementById("sepia") ;
let hue = document.getElementById("hue") ;
let saturate = document.getElementById("saturate") ;
let opacity = document.getElementById("opacity") ;

let cssCode = document.getElementById("cssCode") ;
let copyBtn = document.getElementById("copyBtn") ;

function filterGenerator() {

    let bl = blurs.value ;
    let br = brightness.value ;
    let con = contrast.value ;
    let gray = grayscale.value ;
    let sep = sepia.value ;
    let hu = hue.value ;
    let sat = saturate.value ;
    let opa = opacity.value ;

    let filter = `blur(${bl}px) brightness(${br}%) contrast(${con}%) grayscale(${gray}%) sepia(${sep}%) hue-rotate(${hu}deg) saturate(${sat}%) opacity(${opa}%)` ;

    previewImage.style.filter = filter ;

    cssCode.innerText = `filter: ${filter};` ;

    
}

blurs.addEventListener("input" , filterGenerator) ;
brightness.addEventListener("input" , filterGenerator) ;
contrast.addEventListener("input" , filterGenerator) ;
grayscale.addEventListener("input" , filterGenerator) ;
sepia.addEventListener("input" , filterGenerator) ;
hue.addEventListener("input" , filterGenerator) ;
saturate.addEventListener("input" , filterGenerator) ;
opacity.addEventListener("input" , filterGenerator) ;


filterGenerator() ;

copyBtn.addEventListener("click", function(){

    navigator.clipboard.writeText(cssCode.innerText);

       Swal.fire({
        title: "Copied!",
        text: "CSS Code successfully copied to clipboard",
        icon: "success",
        confirmButtonText: "OK"
    });
    
});

