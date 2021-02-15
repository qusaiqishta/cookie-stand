'use strict'
let operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

/*let Seattle = {
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

}*/






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
    th0.textContent = '        ';

    let th1 = document.createElement('th');
    headerRow.appendChild(th1);
    th1.textContent = operationHour[0];



    let th2 = document.createElement('th');
    headerRow.appendChild(th2);
    th2.textContent = operationHour[1];


    let th3 = document.createElement('th');
    headerRow.appendChild(th3);
    th3.textContent = operationHour[2];


    let th4 = document.createElement('th');
    headerRow.appendChild(th4);
    th4.textContent = operationHour[3];



    let th5 = document.createElement('th');
    headerRow.appendChild(th5);
    th5.textContent = operationHour[4];



    let th6 = document.createElement('th');
    headerRow.appendChild(th6);
    th6.textContent = operationHour[5];



    let th7 = document.createElement('th');
    headerRow.appendChild(th7);
    th7.textContent = operationHour[6];



    let th8 = document.createElement('th');
    headerRow.appendChild(th8);
    th8.textContent = operationHour[7];



    let th9 = document.createElement('th');
    headerRow.appendChild(th9);
    th9.textContent = operationHour[8];



    let th10 = document.createElement('th');
    headerRow.appendChild(th10);
    th10.textContent = operationHour[9];



    let th11 = document.createElement('th');
    headerRow.appendChild(th11);
    th11.textContent = operationHour[10];



    let th12 = document.createElement('th');
    headerRow.appendChild(th12);
    th12.textContent = operationHour[11];



    let th13 = document.createElement('th');
    headerRow.appendChild(th13);
    th13.textContent = operationHour[12];


    let th14 = document.createElement('th');
    headerRow.appendChild(th14);
    th14.textContent = operationHour[13];




Location.prototype.render1 = function () {




    let headerRowS = document.createElement('tr');
    tableName.appendChild(headerRowS);

    let th1S = document.createElement('th');
    headerRowS.appendChild(th1S);
    th1S.textContent = 'Seattle';

    let th2S = document.createElement('td');
    headerRowS.appendChild(th2S);
    th2S.textContent = this.result[0];

    let th3S = document.createElement('td');
    headerRowS.appendChild(th3S);
    th3S.textContent = this.result[1];

    let th4S = document.createElement('td');
    headerRowS.appendChild(th4S);
    th4S.textContent = this.result[2];

    let th5S = document.createElement('td');
    headerRowS.appendChild(th5S);
    th5S.textContent = this.result[3];

    let th6S = document.createElement('td');
    headerRowS.appendChild(th6S);
    th6S.textContent = this.result[4];


    let th7S = document.createElement('td');
    headerRowS.appendChild(th7S);
    th7S.textContent = this.result[5];


    let th8S = document.createElement('td');
    headerRowS.appendChild(th8S);
    th8S.textContent = this.result[6];


    let th9S = document.createElement('td');
    headerRowS.appendChild(th9S);
    th9S.textContent = this.result[7];


    let th10S = document.createElement('td');
    headerRowS.appendChild(th10S);
    th10S.textContent = this.result[8];


    let th11S = document.createElement('td');
    headerRowS.appendChild(th11S);
    th11S.textContent = this.result[9];


    let th12S = document.createElement('td');
    headerRowS.appendChild(th12S);
    th12S.textContent = this.result[10];


    let th13S = document.createElement('td');
    headerRowS.appendChild(th13S);
    th13S.textContent = this.result[11];


    let th14S = document.createElement('td');
    headerRowS.appendChild(th14S);
    th14S.textContent = this.result[12];


    let th15S = document.createElement('td');
    headerRowS.appendChild(th15S);
    th15S.textContent = this.result[13];



    let th16S = document.createElement('td');
    headerRowS.appendChild(th16S);
    th16S.textContent = this.result[14];
}



