function Validate()
{
    let name            = document.getElementById('name').value;
    let email           = document.getElementById('email').value;
    let fone            = document.getElementById('fone').value;
    let date            = document.getElementById('date').value;
    let cpf             = document.getElementById('cpf').value;
    let state           = document.getElementById('state').value;
    let city            = document.getElementById('city').value;
    let neighbourhood   = document.getElementById('neighbourhood').value;
    let street          = document.getElementById('street').value;
    let number          = document.getElementById('number').value;
    let more            = document.getElementById('more').value;
    let password        = document.getElementById('password').value;
    let passwordconfirm = document.getElementById('passwordconfirm').value;

    if (!name || !email || !fone || !date || !cpf || !state || !city || !neighbourhood || !street || !number || !password || !passwordconfirm)
    {
        alert("Preencha todos os campos obrigatórios!");
    } else 
    {
        alert("Cadastro efetuado com sucesso!")
    }
}