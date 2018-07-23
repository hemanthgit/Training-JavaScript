(function(){
    var customer = { customerId : 100, customerNmae : 'Ramesh', toString : function(){
        return this.customerId + '-' + this.customerNmae;
    }
}

    console.log(customer.toString());

    var Product = function(code, name, qty,rpu){
        this.code = code;
        this.name = name;
        this.qty = qty;
        this.rpu = rpu;
    }

    Product.prototype.toString = function(){
        return this.code+',' + this.name+','+this.qty+','+this.rpu;
    }

    Product.prototype.calculate = function(){
        return this.qty * this.rpu;
    }
    
    var cake = new Product(101, 'Black Forest', 450, 2);
    var pakoda = new Product(102, 'Onion  Pakoda', 50, 6);

    var items = [cake,pakoda];

    items.forEach(function(eachItem,idx){
        console.log(++idx + ',' + eachItem.calculate())
    })
})();