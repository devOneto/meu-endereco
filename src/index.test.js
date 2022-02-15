import getStreetNameByCep from './index.js'

test('getStreetNameByCep must be a Function', () => {
    expect(getStreetNameByCep).toBeInstanceOf(Function);
})

test('getStreetNameByCep from CEP 60055172 must contain Avenida Visconde do Rio Branco', () => {
    var actual = ''
    getStreetNameByCep('60055172').then(data => {
        actual = data;
        expect(actual).toContain('Avenida Visconde do Rio Branco');
    })
})