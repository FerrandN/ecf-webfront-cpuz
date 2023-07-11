class CPU
{
    constructor(cpu)
    {
        Object.assign(this,cpu);
        this.name = this.getName();
    }

    getName()
    {
        return this.brand + " " + this.family + " " + this.model;
    }

    getValues()
    {
        return Object.values(this);
    }

}
export {CPU}