Location.prototype.render2 = function () {
    

    let headerRowt = document.createElement('tr');
    tableName.appendChild(headerRowt);

    let th1t = document.createElement('th');
    headerRowt.appendChild(th1t);
    th1t.textContent = 'Tokoyo';

    let th2t = document.createElement('td');
    headerRowt.appendChild(th2t);
    th2t.textContent = this.result[0];

    let th3t = document.createElement('td');
    headerRowt.appendChild(th3t);
    th3t.textContent = this.result[1];

    let th4t = document.createElement('td');
    headerRowt.appendChild(th4t);
    th4t.textContent = this.result[2];

    let th5t = document.createElement('td');
    headerRowt.appendChild(th5t);
    th5t.textContent = this.result[3];

    let th6t = document.createElement('td');
    headerRowt.appendChild(th6t);
    th6t.textContent = this.result[4];


    let th7t = document.createElement('td');
    headerRowt.appendChild(th7t);
    th7t.textContent = this.result[5];


    let th8t = document.createElement('td');
    headerRowt.appendChild(th8t);
    th8t.textContent = this.result[6];


    let th9t = document.createElement('td');
    headerRowt.appendChild(th9t);
    th9t.textContent = this.result[7];


    let th10t = document.createElement('td');
    headerRowt.appendChild(th10t);
    th10t.textContent = this.result[8];


    let th11t = document.createElement('td');
    headerRowt.appendChild(th11t);
    th11t.textContent = this.result[9];


    let th12t = document.createElement('td');
    headerRowt.appendChild(th12t);
    th12t.textContent = this.result[10];


    let th13t = document.createElement('td');
    headerRowt.appendChild(th13t);
    th13t.textContent = this.result[11];


    let th14t = document.createElement('td');
    headerRowt.appendChild(th14t);
    th14t.textContent = this.result[12];


    let th15t = document.createElement('td');
    headerRowt.appendChild(th15t);
    th15t.textContent = this.result[13];



    let th16t = document.createElement('td');
    headerRowt.appendChild(th16t);
    th16t.textContent = this.result[14];
}


Location.prototype.render3 = function () {

    let headerRowd = document.createElement('tr');
    tableName.appendChild(headerRowd);

    let th1d = document.createElement('th');
    headerRowd.appendChild(th1d);
    th1d.textContent = 'Dubai';

    let th2d = document.createElement('td');
    headerRowd.appendChild(th2d);
    th2d.textContent = this.result[0];

    let th3d = document.createElement('td');
    headerRowd.appendChild(th3d);
    th3d.textContent = this.result[1];

    let th4d = document.createElement('td');
    headerRowd.appendChild(th4d);
    th4d.textContent = this.result[2];

    let th5d = document.createElement('td');
    headerRowd.appendChild(th5d);
    th5d.textContent = this.result[3];

    let th6d = document.createElement('td');
    headerRowd.appendChild(th6d);
    th6d.textContent = this.result[4];


    let th7d = document.createElement('td');
    headerRowd.appendChild(th7d);
    th7d.textContent = this.result[5];


    let th8d = document.createElement('td');
    headerRowd.appendChild(th8d);
    th8d.textContent = this.result[6];


    let th9d = document.createElement('td');
    headerRowd.appendChild(th9d);
    th9d.textContent = this.result[7];


    let th10d = document.createElement('td');
    headerRowd.appendChild(th10d);
    th10d.textContent = this.result[8];


    let th11d = document.createElement('td');
    headerRowd.appendChild(th11d);
    th11d.textContent = this.result[9];


    let th12d = document.createElement('td');
    headerRowd.appendChild(th12d);
    th12d.textContent = this.result[10];


    let th13d = document.createElement('td');
    headerRowd.appendChild(th13d);
    th13d.textContent = this.result[11];


    let th14d = document.createElement('td');
    headerRowd.appendChild(th14d);
    th14d.textContent = this.result[12];


    let th15d = document.createElement('td');
    headerRowd.appendChild(th15d);
    th15d.textContent = this.result[13];



    let th16d = document.createElement('td');
    headerRowd.appendChild(th16d);
    th16d.textContent = this.result[14];
}




Location.prototype.render4 = function () {



    let headerRowp = document.createElement('tr');
    tableName.appendChild(headerRowp);

    let th1p = document.createElement('th');
    headerRowp.appendChild(th1p);
    th1p.textContent = 'paris';

    let th2p = document.createElement('td');
    headerRowp.appendChild(th2p);
    th2p.textContent = this.result[0];

    let th3p = document.createElement('td');
    headerRowp.appendChild(th3p);
    th3p.textContent = this.result[1];

    let th4p = document.createElement('td');
    headerRowp.appendChild(th4p);
    th4p.textContent = this.result[2];

    let th5p = document.createElement('td');
    headerRowp.appendChild(th5p);
    th5p.textContent = this.result[3];

    let th6p = document.createElement('td');
    headerRowp.appendChild(th6p);
    th6p.textContent = this.result[4];


    let th7p = document.createElement('td');
    headerRowp.appendChild(th7p);
    th7p.textContent = this.result[5];


    let th8p = document.createElement('td');
    headerRowp.appendChild(th8p);
    th8p.textContent = this.result[6];


    let th9p = document.createElement('td');
    headerRowp.appendChild(th9p);
    th9p.textContent = this.result[7];


    let th10p = document.createElement('td');
    headerRowp.appendChild(th10p);
    th10p.textContent = this.result[8];


    let th11p = document.createElement('td');
    headerRowp.appendChild(th11p);
    th11p.textContent = this.result[9];


    let th12p = document.createElement('td');
    headerRowp.appendChild(th12p);
    th12p.textContent = this.result[10];


    let th13p = document.createElement('td');
    headerRowp.appendChild(th13p);
    th13p.textContent = this.result[11];


    let th14p = document.createElement('td');
    headerRowp.appendChild(th14p);
    th14p.textContent = this.result[12];


    let th15p = document.createElement('td');
    headerRowp.appendChild(th15p);
    th15p.textContent = this.result[13];



    let th16p = document.createElement('td');
    headerRowp.appendChild(th16p);
    th16p.textContent = this.result[14];
}




