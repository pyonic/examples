function inCorrectClosed(string){
	let oposites = {
		'{' : '}',
		'(' : ')',
		'[' : ']'
	}
	let oposite_found = 0; // Количество закрывающихся символов
	let front_found = 0; // Количество окрывающихся символов
	for(var i = 0;i<string.length;i++){
		oposite = oposites[string[i]]; //Берем первую
		if(oposite){ //Если текущий символ есть в словаре
			front_found++; //Увеличиваем кол.во открывающихся
			//Далее по итерации проходим по всем символам после текущей string[i] -> i
			for(var j=i; j<string.length;j++){
				if(oposite == string[j]){ //Если находим закрывающийся символ то инкрементируем oposite_found
					oposite_found++
					break //Останавливаем цикл
				}
			}
		}
	}
	//Если количесвто открытых и количество закрытых совпадают и если длина строки четная то возвражем true иначе false
	return front_found-oposite_found ||  (string.length & 1) ? false : true;
}
let string  = "()(){}()({{[}})[]";
console.log(inCorrectClosed(string))
