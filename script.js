/*Trocar meno para X*/
const menuHamburger = document.querySelector('.menu-hamburger')
menuHamburger.addEventListener('click', () => {
    toggtleMenu();
});


function toggtleMenu( ) {
    const nav = document.querySelector('.nav-responsive');
    menuHamburger.classList.toggle('change');

    if (menuHamburger.classList.contains('change')) {
        nav.style.display = 'block';
    }else{
        nav.style.display = 'none';
    }
}


document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'pdf/cv.pdf';  
    link.download = 'cv.pdf';  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


document.querySelectorAll('.ler-mais').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const content = button.previousElementSibling;
      content.classList.toggle('expanded');
      button.textContent = content.classList.contains('expanded') ? 'Leia Menos' : 'Leia Mais';
    });
  });

  
  //==============Enviar Mensagem============================
  document.getElementById('enviarMensagem').addEventListener('click', async function(event) {
    event.preventDefault();

    const form = document.querySelector('form');
    const formData = new FormData(form);

    formData.append("access_key", "8c17a9b0-db73-48c5-bb01-c42998ef8c06");


    const object = Object.fromEntries(formData);

    const json = JSON.stringify(object);

    try {

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

    
        if (res.success) {
            console.log("Success", res);

          
            form.reset();

            alert("Sua mensagem foi enviada com sucesso!");

        } else {
            console.error("Error:", res.message);
            alert("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        alert("Ocorreu um erro inesperado. Por favor, tente novamente.");
    }
});
