
 class LocalStorageService {
  set(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  get(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }
  
  clear() {
    try {
      localStorage.clear();
      return null;
    } catch (e) {
      return e;
    }
  }
}

export default new LocalStorageService()