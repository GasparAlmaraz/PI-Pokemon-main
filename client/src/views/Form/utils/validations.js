export default function validation (inputs) {
    const regexInt = /\d/;

    let errors = {};

    if(!inputs.name){
        errors.name = "El nombre no puede estar vacio";
    }

    if(!inputs.hp){
        errors.hp = "El pokemon debe tener un valor de salud";
    }else if(inputs.hp <= 0){
        errors.hp = "El pokemon no puede tener un valor negativo o nulo de salud";
    }else if(!regexInt.test(inputs.hp)){
        errors.hp = "Debe ingresar un valor numerico";
    }

    if(!inputs.attack){
        errors.attack = "El pokemon debe tener un poder de ataque";
    }else if(inputs.attack < 0){
        errors.attack = "El pokemon no puede tener un nivel de poder negativo";
    }else if(!regexInt.test(inputs.attack)){
        errors.attack = "Debe ingresar un valor numerico";
    }

    if(!inputs.defense){
        errors.defense = "El pokemon debe tener un poder de defensa";
    }else if(inputs.defense < 0){
        errors.defense = "El pokemon no puede tener un nivel de poder negativo";
    }else if(!regexInt.test(inputs.defense)){
        errors.defense = "Debe ingresar un valor numerico";
    }

    if(inputs.speed < 0){
        errors.speed = "El pokemon debe tener un valor positivo o nulo de velocidad";
    }else if(!regexInt.test(inputs.speed)){
        errors.speed = "Debe ingresar un valor numerico";
    }

    if(inputs.height <= 0){
        errors.height = "El pokemon debe tener un valor positivo de altura";
    }else if(!regexInt.test(inputs.height)){
        errors.height = "Debe ingresar un valor numerico";
    }

    if(inputs.weight <= 0){
        errors.weight = "El pokemon debe tener un valor positivo de peso";
    }else if(!regexInt.test(inputs.weight)){
        errors.weight = "Debe ingresar un valor numerico";
    }

    if(!inputs.type.length){
        errors.type = "Debe seleccionar al menos un tipo de pokemon";
    }

    return errors;
}