import { database } from "../../Core/firebase";

let db = database.ref("/leave");

class LeaveDataService {
  getAll() {
    return db;
  }

  create(employees) {
    return db.push(employees);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new LeaveDataService();