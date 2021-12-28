
document.getElementById('button-input').addEventListener(
  'click', () => {

    
    let email = document.querySelector('#email-input').value
    if(email){
      alert(email)
    }else{
      alert('Preencha o Email')
    }
    
  }
)