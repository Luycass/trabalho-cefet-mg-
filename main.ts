let temperatura = 0
basic.forever(function () {
    temperatura = input.temperature()
    basic.showNumber(temperatura)
    // Espera 5 segundos antes de atualizar a leitura
    basic.pause(5000)
})
