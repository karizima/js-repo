function print_sm(age, name){
    console.log("my name is "+ name + ' and i am  '+ age + ' years old')
    
}

my_print(25, "Julius")
my_print(26, "Karl")
my_print(22, "Winnie")
my_print(21, "John")
my_print(25, "Doe")


function todo(funtion_to_return, age, name){
    return funtion_to_return(age, name)
    
}

todo(print_sm, 23, "James")


function print_uganda(){
    var num = 0
    for (num; num < 20; num++){
        console.log(num)
        console.log("I love Uganda")

    }
}

print_uganda()