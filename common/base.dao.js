class BaseDao {
    constructor(Model) {
      this.Model = Model;
    }
  
    async create(data) {
      const instance = await this.Model.create(data);
      return instance;
    }
  
    find(query, limit , skip , sortBy) {
      return this.Model.find(query).skip(skip).limit(limit).sort(sortBy);
    }
  
    count(query = {}) {
      return this.Model.count(query);
  }
    async findOne(query) {
      const result = await this.Model.findOne(query);
      return result;
    }
  
    remove(query) {
      return this.Model.remove(query);
    }
  
    update(query, body) {
      return this.Model.update(query, { $set: body });
    }
    updateById(id, body) {
      return this.Model.findByIdAndUpdate(id, { $set: body }, { new: true });
    }
  }
  
  //= ====================================== Exports ================================================
  
  module.exports = BaseDao;
  