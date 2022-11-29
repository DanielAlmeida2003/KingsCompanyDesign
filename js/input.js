const floatField = document.querySelectorAll('#floatField');

const floatContainer = document.querySelectorAll('#floatContainer');
var i = 0;


window.addEventListener("load", ()=>{
  for (const field of floatField) {

    let float = floatContainer[i];

    field.addEventListener('focus', () => {

      float.classList.add('active');
      float.style = "border:1px solid #b9963e;";
    
    });
    
    field.addEventListener('blur', () => {
    
      float.style = "border:1px solid #353434;";
    
        if (field.value == "")
        {
            float.classList.remove('active');
        }
    });

    i = i + 1;

}

})




    

