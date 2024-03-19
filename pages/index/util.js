export function numFormat(num){
			if(num<10000){
				
				return num
			}else if(num<100000000){
				const wan = Math.floor(num/10000)
				return wan+"万"
			}else {
				const yi = Math.floor(num/100000000)
				return yi+"亿"
			}
		}
