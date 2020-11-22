function type_check_v2(arg, obj) {
   for (toCheck in obj) {
      switch(toString) {
         case 'type':
            if (type_check_v1(arg, conf.type) === false) return false
            break
         case 'value':
            if(JSON.stringify(arg) !== JSON.stringify(conf.value)) return false
            break
         case 'enum':
            let found = false
            for (subValue of conf.enum) {
               if (!found) found = type_check_v2(arg, { value: subValue })
               if (found) break
            }
            if (!found) return false
            break
      }
      
   }
}

obj = {
   name: {
      first: 'Abdoul'
   }
}

console.log(type_check_v1(obj, 'null'))