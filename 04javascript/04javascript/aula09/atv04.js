let n = 10
fibanacci = [0, 1]
for(i = 2; i < n; i++) {
    fibanacci.push(fibanacci[i - 1] + fibanacci[i - 2])
} 
for(i = 0; i < fibanacci.length; i++) {
    console.log(fibanacci[i]);
}

