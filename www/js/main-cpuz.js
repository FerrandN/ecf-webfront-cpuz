import {CpuList} from "./cpuList.js"
import { TableGenerator } from "./tableGenerator.js";

let cpuList = new CpuList();
await cpuList.loadData();

let cpuTable = new TableGenerator(cpuList);
cpuTable.generateTable();

document.getElementById("fullName").addEventListener("click", (event) =>{
    cpuList.sortByName();
    cpuTable.generateTable();
});

document.getElementById("price").addEventListener("click", (event) =>{
    cpuList.sortByPrice();
    cpuTable.generateTable();
});

document.getElementById("searchBar").addEventListener("input", async (event) =>{
    //contient la valeur du champ lorsque l'évenement est déclenché
    let searchBarValue = event.target.value;

    await cpuList.searchByName(searchBarValue);
    
    //regenère le tableau
    cpuTable.generateTable();
});