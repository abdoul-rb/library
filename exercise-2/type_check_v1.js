
function type_check_v1(arg, type) {
   if (arg === null) return false

   if (typeof(arg) === type) return true
}

obj = {
   name: {
      first: 'Abdoul'
   }
}

console.log(type_check_v1(obj, 'null'))