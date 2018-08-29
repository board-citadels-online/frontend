class RoomInfo {
    constructor(id, created, name, slots) {
        this.id = id;
        this.created = created;
        this.name = name;
        this.slots = slots;
    }
}

class SlotAvailability {
    constructor(free, total, occupied) {
        this.free = free;
        this.total = total;
        this.occupied = occupied;
    }
}