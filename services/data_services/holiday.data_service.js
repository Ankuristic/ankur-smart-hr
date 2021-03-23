import { database } from "../../Core/firebase";

let db = database.ref("/holiday");

class HolidayDataService {
  getAll() {
    return db;
  }

  create(holiday) {
    return db.push(holiday);
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

export default new HolidayDataService();
