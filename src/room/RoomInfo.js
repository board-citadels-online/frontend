class RoomInfo {

    constructor(id, created, name, slots) {
        this.id = id as String;
        this.created = created as String;
        this.name = name as String;
        this.slots = slots as SlotAvailability;
    }
}

class SlotAvailability {
    constructor(free, total, occupied) {
        this.free = free as Number;
        this.total = total as Number;
        this.occupied = occupied as Number;
    }
}