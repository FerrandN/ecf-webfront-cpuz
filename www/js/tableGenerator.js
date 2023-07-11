class TableGenerator
{
    constructor(_cpuList)
    {
        this.cpuList = _cpuList;
        this.tBody = document.getElementById("cpuTable");
        this.modelCount = document.getElementById("modelCount");
    }

    generateTable()
    {
        this.tBody.innerHTML="";
        for(let cpu of this.cpuList.cpuListCopy)
        {
            let tr = this.generateRow(cpu);
            this.tBody.appendChild(tr);
        }
        console.log()
        this.countDisplayedCPUs();
    }

    generateRow(cpu)
    {
        let tr = document.createElement("tr");
        for (let val of cpu.getValues())
        {
            let cellTemp = this.generateCell(val);
            tr.appendChild(cellTemp);
        }
        return tr;
    }
    
    generateCell(val)
    {
        let td = document.createElement("td");
        td.textContent=val;
        return td;
    }

    countDisplayedCPUs()
    {
        this.modelCount.innerText = this.cpuList.cpuListCopy.length;
    }
}
export {TableGenerator}