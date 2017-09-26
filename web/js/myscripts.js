/* 
 * EEEEEOOOOOOOQQ?????
 */

function mascara(t, mask) {
    var i = t.value.length;
    var saida = mask.substring(1, 0);
    var texto = mask.substring(i)
    if (texto.substring(0, 1) != saida) {
        t.value += texto.substring(0, 1);
    }
}

function SomenteNumero(e) {
    var tecla = (window.event) ? event.keyCode : e.which;
    if ((tecla > 47 && tecla < 58))
        return true;
    else {
        if (tecla == 8 || tecla == 0)
            return true;
        else
            return false;
    }
}


function maskCPF(CPF) {
    var evt = window.event;
    kcode = evt.keyCode;
    if (kcode == 8)
        return;
    if (CPF.value.length == 3) {
        CPF.value = CPF.value + '.';
    }
    if (CPF.value.length == 7) {
        CPF.value = CPF.value + '.';
    }
    if (CPF.value.length == 11) {
        CPF.value = CPF.value + '-';
    }
}

function validaCPF(cpf) {
    erro = new String;

    if (cpf.value.length == 14) {
        cpf.value = cpf.value.replace('.', '');
        cpf.value = cpf.value.replace('.', '');
        cpf.value = cpf.value.replace('-', '');

        var nonNumbers = /\D/;

        if (nonNumbers.test(cpf.value)) {
            erro = "A verificacao de CPF suporta apenas números!";
        } else {
            if (cpf.value == "00000000000" ||
                    cpf.value == "11111111111" ||
                    cpf.value == "22222222222" ||
                    cpf.value == "33333333333" ||
                    cpf.value == "44444444444" ||
                    cpf.value == "55555555555" ||
                    cpf.value == "66666666666" ||
                    cpf.value == "77777777777" ||
                    cpf.value == "88888888888" ||
                    cpf.value == "99999999999") {

                erro = "Número de CPF inválido!"
            }

            var a = [];
            var b = new Number;
            var c = 11;

            for (i = 0; i < 11; i++) {
                a[i] = cpf.value.charAt(i);
                if (i < 9)
                    b += (a[i] * --c);
            }

            if ((x = b % 11) < 2) {
                a[9] = 0
            } else {
                a[9] = 11 - x
            }
            b = 0;
            c = 11;

            for (y = 0; y < 10; y++)
                b += (a[y] * c--);

            if ((x = b % 11) < 2) {
                a[10] = 0;
            } else {
                a[10] = 11 - x;
            }

            if ((cpf.value.charAt(9) != a[9]) || (cpf.value.charAt(10) != a[10])) {
                erro = "Número de CPF inválido.";
            }
        }
    } else
    {
        if (cpf.value.length == 0)
            return false
        else
            erro = "Número de CPF inválido.";
    }
    if (erro.length > 0) {
        alert(erro);
        cpf.value = "";
        cpf.focus();
        return false;
    }
    return true;
}

