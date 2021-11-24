
String.prototype.ucfirst = function (str) {
   str = this
   if (str.length === 0) return ''

   return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log('ucfir :  ' + 'hello world'.ucfirst())

String.prototype.capitalize = function (str) {
   str = this
   if (str.length === 0) return ''

   return str.toLowerCase()
            .split(' ')
            .map(function (item) {
               return item.ucfirst()
            })
            .join(' ')
}

console.log('capit :  ' + 'hello world'.capitalize())


String.prototype.camelCase = function (str) {
   str = this
   if (str.length === 0) return ''

   return str.toLowerCase()
            .split(' ')
            .map(function (item) {
               return item.ucfirst()
            })
            .join('')
}

console.log('camCa :  ' + 'hello world guys'.camelCase())


String.prototype.snake_case = function (str) {
   str = this
   if (str.length === 0) return ''

   return str.toLowerCase().replace(/\s/g, '_')
}

console.log('snak_ :  ' + 'hello world guys'.snake_case())


String.prototype.verlan = function (str) {
   str = this
   if (str.length === 0) return ''
   let i = 0
   return str.split(' ').reverse()
            .join(' ')
}

console.log('verln :  ' + 'Hello world'.verlan())



String.prototype.verlan = function (str) {
   str = this
   if (str.length === 0) return ''

   let i = 0
   return str.split(' ').reverse()
            .join(' ')
}

console.log('yoda  :  ' + 'Hello world'.verlan())


String.prototype.vig = function (code) {
   const str = this
   if (string.length === 0) return string

   while(code.length < string.length) {
      code += code
   }

   code = code.substr(0, code.length)

   let codeIndex = 0

   return str.split('')
            .map((letter, index) => {
               letter = letter.toLocaleLowerCase()
               const aCode = 'a'.charCodeAt(0)
               const letterNumber = letter.charCodeAt(0) - aCode
            })
}

console.log('vig   :  ' + 'Hello world'.vig())


String.prototype.prop_access = function (obj, path) {
   console.log('Prop_access')
}

console.log('yoda  :  ' + 'Hello world'.prop_access())