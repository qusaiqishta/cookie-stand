'use strict'
let operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];






function Location(name, minCustomer, maxCustomer, Avg) {
    this.name = name;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.Avg = Avg;
    this.result = [];

}

Location.prototype.randomCustomer = function () {
    let random = Math.floor(this.minCustomer + Math.random() * (this.maxCustomer - this.minCustomer + 1));
    return random;


}

Location.prototype.avgPurchsed = function () {
    let avg1 = Math.floor(this.Avg * this.randomCustomer());
    return avg1;
}

Location.prototype.finalresult = function () {
    for (let i = 0; i < 14; i++) {
        this.result.push(this.avgPurchsed());

    }
}




let Seattle = new Location('Seattle', 23, 65, 6.3);
let Tokoyo = new Location('Tokoyo', 3, 24, 1.2);
let Dubai = new Location('Dubai', 11, 38, 3.7);
let paris = new Location('paris', 20, 38, 2.3);
let lima = new Location('lima', 2, 16, 4.6);
let total=new Location('Total',20,25,22);


Seattle.randomCustomer();
Seattle.avgPurchsed();
Seattle.finalresult();

Tokoyo.randomCustomer();
Tokoyo.avgPurchsed();
Tokoyo.finalresult();

Dubai.randomCustomer();
Dubai.avgPurchsed();
Dubai.finalresult();

paris.randomCustomer();
paris.avgPurchsed();
paris.finalresult();

lima.randomCustomer();
lima.avgPurchsed();
lima.finalresult();

total.randomCustomer();
total.avgPurchsed();
total.finalresult();
console.log(Seattle);



    let parentElement = document.getElementById('parent5');


    let tableName = document.createElement('table');
    parentElement.appendChild(tableName);

    let headerRow = document.createElement('tr');
    tableName.appendChild(headerRow);
    let th0 = document.createElement('th');
    headerRow.appendChild(th0);
    th0.textContent = '     Name   ';
    for(let i=0;i<operationHour.length;i++){

    let th1 = document.createElement('th');
    headerRow.appendChild(th1);
    th1.textContent = operationHour[i];}



    let th15 = document.createElement('th');
    headerRow.appendChild(th15);
    th15.textContent = 'Total';

    



Location.prototype.render1 = function () {




    let headerRowS = document.createElement('tr');
    tableName.appendChild(headerRowS);

    let th1S = document.createElement('th');
    headerRowS.appendChild(th1S);
    th1S.textContent = 'Seattle';
    for(let i=0;i<operationHour.length;i++){

    let th2S = document.createElement('td');
    headerRowS.appendChild(th2S);
    th2S.textContent = this.result[i];}


    
    
    let th17S = document.createElement('td');
    headerRowS.appendChild(th17S);
    th17S.textContent =this.result[0]+this.result[1]+this.result[2]+this.result[3]+this.result[4]+this.result[5]+this.result[6]+this.result[7]+this.result[8]+this.result[9]+this.result[10]+this.result[11]+this.result[12]+this.result[13];

}



Location.prototype.render2 = function () {
    

    let headerRowt = document.createElement('tr');
    tableName.appendChild(headerRowt);

    let th1t = document.createElement('th');
    headerRowt.appendChild(th1t);
    th1t.textContent = 'Tokoyo';

    for(let i=0;i<operationHour.length;i++){

    let th2t = document.createElement('td');
    headerRowt.appendChild(th2t);
    th2t.textContent = this.result[i];}

    
     
    let th17t = document.createElement('td');
    headerRowt.appendChild(th17t);
    th17t.textContent =this.result[0]+this.result[1]+this.result[2]+this.result[3]+this.result[4]+this.result[5]+this.result[6]+this.result[7]+this.result[8]+this.result[9]+this.result[10]+this.result[11]+this.result[12]+this.result[13];
}


Location.prototype.render3 = function () {

    let headerRowd = document.createElement('tr');
    tableName.appendChild(headerRowd);

    let th1d = document.createElement('th');
    headerRowd.appendChild(th1d);
    th1d.textContent = 'Dubai';
    for(let i=0;i<operationHour.length;i++){

    let th2d = document.createElement('td');
    headerRowd.appendChild(th2d);
    th2d.textContent = this.result[i];}

     
    let th17d = document.createElement('td');
    headerRowd.appendChild(th17d);
    th17d.textContent =this.result[0]+this.result[1]+this.result[2]+this.result[3]+this.result[4]+this.result[5]+this.result[6]+this.result[7]+this.result[8]+this.result[9]+this.result[10]+this.result[11]+this.result[12]+this.result[13];
}




Location.prototype.render4 = function () {



    let headerRowp = document.createElement('tr');
    tableName.appendChild(headerRowp);

    let th1p = document.createElement('th');
    headerRowp.appendChild(th1p);
    th1p.textContent = 'paris';

    for(let i=0;i<operationHour.length;i++){

    let th2p = document.createElement('td');
    headerRowp.appendChild(th2p);
    th2p.textContent = this.result[i];}

    
    let th17p = document.createElement('td');
    headerRowp.appendChild(th17p);
    th17p.textContent =this.result[0]+this.result[1]+this.result[2]+this.result[3]+this.result[4]+this.result[5]+this.result[6]+this.result[7]+this.result[8]+this.result[9]+this.result[10]+this.result[11]+this.result[12]+this.result[13];
}




Location.prototype.render5 = function () {
    





    let headerRowl = document.createElement('tr');
    tableName.appendChild(headerRowl);

    let th1l = document.createElement('th');
    headerRowl.appendChild(th1l);
    th1l.textContent = 'lima';

    for(let i=0;i<operationHour.length;i++){

    let th2l = document.createElement('td');
    headerRowl.appendChild(th2l);
    th2l.textContent = this.result[i];}

    
    let th17l = document.createElement('td');
    headerRowl.appendChild(th17l);
    th17l.textContent =this.result[0]+this.result[1]+this.result[2]+this.result[3]+this.result[4]+this.result[5]+this.result[6]+this.result[7]+this.result[8]+this.result[9]+this.result[10]+this.result[11]+this.result[12]+this.result[13];
}




Location.prototype.render6 = function () {
    
let headerRowf = document.createElement('tr');
tableName.appendChild(headerRowf);

let th1f = document.createElement('th');
headerRowf.appendChild(th1f);
th1f.textContent = 'Total';

for(let i=0;i<operationHour.length;i++){

let th2f = document.createElement('td');
headerRowf.appendChild(th2f);
th2f.textContent = this.result[i];}


let th17f = document.createElement('td');
    headerRowf.appendChild(th17f);
    th17f.textContent =this.result[0]+this.result[1]+this.result[2]+this.result[3]+this.result[4]+this.result[5]+this.result[6]+this.result[7]+this.result[8]+this.result[9]+this.result[10]+this.result[11]+this.result[12]+this.result[13];
}






Seattle.render1();
paris.render4();
Tokoyo.render2();
Dubai.render3();
lima.render5();
total.render6();































































/*Seattle.finalresult();

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
} */
