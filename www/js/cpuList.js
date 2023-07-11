import {CPU} from "./cpu.js"
import {Data} from "./Data.js"

class CpuList
{
    constructor()
    {
        this.cpuList = [];
        this.cpuListCopy = [];
        this.isSorted = true;
    }

    async loadData()
    {
        let temp = await Data.getDB('./cpuz.json');
        this.cpuList = temp;
        this.cpuList = this.cpuList.map(c=>new CPU(c));
        this.cpuListCopy = Array.from(this.cpuList);
    }

    sortByName()
    {
        this.cpuListCopy = this.cpuListCopy.sort(
            (a,b) => a.name.localeCompare(b.name)
        )

            if(!this.isSorted)
            {
                this.cpuListCopy.reverse()
            }

        this.isSorted = !this.isSorted;
    }

    sortByPrice()
    {
        this.cpuListCopy = this.cpuListCopy.sort(
            (a,b) => a.price - b.price
        )

            if(!this.sortedAsc)
            {
                this.cpuListCopy.reverse()
            }

        this.sortedAsc = !this.sortedAsc;
    }

    async searchByName(val)
    {
        await this.loadData();
        val = val.trim();
        if(val.length > 0)
        {
            val = val.toLowerCase()
            this.cpuListCopy = this.cpuListCopy.filter(cpu => cpu.name.toLowerCase().includes(val));
        } 
    }

}

export {CpuList}