Location.prototype.render5 = function () {
    





    let headerRowl = document.createElement('tr');
    tableName.appendChild(headerRowl);

    let th1l = document.createElement('th');
    headerRowl.appendChild(th1l);
    th1l.textContent = 'lima';

    let th2l = document.createElement('td');
    headerRowl.appendChild(th2l);
    th2l.textContent = this.result[0];

    let th3l = document.createElement('td');
    headerRowl.appendChild(th3l);
    th3l.textContent = this.result[1];

    let th4l = document.createElement('td');
    headerRowl.appendChild(th4l);
    th4l.textContent = this.result[2];

    let th5l = document.createElement('td');
    headerRowl.appendChild(th5l);
    th5l.textContent = this.result[3];

    let th6l = document.createElement('td');
    headerRowl.appendChild(th6l);
    th6l.textContent = this.result[4];


    let th7l = document.createElement('td');
    headerRowl.appendChild(th7l);
    th7l.textContent = this.result[5];


    let th8l = document.createElement('td');
    headerRowl.appendChild(th8l);
    th8l.textContent = this.result[6];


    let th9l = document.createElement('td');
    headerRowl.appendChild(th9l);
    th9l.textContent = this.result[7];


    let th10l = document.createElement('td');
    headerRowl.appendChild(th10l);
    th10l.textContent = this.result[8];


    let th11l = document.createElement('td');
    headerRowl.appendChild(th11l);
    th11l.textContent = this.result[9];


    let th12l = document.createElement('td');
    headerRowl.appendChild(th12l);
    th12l.textContent = this.result[10];


    let th13l = document.createElement('td');
    headerRowl.appendChild(th13l);
    th13l.textContent = this.result[11];


    let th14l = document.createElement('td');
    headerRowl.appendChild(th14l);
    th14l.textContent = this.result[12];


    let th15l = document.createElement('td');
    headerRowl.appendChild(th15l);
    th15l.textContent = this.result[13];



    let th16l = document.createElement('td');
    headerRowl.appendChild(th16l);
    th16l.textContent = this.result[14];
}




Location.prototype.render6 = function () {
    
let headerRowf = document.createElement('tr');
tableName.appendChild(headerRowf);

let th1f = document.createElement('th');
headerRowf.appendChild(th1f);
th1f.textContent = 'Total';

let th2f = document.createElement('td');
headerRowf.appendChild(th2f);
th2f.textContent = this.result[0];

let th3f = document.createElement('td');
headerRowf.appendChild(th3f);
th3f.textContent = this.result[1];

let th4f = document.createElement('td');
headerRowf.appendChild(th4f);
th4f.textContent = this.result[2];

let th5f = document.createElement('td');
headerRowf.appendChild(th5f);
th5f.textContent = this.result[3];

let th6f = document.createElement('td');
headerRowf.appendChild(th6f);
th6f.textContent = this.result[4];


let th7f = document.createElement('td');
headerRowf.appendChild(th7f);
th7f.textContent = this.result[5];


let th8f = document.createElement('td');
headerRowf.appendChild(th8f);
th8f.textContent = this.result[6];


let th9f = document.createElement('td');
headerRowf.appendChild(th9f);
th9f.textContent = this.result[7];


let th10f = document.createElement('td');
headerRowf.appendChild(th10f);
th10f.textContent = this.result[8];


let th11f = document.createElement('td');
headerRowf.appendChild(th11f);
th11f.textContent = this.result[9];


let th12f = document.createElement('td');
headerRowf.appendChild(th12f);
th12f.textContent = this.result[10];


let th13f = document.createElement('td');
headerRowf.appendChild(th13f);
th13f.textContent = this.result[11];


let th14f = document.createElement('td');
headerRowf.appendChild(th14f);
th14f.textContent = this.result[12];


let th15f = document.createElement('td');
headerRowf.appendChild(th15f);
th15f.textContent = this.result[13];



let th16l = document.createElement('td');
headerRowl.appendChild(th16l);
th16l.textContent = this.result[14];
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
