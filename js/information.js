function send(){
   var name = document.getElementById('name');
   var phone = document.getElementById('phone');
   var content = document.getElementById('content');
    var submit = document.getElementById('submit');
    submit.addEventListener('submit',(e)=>{
        let messager =[]
        if(name.value === ''||name.value==null){
            alert('Name is required')
            return;
        }
        if(phone.value.length<=0){
            alert('Phone number must have at least 10 characters')
            return;
        }
        if(phone.value.length>10){
            alert('Phone number must not exceed 10 characters')
            return;
        }
        if(messager.length>0){
            e.preventDefault();
            errorElement.innerText = messager.join(',')
        }
        if(content.value === ''||content.value==null){
            alert('content is required')
            return;
        }

        e.preventDefault();
    })
}