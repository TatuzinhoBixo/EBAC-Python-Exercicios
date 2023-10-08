$(document).ready(function () {
    $('#caroussel').slick({
        autoplay: true,
        arrows: false
    });

    $('.hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')
    
    $('form').validate ({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            pet: {
                required: true,
            }
        },
        SubmitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Exietem ${camposIncorretos} campos incorretos`)
            }
        }    
    })    

    $('.lista-adocao button').click(function() {
        const destino = $('#contato');

        const nomePet = ($(this).parent().find('h3').text());
        
        $(`#pet`).val(nomePet);

        $('html').animate({
            scrollTop: destino.offset().scrollTop
        }, 1000)
        })
})