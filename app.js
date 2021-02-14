'use strict'
let operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
console.log('qusai')
let sum=0;
 let Seattle = {
    minCustomer: 23,
    maxCustomer: 26,
    Avg: 6.3,
    result: [],
    randomCustomer: function () {
        let random=Math.floor(this.minCustomer+Math.random() * (this.maxCustomer-this.minCustomer +1));
        
        console.log(random);

        return random;  
        
    },
    avgPurchsed: function () {
        let avg1 = Math.floor(this.Avg * this.randomCustomer());
        return avg1;
    },
    finalresult: function () {
        for (let i = 0; i < 14; i++) {
            this.result.push(this.avgPurchsed()+":"+operationHour[i]);
            sum=sum +this.avgPurchsed();


        }

    }

}


Seattle.finalresult();

let parent = document.getElementById('parent');




let child = document.createElement('p');
console.log(child);


parent.appendChild(child);


child.textContent = 'seattle';




let unorderedList = document.createElement('ul');

parent.appendChild(unorderedList);


for (let i = 0; i < 14; i++) {


    let listItem = document.createElement('li');

    unorderedList.appendChild(listItem);


    listItem.textContent = Seattle.result[i];
}






let Tokyo = {
    minCustomer: 3,
    maxCustomer: 24,
    Avg: 1.2,
    result: [],
    randomCustomer: function () {
        let random=Math.floor(this.minCustomer+Math.random() * (this.maxCustomer-this.minCustomer +1));
        
        console.log(random);

        return random;  
        
    },
    avgPurchsed: function () {
        let avg1 = Math.floor(this.Avg * this.randomCustomer());
        return avg1;
    },
    finalresult: function () {
        for (let i = 0; i < 14; i++) {
            this.result.push(this.avgPurchsed() +":"+ operationHour[i]);


        }

    }

}
Tokyo.finalresult();


let parent1 = document.getElementById('parent1');



let child1 = document.createElement('p');
console.log(child1);


parent1.appendChild(child1);


child1.textContent = 'Tokyo';



let unorderedList1 = document.createElement('ul');

parent1.appendChild(unorderedList1);


for (let i = 0; i < 14; i++) {


    let listItem = document.createElement('li');

    unorderedList1.appendChild(listItem);


    listItem.textContent = Tokyo.result[i];
}





let Dubai = {
    minCustomer: 23,
    maxCustomer: 26,
    Avg: 6.3,
    result: [],
    randomCustomer: function () {
        let random=Math.floor(this.minCustomer+Math.random() * (this.maxCustomer-this.minCustomer +1));
        
        console.log(random);

        return random;  
        
    },
    avgPurchsed: function () {
        let avg1 = Math.floor(this.Avg * this.randomCustomer());
        return avg1;
    },
    finalresult: function () {
        for (let i = 0; i < 14; i++) {
            this.result.push(this.avgPurchsed()+":"+operationHour[i]);


        }

    }

}


Dubai.finalresult();

let parent2 = document.getElementById('parent2');




let child2 = document.createElement('p');
console.log(child2);


parent2.appendChild(child2);


child2.textContent = 'Dubai';




let unorderedList2 = document.createElement('ul');

parent2.appendChild(unorderedList2);


for (let i = 0; i < 14; i++) {


    let listItem = document.createElement('li');

    unorderedList2.appendChild(listItem);


    listItem.textContent = Dubai.result[i];
}




let paris = {
    minCustomer: 23,
    maxCustomer: 26,
    Avg: 6.3,
    result: [],
    randomCustomer: function () {
        let random=Math.floor(this.minCustomer+Math.random() * (this.maxCustomer-this.minCustomer +1));
        
        console.log(random);

        return random;  
        
    },
    avgPurchsed: function () {
        let avg1 = Math.floor(this.Avg * this.randomCustomer());
        return avg1;
    },
    finalresult: function () {
        for (let i = 0; i < 14; i++) {
            this.result.push(this.avgPurchsed()+":"+operationHour[i]);


        }

    }

}


paris.finalresult();

let parent3 = document.getElementById('parent3');




let child3 = document.createElement('p');
console.log(child3);


parent3.appendChild(child3);


child3.textContent = 'paris';




let unorderedList3 = document.createElement('ul');

parent3.appendChild(unorderedList3);


for (let i = 0; i < 14; i++) {


    let listItem = document.createElement('li');

    unorderedList3.appendChild(listItem);


    listItem.textContent = paris.result[i];
}



let lima = {
    minCustomer: 23,
    maxCustomer: 26,
    Avg: 6.3,
    result: [],
    randomCustomer: function () {
        let random=Math.floor(this.minCustomer+Math.random() * (this.maxCustomer-this.minCustomer +1));
        
        console.log(random);

        return random;  
        
    },
    avgPurchsed: function () {
        let avg1 = Math.floor(this.Avg * this.randomCustomer());
        return avg1;
    },
    finalresult: function () {
        for (let i = 0; i < 14; i++) {
            this.result.push(this.avgPurchsed()+":"+operationHour[i]);


        }

    }

}


lima.finalresult();

let parent4 = document.getElementById('parent4');




let child4 = document.createElement('p');
console.log(child4);


parent4.appendChild(child4);


child4.textContent = 'lima';




let unorderedList4 = document.createElement('ul');

parent4.appendChild(unorderedList4);


for (let i = 0; i < 14; i++) {


    let listItem = document.createElement('li');

    unorderedList4.appendChild(listItem);


    listItem.textContent = lima.result[i];
}

